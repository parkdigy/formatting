/********************************************************************************************************************
 * 사업자 등록번호에 하이픈 추가하는 함수
 * @param v 사업자등록번호
 * @param allowCharacters 허용할 문자들 (기본값: '*')
 * @returns 하이픈이 추가된 사업자등록번호
 * ******************************************************************************************************************/
export function formatBusinessNo(v: string, allowCharacters = '*'): string {
  const str = v.replace(new RegExp(`[^0-9${allowCharacters}]`, 'g'), '');
  const values: string[] = [str.slice(0, 3)];
  if (str.length > 3) values.push(str.slice(3, 5));
  if (str.length > 5) values.push(str.slice(5));
  return values.join('-');
}

export default formatBusinessNo;
