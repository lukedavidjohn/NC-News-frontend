import React from "react";
import ReactLoading from "react-loading";

const list = [
  {
    prop: "balls",
    name: "Balls"
  },
  {
    prop: "bars",
    name: "Bars"
  },
  {
    prop: "bubbles",
    name: "Bubbles"
  },
  {
    prop: "cubes",
    name: "Cubes"
  },
  {
    prop: "cylon",
    name: "Cylon"
  },
  {
    prop: "spin",
    name: "Spin"
  },
  {
    prop: "spinningBubbles",
    name: "SpinningBubbles"
  },
  {
    prop: "spokes",
    name: "Spokes"
  }
];

const Loading = ({ type, color }) => (
  <ReactLoading type={list[4].prop} color={color} height={100} width={100} />
);

export default Loading;
