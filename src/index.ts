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

export default {
  businessNo: formatBusinessNo,
  date: formatDate,
  number: formatNumber,
  personalNo: formatPersonalNo,
  telNo: formatTelNo,
};
