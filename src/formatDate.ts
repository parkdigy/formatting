import dayjs, { Dayjs } from 'dayjs';

/********************************************************************************************************************
 * 날짜를 주어진 형식의 텍스트로 변환
 * - 기본 형식 : YYYY-MM-DD HH:mm:ss
 * @param date 날짜
 * @param format 형식
 * @returns 형식화된 날짜
 * ******************************************************************************************************************/
export function formatDate<
  T extends Dayjs | Date | string | null | undefined,
  RT = T extends null ? null : T extends undefined ? undefined : string,
>(date: T, format?: string): RT {
  if (date === null) {
    return null as RT;
  } else if (date === undefined) {
    return undefined as RT;
  } else {
    return dayjs(date).format(format === undefined ? 'YYYY-MM-DD HH:mm:ss' : format) as RT;
  }
}

export default formatDate;
