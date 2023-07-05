import dayjs from "dayjs";
import "dayjs/locale/nb";
import localeData from "dayjs/plugin/localeData";

export const setLocaleDate = () => {
  dayjs.extend(localeData);
  dayjs.locale("nb");
};

export const formatToReadableDate = (date: string) => {
  return dayjs(date).format("D. MMMM YYYY");
};