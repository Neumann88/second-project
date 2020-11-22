import React from "react";
import ElectroCard from "./cards/electro-card";
import Cards from "./cards/cards.js";

function Profile(props) {
  return (
    <>
      <Cards data={props.data} />
      <ElectroCard />
    </>
  );
}

export default Profile;
