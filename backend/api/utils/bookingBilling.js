const express = require('express');
const mongoose = require('mongoose');



function calculateWalletDebitAmount(booking, endedAt = new Date()) {
  if (!booking) return 0;
  if (booking.endedReason === 'pandit_no_show') return 0;

  const sessionStartedAt = booking.sessionStartedAt ? new Date(booking.sessionStartedAt) : null;
  if (!sessionStartedAt || Number.isNaN(sessionStartedAt.getTime())) return 0;

  const durationMinutes = Number(booking.durationMinutes || 0);
  const pricePerMinute = Number(
    booking.pricePerMinute ||
    booking.astrologerPricePerMinute ||
    (Number.isFinite(Number(booking.bookingFee)) && durationMinutes > 0 ? Number(booking.bookingFee) / durationMinutes : 0)
  );

  if (!Number.isFinite(durationMinutes) || durationMinutes <= 0 || !Number.isFinite(pricePerMinute) || pricePerMinute <= 0) {
    return 0;
  }

  const endTime = endedAt ? new Date(endedAt) : new Date();
  if (Number.isNaN(endTime.getTime())) return 0;

  const elapsedMinutes = Math.max(1, Math.ceil((endTime.getTime() - sessionStartedAt.getTime()) / (60 * 1000)));
  const actualMinutes = Math.min(elapsedMinutes, durationMinutes);
  return actualMinutes * pricePerMinute;
}

function getWalletDebitAmount(booking, endedAt = new Date()) {
  if (booking?.walletDebitedAmount != null) {
    const amount = Number(booking.walletDebitedAmount);
    return Number.isFinite(amount) && amount > 0 ? amount : 0;
  }

  return calculateWalletDebitAmount(booking, endedAt);
}

function shouldDebitWalletForBooking(booking, endedAt = new Date()) {
  if (!booking) return false;
  if (booking.walletDebitedAt) return false;
  return getWalletDebitAmount(booking, endedAt) > 0;
}

module.exports = {
  calculateWalletDebitAmount,
  getWalletDebitAmount,
  shouldDebitWalletForBooking,
};
