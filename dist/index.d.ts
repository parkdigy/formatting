export * from './formatBusinessNo';
export * from './formatNumber';
export * from './formatPersonalNo';
export * from './formatTelNo';
import formatBusinessNo from './formatBusinessNo';
import formatNumber from './formatNumber';
import formatPersonalNo from './formatPersonalNo';
import formatTelNo from './formatTelNo';
declare const _default: {
    businessNo: typeof formatBusinessNo;
    number: typeof formatNumber;
    personalNo: typeof formatPersonalNo;
    telNo: typeof formatTelNo;
};
export default _default;
