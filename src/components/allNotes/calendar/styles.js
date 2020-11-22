import styles from "../../../styles/calendar.module.css";

export function beforeToday(day) {
  return day.isBefore(new Date(), "day");
}

export default function dayStyles(day, value) {
  if (beforeToday(day)) return styles.before;
  return "";
}
