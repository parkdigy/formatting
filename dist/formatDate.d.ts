import { Dayjs } from 'dayjs';
/********************************************************************************************************************
 * 날짜를 주어진 형식의 텍스트로 변환
 * - 기본 형식 : YYYY-MM-DD HH:mm:ss
 * @param date 날짜
 * @param format 형식
 * @returns 형식화된 날짜
 * ******************************************************************************************************************/
export declare function formatDate<T extends Dayjs | Date | string | null | undefined, RT = T extends null ? null : T extends undefined ? undefined : string>(date: T, format?: string): RT;
export default formatDate;
