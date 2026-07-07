// TODO: Replace with actual CRMUser model/collection lookup when available
// For now, trust frontend role via x-user-id (session-based auth)
const mongoose = require('mongoose');
const WalletSchema = require('../models/Wallet');
const Wallet = mongoose.models.Wallet || mongoose.model('Wallet', WalletSchema);

const getUserFromHeader = (req) => {
  const userId = req.headers['x-user-id'];
  if (!userId) return null;
  
  // Simulate role lookup - in production, query CRM users collection
  // For now, all valid x-user-id = authenticated (frontend handles role UI)
  return {
    _id: userId,
    role: 'manager', // Default safe role for testing
    name: 'CRM User'
  };
};

const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'namandarshan-secret';

function readAuthSession(req) {
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return null;
  }

  const token = authorization.split(' ')[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return {
      id: payload.id,
      email: payload.email,
      role: payload.role || 'user',
      name: payload.name || ''
    };
  } catch (error) {
    console.warn('🔐 Auth: Invalid or expired token', error.message);
    return null;
  }
}

async function creditWalletForSession(req, session, amount) {
  const userId = session?.id;
  const rechargeAmount = Number(amount);
  if (!userId || !Number.isFinite(rechargeAmount) || rechargeAmount <= 0) {
    throw new Error('Invalid wallet recharge arguments');
  }

  const wallet = await Wallet.findOneAndUpdate(
    { userId },
    { $inc: { balance: rechargeAmount } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  return wallet.toObject ? wallet.toObject() : wallet;
}

async function recordWalletSpendForSession(req, session, amount) {
  const userId = session?.id;
  const spendAmount = Number(amount);
  if (!userId || !Number.isFinite(spendAmount) || spendAmount <= 0) {
    throw new Error('Invalid wallet spend arguments');
  }

  const wallet = await Wallet.findOne({ userId });
  if (!wallet) {
    throw new Error('Wallet not found');
  }

  wallet.balance = Number(wallet.balance || 0) - spendAmount;
  await wallet.save();
  const walletObject = wallet.toObject ? wallet.toObject() : wallet;

  return {
    wallet: walletObject,
    amountDebited: spendAmount,
  };
}

// Load CRM user from x-user-id header and populate req.user
const loadCRMUser = async (req, res, next) => {
  try {
    const userId = req.headers['x-user-id'];
    console.log('🔐 Auth: x-user-id:', userId);
    
    if (!userId) {
      console.log('🔐 Auth: No x-user-id header');
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    // Lookup user (replace with actual CRMUser model/collection)
    const user = getUserFromHeader(req);
    
    if (!user) {
      console.log('🔐 Auth: User not found:', userId);
      return res.status(401).json({ success: false, message: 'User not found' });
    }

    // Frontend normalization: team -> manager
    const normalizedRole = user.role === 'team' ? 'manager' : user.role;
    console.log('🔐 Auth: User role:', user.role, '→ normalized:', normalizedRole);

    req.user = {
      ...user,
      role: normalizedRole || user.role
    };

    console.log('🔐 Auth: Headers:', Object.keys(req.headers).filter(h => h.includes('user') || h.includes('auth')));
    next();
  } catch (error) {
    console.error('🔐 Auth error:', error);
    res.status(500).json({ success: false, message: 'Auth server error' });
  }
};

// All authenticated CRM users
const requireAuthenticated = [loadCRMUser];

// Admin or Manager (or normalized equivalents)
const requireAdminOrAbove = async (req, res, next) => {
  await loadCRMUser(req, res, () => {});
  
  const userRole = req.user?.role;
  console.log('🔐 Admin check: role=', userRole);
  
  if (!userRole || (userRole !== 'admin' && userRole !== 'manager' && userRole !== 'master_admin')) {
    console.log('🔐 Admin check: Access denied for role:', userRole);
    return res.status(403).json({ success: false, message: 'Admin or Manager access required' });
  }
  
  next();
};

module.exports = {
  requireAuthenticated,
  requireAdminOrAbove,
  loadCRMUser,
  readAuthSession,
  creditWalletForSession,
  recordWalletSpendForSession
};
