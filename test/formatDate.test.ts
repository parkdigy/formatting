import { formatDate } from '../src';
import dayjs from 'dayjs';

describe('formatDate', () => {
  it('formatDate', () => {
    expect(formatDate(new Date())).toBe(dayjs().format('YYYY-MM-DD HH:mm:ss'));
    expect(formatDate(new Date(), 'YYYY-MM-DD')).toBe(dayjs().format('YYYY-MM-DD'));
    expect(formatDate(dayjs())).toBe(dayjs().format('YYYY-MM-DD HH:mm:ss'));
    expect(formatDate(dayjs(), 'YYYY.MM.DD')).toBe(dayjs().format('YYYY.MM.DD'));
  });
});
