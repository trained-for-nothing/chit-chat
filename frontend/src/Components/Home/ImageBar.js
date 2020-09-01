import React from "react";
import { ListGroup } from "react-bootstrap";
import RoundedImage from "./RoundedImage";
import { Images } from "./Data";
import "C:/Users/lenovo/Desktop/chit-chat/frontend/src/Stylling/Border.css";

const border = {
  border: "none",
};

const ImageGrid = () => {
  return (
    <ListGroup horizontal className="divs">
      {Images.map((item) => (
        <ListGroup.Item className="p-0 mr-2 mt-1" style={border}>
          <RoundedImage value={item} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default function ImageBar() {
  return (
    <div>
      <hr />
      {ImageGrid()}
      <hr />
    </div>
  );
}
