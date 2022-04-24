import React from "react";
import CSS from "./Button.module.css";

function Button() {
  return (
    <div className={CSS.button}>
       <a>
           Link
       </a>
    </div>
  );
}

export default Button;
