import { formatPersonalNo } from '../src';

describe('formatPersonalNo', () => {
  it('formatPersonalNo', () => {
    expect(formatPersonalNo('0123456789012')).toBe('012345-6789012');
    expect(formatPersonalNo('012345-6789012')).toBe('012345-6789012');
    expect(formatPersonalNo('012345678-9012')).toBe('012345-6789012');
    expect(formatPersonalNo('012345-*******')).toBe('012345-*******');
    expect(formatPersonalNo('012345-#######', '#')).toBe('012345-#######');
  });
});
