import React from "react";
import styles from "../../../styles/calendar.module.css";

export default function CalendarHeader({ value, onChange }) {
  function currMonthName() {
    return value.local("ru").format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  function thisMonth() {
    return value.isSame(new Date(), "month");
  }

  return (
    <div className={styles.header}>
      <div
        className={styles.previous}
        onClick={() => !thisMonth() && onChange(prevMonth())}
      >
        {!thisMonth({}) ? String.fromCharCode(60) : null}
      </div>
      <div className={styles.current}>
        {currMonthName()}, {currYear()}
      </div>
      <div className={styles.next} onClick={() => onChange(nextMonth())}>
        {String.fromCharCode(62)}
      </div>
    </div>
  );
}
