import { moment } from '@library';
import { isUndefined, isNumber, isDate } from './Utils';

export function getTimestamp(d: any) {
  if (d && !isDate(d)) {
    return null;
  }
  if (d && isNumber(d)) {
    return new Date(parseInt(d)).getTime();
  }
  if (d) {
    return new Date(d).getTime();
  }
  return new Date().getTime();
}

export function getCustomDate(format: string, d: any) {
  return moment(Number(getTimestamp(d))).format(format);
}

export function formatDate(date: any) {
  const m = moment(date);
  if (m.isValid()) {
    return m.format('DD/MM/YYYY');
  }
};
