import React, { useEffect, useRef, useState } from "react";
import CSS from "./TextCarousel.module.css";
import { CSSTransition } from "react-transition-group";
import Word from "./Word/Word";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function TextCarousel() {
  const state = useSelector((state: RootState) => state);
  return (
    <>
      <div>NODEJS</div>
    </>
  );
}

export default TextCarousel;
