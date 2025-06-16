import { formatBusinessNo } from '../src';

describe('formatBusinessNo', () => {
  it('formatBusinessNo', () => {
    expect(formatBusinessNo('1234567890')).toBe('123-45-67890');
    expect(formatBusinessNo('123-45-67890')).toBe('123-45-67890');
    expect(formatBusinessNo('12345-67890')).toBe('123-45-67890');
    expect(formatBusinessNo('123-**-67890')).toBe('123-**-67890');
    expect(formatBusinessNo('123-##-67890', '#')).toBe('123-##-67890');
  });
});
