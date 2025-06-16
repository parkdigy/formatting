import { formatTelNo } from '../src';

describe('formatTelNo', () => {
  it('formatTelNo', () => {
    expect(formatTelNo('02')).toBe('02');
    expect(formatTelNo('02-')).toBe('02-');
    expect(formatTelNo('02-1234')).toBe('02-123-4');
    expect(formatTelNo('010')).toBe('010');
    expect(formatTelNo('010-')).toBe('010-');
    expect(formatTelNo('01012')).toBe('010-12');
    expect(formatTelNo('0101234')).toBe('010-123-4');
    expect(formatTelNo('021234567')).toBe('02-123-4567');
    expect(formatTelNo('0212345678')).toBe('02-1234-5678');
    expect(formatTelNo('0101234567')).toBe('010-123-4567');
    expect(formatTelNo('01012345678')).toBe('010-1234-5678');
    expect(formatTelNo('15440000')).toBe('1544-0000');
    expect(formatTelNo('0701234567')).toBe('070-123-4567');
    expect(formatTelNo('07012345678')).toBe('070-1234-5678');

    expect(formatTelNo('02123****')).toBe('02-123-****');
    expect(formatTelNo('021234****')).toBe('02-1234-****');
    expect(formatTelNo('010***4567')).toBe('010-***-4567');
    expect(formatTelNo('010****5678')).toBe('010-****-5678');
    expect(formatTelNo('1544****')).toBe('1544-****');
    expect(formatTelNo('07012***67')).toBe('070-12*-**67');
    expect(formatTelNo('07012****78')).toBe('070-12**-**78');
  });
});
