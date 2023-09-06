import React from "react";
import { GrFormNext } from "react-icons/gr";
import "./Arrows.css";

const NextArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className="next-arrow">
      <GrFormNext />
    </button>
  );
};

export default NextArrow;
