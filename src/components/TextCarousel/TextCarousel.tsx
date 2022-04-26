import React, { useEffect, useRef, useState } from "react";
import CSS from "./TextCarousel.module.css";
import { CSSTransition } from "react-transition-group";
import Word from "./Word/Word";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { motion, AnimatePresence } from "framer-motion";

function TextCarousel() {
  const state = useSelector((state: RootState) => state);

  return (
    <>
      <div>
        <strong>
          {state.AppReducer.currentStack[state.AppReducer.stackCounter]
            .split("")
            .map((letter,index) => {
              return (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index/2 }}
                  exit={{ opacity: 0 }}
                  key={Math.random()}
                >
                 {letter} 
                </motion.span>
              );
            })}
        </strong>
      </div>
    </>
  );
}

export default TextCarousel;
