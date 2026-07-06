import { describe, it, expect } from 'vitest';
import { calculateWalletDebitAmount } from './bookingBilling.js';

describe('calculateWalletDebitAmount', () => {
  it('charges based on actual consultation minutes', () => {
    const startedAt = new Date(Date.now() - 10 * 60 * 1000);
    const endedAt = new Date(startedAt.getTime() + 10 * 60 * 1000);
    const booking = {
      bookingFee: 300,
      durationMinutes: 10,
      sessionStartedAt: startedAt,
    };

    expect(calculateWalletDebitAmount(booking, endedAt)).toBe(300);
  });

  it('rounds partial minutes up to the next minute', () => {
    const startedAt = new Date(Date.now() - 90 * 1000);
    const booking = {
      bookingFee: 300,
      durationMinutes: 5,
      sessionStartedAt: startedAt,
    };

    expect(calculateWalletDebitAmount(booking, new Date())).toBe(120);
  });

  it('returns zero when booking has no usable billing data', () => {
    expect(calculateWalletDebitAmount(null)).toBe(0);
    expect(calculateWalletDebitAmount({})).toBe(0);
  });
});
