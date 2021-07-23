import React from "react";
import "./gridbox.css";

const Gridbox = ({ image, title }) => {
  return (
    <div className="gribox__item">
      <div className="gridbox__img">
        <img src={image} alt={title} />
      </div>
      <center className="gridBox__text" style={{ margin: "10px 0" }}>
        <p style={{ padding: "6px 0 0" }}>{title}</p>
      </center>
    </div>
  );
};

export default Gridbox;
