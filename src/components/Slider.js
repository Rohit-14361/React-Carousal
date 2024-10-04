import React, { useEffect, useRef } from "react";
import data from "./data.json";
import { useState } from "react";

function Slider() {
  const [next, setNext] = useState(0);
  let ref = useRef(null);
  const handleClick = () => {
    // if (next == data.length - 1) {
    //   setNext(0);
    // } else {
    //   setNext(next + 1);
    // }
    setNext((previousValue) => {
      if (previousValue == data.length - 1) {
        return 0;
      }
      return previousValue + 1;
    });
  };

  const prevHandle = () => {
    if (next === 0) {
      setNext(data.length - 1);
    } else {
      setNext(next - 1);
    }
  };

  useEffect(() => {
    ref.current = setInterval(handleClick, 3000);
    return () => {
      clearInterval(ref.current);
    };
  });
  return (
    <div
      className="container"
      onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => (ref.current = setInterval(handleClick, 3000))}
    >
      <div className="left-btn">
        <button onClick={handleClick}>{"<"}</button>
      </div>
      <img src={data[next].download_url} loading="lazy" alt={Image}></img>
      <div className="right-btn">
        <button onClick={prevHandle}>{">"}</button>
      </div>
    </div>
  );
}

export default Slider;
