import { getExperiment, experiments } from '../experiments';
import { describe, it, expect } from 'vitest';

describe('getExperiment', () => {
  it('returns the correct experiment for a known slug', () => {
    const slug = experiments[0].slug;
    const exp = getExperiment(slug);
    expect(exp).toBeDefined();
    expect(exp).toBe(experiments[0]);
  });

  it('returns undefined for an unknown slug', () => {
    const exp = getExperiment('non-existent');
    expect(exp).toBeUndefined();
  });
});
