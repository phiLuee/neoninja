import React from "react";
import lampImage from "../assets/lamp.png";
import "./Lamp.scss";

export const Lamp: React.FC = () => {
  return (
    <>
      <div className="lampContainer">
        <img src={lampImage}></img>
      </div>
    </>
  );
};

export default Lamp;
