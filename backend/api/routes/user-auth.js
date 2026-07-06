const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { sendEmail } = require('../services/emailService');

const JWT_SECRET = process.env.JWT_SECRET || 'namandarshan-secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
const OTP_TTL_MS = 5 * 60 * 1000;
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

router.post('/signup', async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    const password = req.body.password;
    const name = req.body.name;
    const role = normalizeRole(req.body.role);

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

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user || !user.password) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    if (user.role !== role && role === 'pandit') {
      user.role = 'pandit';
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
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore.set(email, { otp, expiresAt: Date.now() + OTP_TTL_MS });
    scheduleOtpCleanup(email);

    const subject = 'Your Naman Darshan OTP';
    const html = `<p>Your one-time password is: <strong>${otp}</strong></p><p>This code expires in 5 minutes.</p>`;

    try {
      if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
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
    const otp = String(req.body.otp || '');
    if (!email || !otp) {
      return res.status(400).json({ success: false, message: 'Email and OTP are required' });
    }

    const stored = otpStore.get(email);
    if (!stored || stored.otp !== otp || stored.expiresAt < Date.now()) {
      return res.status(400).json({ success: false, message: 'Invalid or expired OTP' });
    }

    otpStore.delete(email);
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email, authProvider: 'otp', role: 'user' });
    } else {
      user.authProvider = user.authProvider || 'otp';
      await user.save();
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
    const email = normalizeEmail(req.body.email);
    const provider = String(req.body.provider || 'social');
    const name = req.body.name;
    const socialId = String(req.body.socialId || '');
    const role = normalizeRole(req.body.role);

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
    res.status(500).json({ success: false, message: 'Social login failed' });
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