/********************************************************************************************************************
 * 주민등록번호에 하이픈 추가하는 함수
 * @param v 주민등록번호
 * @param allowCharacters 허용할 문자들 (기본값: '*')
 * @returns 하이픈 추가된 주민등록번호
 * ******************************************************************************************************************/
export function formatPersonalNo(v: string, allowCharacters = '*'): string {
  const str = v.replace(new RegExp(`[^0-9${allowCharacters}]`, 'g'), '');
  const values: string[] = [str.slice(0, 6)];
  if (str.length > 6) values.push(str.slice(6));
  return values.join('-');
}

export default formatPersonalNo;
