/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈 추가하는 함수
 * @param v 전화번호
 * @param allowCharacters 허용할 문자들 (기본값: '*')
 * @returns 하이픈 추가된 전화번호
 * ******************************************************************************************************************/
export function formatTelNo<
  T extends string | null | undefined,
  RT = T extends null ? null : T extends undefined ? undefined : string,
>(v: T, allowCharacters = '*'): RT {
  if (v === undefined || v === null) return v as unknown as RT;

  const escapedAllowChars = allowCharacters.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const filterRegex = new RegExp(`[^0-9+${escapedAllowChars}]`, 'g');
  const str = v.replace(filterRegex, '');
  const isLastDash = v.endsWith('-');

  if (str[0] !== '0' && !['15', '16', '18'].includes(str.slice(0, 2))) {
    return str as RT;
  }

  let preLen = 3;
  if (str.startsWith('02')) preLen = 2;
  else if (['15', '16', '18'].includes(str.slice(0, 2))) preLen = 4;

  let tmp = str;
  if (['15', '16', '18'].includes(str.slice(0, 2))) {
    if (str.length > preLen && str.length <= preLen + 4) {
      tmp = `${str.slice(0, preLen)}-${str.slice(preLen)}`;
    }
  } else if (str.length > preLen) {
    if (str.length <= preLen + 3) {
      tmp = `${str.slice(0, preLen)}-${str.slice(preLen)}`;
    } else if (str.length <= preLen + 7) {
      tmp = `${str.slice(0, preLen)}-${str.slice(preLen, preLen + 3)}-${str.slice(preLen + 3)}`;
    } else if (str.length <= preLen + 8) {
      tmp = `${str.slice(0, preLen)}-${str.slice(preLen, preLen + 4)}-${str.slice(preLen + 4)}`;
    }
  }

  if (isLastDash && str.length === preLen) {
    tmp += '-';
  }

  return tmp as RT;
}

export default formatTelNo;
