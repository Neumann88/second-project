import React from "react";
import CardsItems from "../profile/cards/cardsItems.js";

const MyNotesMain = (props) => {
  let MyNotesElements = props.data.map((i) => (
    <CardsItems
      date={i.date}
      time={i.time}
      hospitalName={i.hospitalName}
      photo={i.photo}
      name={i.name}
      specialty={i.specialty}
    />
  ));
  return <>{MyNotesElements}</>;
};

export default MyNotesMain;
