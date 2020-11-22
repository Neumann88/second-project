import React from "react";
import styles from "../../../styles/cards.module.css";
import CardsItems from "./cardsItems";
import { NavLink } from "react-router-dom";

const Cards = (props) => {
  let CardsElements = props.data.map((e) => (
    <CardsItems
      date={e.date}
      time={e.time}
      hospitalName={e.hospitalName}
      photo={e.photo}
      name={e.name}
      specialty={e.specialty}
    />
  ));
  let length = CardsElements.length - 2;
  return (
    <div className={styles.cards}>
      <h2 className={styles.title}>Записи на прием</h2>
      <div className={styles.mainCards}>
        {CardsElements[0]}
        {CardsElements[1]}

        <div className={styles.other}>
          <h3>Еще {length} записи</h3>
          <NavLink className={styles.link} to="/myNotes">
            <p>Подробнее</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cards;
