import React, { useState } from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";
import styles from "../../styles/mynotes.module.css";
import MyNotesMain from "./myNotesElements";
import Calendar from "./calendar/calendar.js";

const MyNotes = (props) => {
  const [selectedDate, setSelectedDate] = useState(moment());
  return (
    <div className={styles.myNotesContent}>
      <NavLink className={styles.url} to="/second-project">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M6.49021 15.7135C6.03153 15.7135 5.58274 15.5346 5.24546 15.1969L0.581486 10.5271C-0.240704 9.70412 -0.240704 8.36489 0.581486 7.54174L5.24546 2.87213C5.75097 2.36594 6.50697 2.21652 7.17137 2.49146C7.83343 2.76543 8.26121 3.40318 8.26121 4.11592V8.3664H17.2618C17.6501 8.3664 17.9649 8.6813 17.9649 9.06966C17.9649 9.45803 17.6501 9.77279 17.2618 9.77279H8.26121C7.48571 9.77279 6.85482 9.1419 6.85482 8.3664V4.11592C6.85482 3.90526 6.70005 3.81847 6.63359 3.79086C6.56574 3.76285 6.39202 3.7141 6.24041 3.86598L1.57644 8.53559C1.30164 8.81066 1.30164 9.25822 1.57644 9.53342L6.24041 14.203C6.39202 14.3548 6.56574 14.306 6.63345 14.278C6.70005 14.2505 6.85482 14.1638 6.85482 13.9531V12.4403C6.85482 12.0519 7.16958 11.737 7.55795 11.737C7.94632 11.737 8.26107 12.0519 8.26107 12.4403V13.9531C8.26107 14.6658 7.83329 15.3034 7.17123 15.5774C6.95027 15.669 6.719 15.7135 6.49021 15.7135Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>Мои записи</p>
      </NavLink>
      <div className={styles.contentContainer}>
        <div className={styles.containerNotes} id={styles.scrollbarCustom}>
          <MyNotesMain data={props.data} />
        </div>
        <Calendar value={selectedDate} onChange={setSelectedDate} />
      </div>
    </div>
  );
};

export default MyNotes;