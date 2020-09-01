import React from "react";
import { Image } from "react-bootstrap";

const img = {
  width: "90%",
  height: "90%",
  transform: "translate(3px,4px)",
};

const span = {
  width: "80px",
  height: "80px",
  border: "2px solid green",
  borderRadius: "50%",
  // borderImage:
  //   "linear-gradient(white,white), radial-gradient(Circle at top left, #f00,#3020ff) ",
  // backgroundOrigin: "border-box",
  // backgroundClip: "padding-box , border-box",
};

export default function RoundedImage(props) {
  const { value } = props;
  return (
    <div style={span}>
      <Image src={value} alt="dsg" style={img} roundedCircle />
    </div>
  );
}
