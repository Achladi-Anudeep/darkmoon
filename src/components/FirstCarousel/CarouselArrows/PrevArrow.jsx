import React from "react";
import "./Arrows.css";
import { GrFormPrevious } from "react-icons/gr";

const PrevArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className="prev-arrow">
      <GrFormPrevious />
    </button>
  );
};

export default PrevArrow;
