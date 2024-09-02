import React from "react";
import ninjaImage from "../assets/ninja002.webp";

interface NinjaProps {
  className?: string;
}

export const Ninja: React.FC<NinjaProps> = ({ className }) => {
  const styling: React.CSSProperties = {
    maxHeight: 150,
  };

  return (
    <>
      <img className={className} src={ninjaImage} style={styling}></img>
    </>
  );
};

export default Ninja;
