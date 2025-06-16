'use strict';Object.defineProperty(exports,'__esModule',{value:true});/********************************************************************************************************************
 * 사업자 등록번호에 하이픈 추가하는 함수
 * @param v 사업자등록번호
 * @param allowCharacters 허용할 문자들 (기본값: '*')
 * @returns 하이픈이 추가된 사업자등록번호
 * ******************************************************************************************************************/
function formatBusinessNo(v, allowCharacters) {
    if (allowCharacters === void 0) { allowCharacters = '*'; }
    var str = v.replace(new RegExp("[^0-9".concat(allowCharacters, "]"), 'g'), '');
    var values = [str.slice(0, 3)];
    if (str.length > 3)
        values.push(str.slice(3, 5));
    if (str.length > 5)
        values.push(str.slice(5));
    return values.join('-');
}/********************************************************************************************************************
 * 숫자 또는 문자열로 주어진 숫자에 콤마 추가하는 함수
 * @param v - 숫자 또는 문자열
 * @returns 콤마 추가된 문자열
 * ******************************************************************************************************************/
function formatNumber(v) {
    var strValue = String(v)
        .trim()
        .replace(/[^\d.+-]/g, '');
    var match = strValue.match(/^([+-]?)(\d+)(\.\d+)?$/);
    if (!match)
        return strValue;
    var sign = match[1];
    var intPart = match[2];
    var decimalPart = match[3] || '';
    if (/^\.0+$/.test(decimalPart)) {
        decimalPart = '';
    }
    var formattedInt = Number(intPart).toLocaleString();
    return "".concat(sign).concat(formattedInt).concat(decimalPart);
}/********************************************************************************************************************
 * 주민등록번호에 하이픈 추가하는 함수
 * @param v 주민등록번호
 * @param allowCharacters 허용할 문자들 (기본값: '*')
 * @returns 하이픈 추가된 주민등록번호
 * ******************************************************************************************************************/
function formatPersonalNo(v, allowCharacters) {
    if (allowCharacters === void 0) { allowCharacters = '*'; }
    var str = v.replace(new RegExp("[^0-9".concat(allowCharacters, "]"), 'g'), '');
    var values = [str.slice(0, 6)];
    if (str.length > 6)
        values.push(str.slice(6));
    return values.join('-');
}/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈 추가하는 함수
 * @param v 전화번호
 * @param allowCharacters 허용할 문자들 (기본값: '*')
 * @returns 하이픈 추가된 전화번호
 * ******************************************************************************************************************/
function formatTelNo(v, allowCharacters) {
    if (allowCharacters === void 0) { allowCharacters = '*'; }
    if (v === undefined || v === null)
        return v;
    var escapedAllowChars = allowCharacters.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    var filterRegex = new RegExp("[^0-9+".concat(escapedAllowChars, "]"), 'g');
    var str = v.replace(filterRegex, '');
    var isLastDash = v.endsWith('-');
    if (str[0] !== '0' && !['15', '16', '18'].includes(str.slice(0, 2))) {
        return str;
    }
    var preLen = 3;
    if (str.startsWith('02'))
        preLen = 2;
    else if (['15', '16', '18'].includes(str.slice(0, 2)))
        preLen = 4;
    var tmp = str;
    if (['15', '16', '18'].includes(str.slice(0, 2))) {
        if (str.length > preLen && str.length <= preLen + 4) {
            tmp = "".concat(str.slice(0, preLen), "-").concat(str.slice(preLen));
        }
    }
    else if (str.length > preLen) {
        if (str.length <= preLen + 3) {
            tmp = "".concat(str.slice(0, preLen), "-").concat(str.slice(preLen));
        }
        else if (str.length <= preLen + 7) {
            tmp = "".concat(str.slice(0, preLen), "-").concat(str.slice(preLen, preLen + 3), "-").concat(str.slice(preLen + 3));
        }
        else if (str.length <= preLen + 8) {
            tmp = "".concat(str.slice(0, preLen), "-").concat(str.slice(preLen, preLen + 4), "-").concat(str.slice(preLen + 4));
        }
    }
    if (isLastDash && str.length === preLen) {
        tmp += '-';
    }
    return tmp;
}var index = {
    formatBusinessNo: formatBusinessNo,
    formatNumber: formatNumber,
    formatPersonalNo: formatPersonalNo,
    formatTelNo: formatTelNo,
};exports.default=index;exports.formatBusinessNo=formatBusinessNo;exports.formatNumber=formatNumber;exports.formatPersonalNo=formatPersonalNo;exports.formatTelNo=formatTelNo;