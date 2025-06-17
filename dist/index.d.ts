export * from './formatBusinessNo';
export * from './formatDate';
export * from './formatNumber';
export * from './formatPersonalNo';
export * from './formatTelNo';
import formatBusinessNo from './formatBusinessNo';
import formatDate from './formatDate';
import formatNumber from './formatNumber';
import formatPersonalNo from './formatPersonalNo';
import formatTelNo from './formatTelNo';
declare const _default: {
    businessNo: typeof formatBusinessNo;
    date: typeof formatDate;
    number: typeof formatNumber;
    personalNo: typeof formatPersonalNo;
    telNo: typeof formatTelNo;
};
export default _default;
