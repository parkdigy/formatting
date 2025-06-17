import { formatVersion } from '../src';

describe('formatVersion', () => {
  it('formatVersion', () => {
    expect(formatVersion('1.0.0', 5, 3)).toBe('00001.00000.00000');
    expect(formatVersion('1.0.0', 5, 5)).toBe('00001.00000.00000.00000.00000');
    expect(formatVersion('1.2.3', 3, 5)).toBe('001.002.003.000.000');
  });
});
