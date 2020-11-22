import React from "react";
import styles from "../../../styles/cardsItem.module.css";

const CardsItems = (props) => {
  return (
    <div className={styles.cardInfo}>
      <div className={styles.time}>
        <p>{props.date}</p>
        <p className={styles.space}>|</p>
        <p>{props.time}</p>
      </div>
      <p className={styles.hospitalName}>{props.hospitalName}</p>
      <div className={styles.doc}>
        <div className={styles.specialty}>
          <img
            className={styles.imgPerson}
            src={require(`../../../img/${props.photo}`).default}
            alt="avatar"
          />
          <div className={styles.params}>
            <p className={styles.namePeson}>{props.name}</p>
            <p className={styles.specialtyPerson}>{props.specialty}</p>
          </div>
        </div>
        <div className={styles.btnCard}>Отменить</div>
      </div>
    </div>
  );
};
export default CardsItems;
