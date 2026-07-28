
const express = require('express');
const router = express.Router();
const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { sendEmail } = require('../services/emailService');

const JWT_SECRET = process.env.JWT_SECRET || 'namandarshan-secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
const OTP_TTL_MS = 5 * 60 * 1000;
const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo';
const otpStore = new Map();

const normalizeEmail = (email) => String(email || '').trim().toLowerCase();
const normalizeRole = (role) => {
  const normalizedRole = String(role || 'user').trim().toLowerCase();
  const allowedRoles = new Set(['user', 'admin', 'manager', 'astrologer', 'pandit']);
  return allowedRoles.has(normalizedRole) ? normalizedRole : 'user';
};

const createToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role || 'user',
      name: user.name || ''
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};

const authMiddleware = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Authorization header missing' });
  }

  const token = authorization.split(' ')[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(payload.id).lean();
    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error('Auth token error:', error);
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
};

const scheduleOtpCleanup = (email) => {
  setTimeout(() => {
    otpStore.delete(email);
  }, OTP_TTL_MS + 1000);
};

const isEmailDeliveryConfigured = () => {
  const configuredProvider = String(process.env.EMAIL_PROVIDER || '').trim().toLowerCase();

  return Boolean(
    (configuredProvider === 'smtp' && process.env.SMTP_HOST) ||
    configuredProvider === 'ses' ||
    process.env.SMTP_HOST ||
    (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) ||
    process.env.SES_ENABLED === 'true'
  );
};

const verifyGoogleAccessToken = async (accessToken) => {
  const token = String(accessToken || '').trim();
  if (!token) {
    const error = new Error('Google access token is required');
    error.status = 400;
    throw error;
  }

  try {
    const response = await axios.get(GOOGLE_USERINFO_URL, {
      headers: { Authorization: `Bearer ${token}` },
      timeout: 8000,
    });

    const profile = response.data || {};
    const email = normalizeEmail(profile.email);
    const socialId = String(profile.sub || '').trim();

    if (!email || !socialId) {
      const error = new Error('Google account did not return a verified profile');
      error.status = 401;
      throw error;
    }

    if (profile.email_verified === false || profile.email_verified === 'false') {
      const error = new Error('Google account email is not verified');
      error.status = 401;
      throw error;
    }

    return {
      email,
      socialId,
      name: String(profile.name || profile.given_name || '').trim(),
    };
  } catch (error) {
    if (error.status) throw error;

    const authError = new Error('Google authentication failed');
    authError.status = error.response?.status === 401 ? 401 : 502;
    throw authError;
  }
};

router.post('/signup', async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    const password = req.body.password;
    const name = req.body.name;
    // Public sign-up is devotee-only; pandit/astrologer accounts are created by admins only.
    const role = "user";

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword, name, authProvider: 'local', role });
    const token = createToken(user);

    res.json({ success: true, message: 'Signup successful', token });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ success: false, message: 'Signup failed' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    const password = req.body.password;
    const requestedRole = normalizeRole(req.body.role);

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user || !user.password) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    let shouldSaveUser = false;
    let passwordMatch = false;

    try {
      passwordMatch = await bcrypt.compare(password, user.password);
    } catch (compareError) {
      passwordMatch = false;
    }

    const storedPassword = String(user.password || '');
    const isBcryptHash = storedPassword.startsWith('$2');
    if (!passwordMatch && !isBcryptHash && user.authProvider === 'local' && storedPassword === password) {
      user.password = await bcrypt.hash(password, 10);
      passwordMatch = true;
      shouldSaveUser = true;
    }

    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    if (user.role !== requestedRole && requestedRole === 'pandit') {
      user.role = 'pandit';
      shouldSaveUser = true;
    }

    if (shouldSaveUser) {
      await user.save();
    }

    const token = createToken(user);
    res.json({ success: true, message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Login failed' });
  }
});

