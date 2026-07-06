import { describe, expect, it } from 'vitest';
import { getPostAuthPath } from './authRouting';

describe('getPostAuthPath', () => {
  it('sends pandits to their dashboard when no redirect override is provided', () => {
    expect(getPostAuthPath({ role: 'pandit', redirectUrl: null, from: '/' })).toBe('/pandit-dashboard');
  });

  it('keeps a custom redirect for non-pandit users', () => {
    expect(getPostAuthPath({ role: 'user', redirectUrl: '/my-trips', from: '/' })).toBe('/my-trips');
  });
});
