export * from './formatBusinessNo';
export * from './formatDate';
export * from './formatNumber';
export * from './formatPersonalNo';
export * from './formatTelNo';
export * from './formatVersion';

import formatBusinessNo from './formatBusinessNo';
import formatDate from './formatDate';
import formatNumber from './formatNumber';
import formatPersonalNo from './formatPersonalNo';
import formatTelNo from './formatTelNo';
import formatVersion from './formatVersion';

export default {
  businessNo: formatBusinessNo,
  date: formatDate,
  number: formatNumber,
  personalNo: formatPersonalNo,
  telNo: formatTelNo,
  version: formatVersion,
};
