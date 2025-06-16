/********************************************************************************************************************
 * 사업자 등록번호에 하이픈 추가하는 함수
 * @param v 사업자등록번호
 * @param allowCharacters 허용할 문자들 (기본값: '*')
 * @returns 하이픈이 추가된 사업자등록번호
 * ******************************************************************************************************************/
export declare function formatBusinessNo(v: string, allowCharacters?: string): string;
export default formatBusinessNo;
