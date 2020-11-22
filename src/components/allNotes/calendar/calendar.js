import React, { useState, useEffect } from "react";
import moment from "moment";
import Header from "./header";
import styles from "../../../styles/calendar.module.css";
import dayStyles from "./styles";
import buildCalendar from "./build";

export default function Calendar({ value, onChange }) {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div className={styles.calendar}>
      <Header value={value} onChange={onChange} />

      <div>
        <div className={styles.dayNames}>
          {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((d) => (
            <div className={styles.week}>{d}</div>
          ))}
        </div>
        <div className={styles.body}>
          {calendar.map((week, wi) => (
            <div key={wi}>
              {week.map((day, di) => (
                <div
                  key={di}
                  className={styles.day}
                  onClick={() => {
                    if (day < moment(new Date()).startOf("day")) return;
                    onChange(day);
                  }}
                >
                  <div className={dayStyles(day)}>
                    {day.format("D").toString()}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
