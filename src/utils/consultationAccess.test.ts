import { describe, expect, it } from 'vitest';
import { canStartConsultation, MIN_WALLET_BALANCE } from './consultationAccess';

describe('canStartConsultation', () => {
  it('allows consultation when wallet balance meets the minimum', () => {
    expect(canStartConsultation(1)).toBe(true);
    expect(canStartConsultation(100)).toBe(true);
  });

  it('blocks consultation when wallet balance is below the minimum', () => {
    expect(canStartConsultation(0)).toBe(false);
    expect(canStartConsultation(-5)).toBe(false);
    expect(canStartConsultation(undefined)).toBe(false);
  });

  it('uses the shared minimum balance threshold', () => {
    expect(MIN_WALLET_BALANCE).toBe(1);
  });
});
