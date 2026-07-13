const crypto = require('crypto');
const mongoose = require('mongoose');
const WalletSchema = require('../models/Wallet');
const WalletTransactionSchema = require('../models/WalletTransaction');

const Wallet = mongoose.models.Wallet || mongoose.model('Wallet', WalletSchema);
const WalletTransaction =
  mongoose.models.WalletTransaction || mongoose.model('WalletTransaction', WalletTransactionSchema);

const SIGNATURE_VERSION = 'wallet-v1';

function getSecret() {
  return process.env.WALLET_INTEGRITY_SECRET || process.env.JWT_SECRET || 'namandarshan-secret';
}

function normalizeUserId(userId) {
  return String(userId || '').trim();
}

function normalizeAmount(value) {
  const amount = Number(value);
  if (!Number.isFinite(amount)) return 0;
  return Math.round(amount * 100) / 100;
}

function hmac(value) {
  return crypto.createHmac('sha256', getSecret()).update(value).digest('hex');
}

function timingSafeEqualString(left, right) {
  if (!left || !right) return false;
  const leftBuffer = Buffer.from(String(left));
  const rightBuffer = Buffer.from(String(right));
  if (leftBuffer.length !== rightBuffer.length) return false;
  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function walletSignaturePayload({ userId, balance, lastTransactionId }) {
  return [
    SIGNATURE_VERSION,
    'wallet',
    normalizeUserId(userId),
    normalizeAmount(balance).toFixed(2),
    String(lastTransactionId || '')
  ].join('|');
}

function signWalletBalance({ userId, balance, lastTransactionId }) {
  return hmac(walletSignaturePayload({ userId, balance, lastTransactionId }));
}

function transactionSignaturePayload(transaction) {
  return [
    SIGNATURE_VERSION,
    'transaction',
    String(transaction.transactionId || ''),
    normalizeUserId(transaction.userId),
    String(transaction.type || ''),
    normalizeAmount(transaction.amount).toFixed(2),
    normalizeAmount(transaction.balanceAfter).toFixed(2),
    String(transaction.source || ''),
    String(transaction.sourceId || '')
  ].join('|');
}

function signTransaction(transaction) {
  return hmac(transactionSignaturePayload(transaction));
}

function isValidWalletSignature(wallet) {
  if (!wallet?.balanceSignature) return false;
  const expected = signWalletBalance({
    userId: wallet.userId,
    balance: wallet.balance,
    lastTransactionId: wallet.lastTransactionId
  });
  return timingSafeEqualString(wallet.balanceSignature, expected);
}

function isValidTransaction(transaction) {
  if (!transaction?.signature) return false;
  return timingSafeEqualString(transaction.signature, signTransaction(transaction));
}

function toWalletObject(wallet, balance, integrity) {
  const item = typeof wallet?.toObject === 'function' ? wallet.toObject() : (wallet || {});
  return {
    ...item,
    balance: normalizeAmount(balance),
    integrity
  };
}

async function readValidTransactions(userId) {
  const transactions = await WalletTransaction.find({ userId: normalizeUserId(userId) })
    .sort({ createdAt: 1, _id: 1 })
    .lean();
  const validTransactions = transactions.filter(isValidTransaction);

  return {
    transactions,
    validTransactions,
    tamperedTransactionCount: transactions.length - validTransactions.length
  };
}

function balanceFromTransactions(transactions) {
  if (!transactions.length) return 0;
  return normalizeAmount(transactions[transactions.length - 1].balanceAfter);
}

async function createSignedTransaction({
  userId,
  type,
  amount,
  balanceAfter,
  source = 'system',
  sourceId = '',
  description = '',
  metadata = null
}) {
  const transaction = new WalletTransaction({
    transactionId: crypto.randomUUID(),
    userId: normalizeUserId(userId),
    type,
    amount: normalizeAmount(amount),
    balanceAfter: normalizeAmount(balanceAfter),
    source,
    sourceId,
    description,
    metadata
  });
  transaction.signature = signTransaction(transaction);
  await transaction.save();
  return transaction;
}

async function saveWalletMirror(wallet, { balance, lastTransactionId }) {
  wallet.balance = normalizeAmount(balance);
  wallet.lastTransactionId = lastTransactionId || wallet.lastTransactionId || '';
  wallet.balanceSignatureVersion = SIGNATURE_VERSION;
  wallet.balanceSignature = signWalletBalance({
    userId: wallet.userId,
    balance: wallet.balance,
    lastTransactionId: wallet.lastTransactionId
  });
  wallet.integrityCheckedAt = new Date();
  if (!wallet.ledgerInitializedAt) {
    wallet.ledgerInitializedAt = new Date();
  }
  await wallet.save();
  return wallet;
}

async function findOrCreateWallet(userId) {
  const normalizedUserId = normalizeUserId(userId);
  if (!normalizedUserId) {
    throw new Error('Wallet user id is required');
  }

  let wallet = await Wallet.findOne({ userId: normalizedUserId });
  if (!wallet) {
    wallet = await Wallet.create({ userId: normalizedUserId, balance: 0 });
  }
  return wallet;
}

async function getVerifiedWalletBalance(userId) {
  const wallet = await findOrCreateWallet(userId);
  const signatureTrusted = isValidWalletSignature(wallet);

  if (signatureTrusted) {
    wallet.integrityCheckedAt = new Date();
    await wallet.save();
    return {
      balance: normalizeAmount(wallet.balance),
      wallet: toWalletObject(wallet, wallet.balance, {
        trusted: true,
        repaired: false,
        tamperedTransactionCount: 0
      })
    };
  }

  const { validTransactions, tamperedTransactionCount } = await readValidTransactions(wallet.userId);

  if (!validTransactions.length && !wallet.ledgerInitializedAt) {
    const baselineBalance = normalizeAmount(wallet.balance);
    const baseline = await createSignedTransaction({
      userId: wallet.userId,
      type: 'baseline',
      amount: baselineBalance,
      balanceAfter: baselineBalance,
      source: 'legacy-wallet',
      description: 'Initial sealed wallet balance'
    });
    await saveWalletMirror(wallet, {
      balance: baselineBalance,
      lastTransactionId: baseline.transactionId
    });
    return {
      balance: baselineBalance,
      wallet: toWalletObject(wallet, baselineBalance, {
        trusted: true,
        repaired: true,
        bootstrapped: true,
        tamperedTransactionCount
      })
    };
  }

  const recoveredBalance = balanceFromTransactions(validTransactions);
  const lastTransactionId = validTransactions[validTransactions.length - 1]?.transactionId || '';
  await saveWalletMirror(wallet, {
    balance: recoveredBalance,
    lastTransactionId
  });

  return {
    balance: recoveredBalance,
    wallet: toWalletObject(wallet, recoveredBalance, {
      trusted: true,
      repaired: true,
      tamperedTransactionCount
    })
  };
}

async function creditWallet({ userId, amount, source = 'wallet-recharge', sourceId = '', description = '', metadata = null }) {
  const rechargeAmount = normalizeAmount(amount);
  if (!normalizeUserId(userId) || rechargeAmount <= 0) {
    throw new Error('Invalid wallet recharge arguments');
  }

  const current = await getVerifiedWalletBalance(userId);
  const nextBalance = normalizeAmount(current.balance + rechargeAmount);
  const transaction = await createSignedTransaction({
    userId,
    type: 'credit',
    amount: rechargeAmount,
    balanceAfter: nextBalance,
    source,
    sourceId,
    description,
    metadata
  });
  const wallet = await findOrCreateWallet(userId);
  await saveWalletMirror(wallet, {
    balance: nextBalance,
    lastTransactionId: transaction.transactionId
  });

  return {
    wallet: toWalletObject(wallet, nextBalance, { trusted: true, repaired: false }),
    transaction: transaction.toObject ? transaction.toObject() : transaction,
    amountCredited: rechargeAmount,
    balance: nextBalance
  };
}

async function debitWallet({ userId, amount, source = 'consultation', sourceId = '', description = '', metadata = null }) {
  const spendAmount = normalizeAmount(amount);
  if (!normalizeUserId(userId) || spendAmount <= 0) {
    throw new Error('Invalid wallet spend arguments');
  }

  const current = await getVerifiedWalletBalance(userId);
  const nextBalance = normalizeAmount(current.balance - spendAmount);
  const transaction = await createSignedTransaction({
    userId,
    type: 'debit',
    amount: spendAmount,
    balanceAfter: nextBalance,
    source,
    sourceId,
    description,
    metadata
  });
  const wallet = await findOrCreateWallet(userId);
  await saveWalletMirror(wallet, {
    balance: nextBalance,
    lastTransactionId: transaction.transactionId
  });

  return {
    wallet: toWalletObject(wallet, nextBalance, { trusted: true, repaired: false }),
    transaction: transaction.toObject ? transaction.toObject() : transaction,
    amountDebited: spendAmount,
    balance: nextBalance
  };
}

async function sealExistingWallets() {
  const query = {
    $or: [
      { balanceSignature: { $exists: false } },
      { balanceSignature: '' },
      { ledgerInitializedAt: { $exists: false } },
      { ledgerInitializedAt: null }
    ]
  };
  let sealedCount = 0;
  const cursor = Wallet.find(query).select('userId').cursor();

  for await (const wallet of cursor) {
    await getVerifiedWalletBalance(wallet.userId);
    sealedCount += 1;
  }

  return { sealedCount };
}

module.exports = {
  creditWallet,
  debitWallet,
  getVerifiedWalletBalance,
  isValidTransaction,
  isValidWalletSignature,
  sealExistingWallets,
  signTransaction,
  signWalletBalance
};
