import React from "react";
import CSS from "./RotatingText.module.css";

function RotatingText() {
  return (
    <div className={CSS.wrapper}>
      <div className={CSS.wheel}>
        <div className={CSS.wheeltop}>up side</div>
        <div className={CSS.wheelbottom}>down side</div>
      </div>
    </div>
  );
}

export default RotatingText;
