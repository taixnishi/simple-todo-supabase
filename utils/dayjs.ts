import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');

export const formatTimeToYMD = (date: Date): string => {
  return dayjs(date).format('YYYY/MM/DD');
};
