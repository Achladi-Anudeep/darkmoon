import React, { useState, useEffect } from "react";
import "./Adbar.css";

const texts = [
  "Sip High and Thrive High with our Dark Moon.",
  "Tune your mind with our Dark Moon.",
];

function Adbar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="adbar">
      <p>{texts[index]}</p>
    </div>
  );
}

export default Adbar;
