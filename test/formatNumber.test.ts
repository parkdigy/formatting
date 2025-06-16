import { formatNumber } from '../src';

describe('formatNumber', () => {
  it('formatNumber', () => {
    expect(formatNumber(123)).toBe('123');
    expect(formatNumber(123456)).toBe('123,456');
    expect(formatNumber(123456.0)).toBe('123,456');
    expect(formatNumber(123456.01)).toBe('123,456.01');
    expect(formatNumber(-123)).toBe('-123');
    expect(formatNumber(-123456)).toBe('-123,456');
    expect(formatNumber(-123456.0)).toBe('-123,456');
    expect(formatNumber(-123456.01)).toBe('-123,456.01');

    expect(formatNumber('123')).toBe('123');
    expect(formatNumber('123456')).toBe('123,456');
    expect(formatNumber('123456.0')).toBe('123,456');
    expect(formatNumber('123456.01')).toBe('123,456.01');
    expect(formatNumber('+123')).toBe('+123');
    expect(formatNumber('+123456')).toBe('+123,456');
    expect(formatNumber('+123456.0')).toBe('+123,456');
    expect(formatNumber('+123456.01')).toBe('+123,456.01');
    expect(formatNumber('-123')).toBe('-123');
    expect(formatNumber('-123456')).toBe('-123,456');
    expect(formatNumber('-123456.0')).toBe('-123,456');
    expect(formatNumber('-123456.01')).toBe('-123,456.01');
    expect(formatNumber('123,456.01')).toBe('123,456.01');
    expect(formatNumber('12,3456.01')).toBe('123,456.01');
  });
});
