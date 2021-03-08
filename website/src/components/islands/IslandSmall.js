import React from "react";
import Constants from "../../Constants";

const islands = [
  Constants.Image.ISLAND_SMALL_1,
  Constants.Image.ISLAND_SMALL_2,
  Constants.Image.ISLAND_SMALL_3,
  Constants.Image.ISLAND_SMALL_4,
  Constants.Image.ISLAND_SMALL_5,
  Constants.Image.ISLAND_SMALL_6
];

export default ({type, number, paused}) => {
  const className = `island small-island small-${number} ${paused ? "paused" : ""}`;
  return <img className={className} src={islands[type]} />;
};