router.post('/send-otp', async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    const role = normalizeRole(req.body.role);
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore.set(email, { otp, role, expiresAt: Date.now() + OTP_TTL_MS });
    scheduleOtpCleanup(email);

    const subject = 'Your Naman Darshan OTP';
    const html = `<p>Your one-time password is: <strong>${otp}</strong></p><p>This code expires in 5 minutes.</p>`;

    try {
      if (isEmailDeliveryConfigured()) {
        await sendEmail(email, subject, html);
      } else {
        console.log(`OTP for ${email}: ${otp}`);
      }
    } catch (emailError) {
      console.error('OTP email send failed:', emailError);
      return res.status(500).json({ success: false, message: 'Failed to send OTP email' });
    }

    res.json({ success: true, message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Send OTP error:', error);
    res.status(500).json({ success: false, message: 'Failed to send OTP' });
  }
});

router.post('/verify-otp', async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    const otp = String(req.body.otp || '').replace(/\D/g, '');
    if (!email || !otp) {
      return res.status(400).json({ success: false, message: 'Email and OTP are required' });
    }

    const stored = otpStore.get(email);
    if (!stored || stored.otp !== otp || stored.expiresAt < Date.now()) {
      return res.status(400).json({ success: false, message: 'Invalid or expired OTP' });
    }

    otpStore.delete(email);
    const requestedRole = normalizeRole(req.body.role || stored.role);
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email, authProvider: 'otp', role: requestedRole });
    } else {
      let shouldSaveUser = false;

      if (!user.authProvider) {
        user.authProvider = 'otp';
        shouldSaveUser = true;
      }

      if (requestedRole === 'pandit' && user.role !== 'pandit') {
        user.role = 'pandit';
        shouldSaveUser = true;
      }

      if (shouldSaveUser) {
        await user.save();
      }
    }

    const token = createToken(user);
    res.json({ success: true, message: 'OTP verified', token });
  } catch (error) {
    console.error('Verify OTP error:', error);
    res.status(500).json({ success: false, message: 'Failed to verify OTP' });
  }
});

router.post('/social-login', async (req, res) => {
  try {
    const provider = String(req.body.provider || 'social').trim().toLowerCase();
    const role = normalizeRole(req.body.role);
    let email = normalizeEmail(req.body.email);
    let name = req.body.name;
    let socialId = String(req.body.socialId || '');

    if (provider === 'google') {
      const googleAccessToken = req.body.accessToken || req.body.access_token;
      if (googleAccessToken) {
        const googleProfile = await verifyGoogleAccessToken(googleAccessToken);
        email = googleProfile.email;
        name = googleProfile.name || name;
        socialId = googleProfile.socialId;
      }
    }

    if (!email || !socialId) {
      return res.status(400).json({ success: false, message: 'Provider, email, and socialId are required' });
    }

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email, name, authProvider: provider, socialId, role });
    } else {
      user.name = user.name || name;
      user.authProvider = provider;
      user.socialId = socialId;
      if (role === 'pandit') user.role = 'pandit';
      await user.save();
    }

    const token = createToken(user);
    res.json({ success: true, message: 'Social login successful', token });
  } catch (error) {
    console.error('Social login error:', error);
    res.status(error.status || 500).json({ success: false, message: error.message || 'Social login failed' });
  }
});

router.get('/me', authMiddleware, async (req, res) => {
  const user = req.user;
  res.json({ success: true, user: { _id: user._id, email: user.email, name: user.name, role: user.role, authProvider: user.authProvider } });
});

router.patch('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (typeof req.body.name === 'string') user.name = req.body.name;
    if (typeof req.body.password === 'string' && req.body.password.trim().length > 0) {
      user.password = await bcrypt.hash(req.body.password, 10);
    }

    await user.save();

    res.json({ success: true, message: 'Profile updated', user: { _id: user._id, email: user.email, name: user.name, role: user.role } });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ success: false, message: 'Failed to update profile' });
  }
});

module.exports = router;
