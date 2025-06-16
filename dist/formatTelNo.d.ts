/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈 추가하는 함수
 * @param v 전화번호
 * @param allowCharacters 허용할 문자들 (기본값: '*')
 * @returns 하이픈 추가된 전화번호
 * ******************************************************************************************************************/
export declare function formatTelNo<T extends string | null | undefined, RT = T extends null ? null : T extends undefined ? undefined : string>(v: T, allowCharacters?: string): RT;
export default formatTelNo;
