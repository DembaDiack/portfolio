import React, { useEffect, useState } from "react";
import CSS from "./TextCarousel.module.css";
import { CSSTransition } from "react-transition-group";
import Word from "./Word/Word";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function TextCarousel() {
  const [words, setWords] = useState<any>();
  const state = useSelector((state: RootState) => state);

  useEffect(() => {
    const words = state.AppReducer.currentStack.map((w, index) => {
      return <Word text={w} key={index} />;
    });
    setWords(words);
  }, [state.AppReducer.currentStack]);
  
  return (
    <>
    {words ? <div key={state.AppReducer.stackCounter}>
      <CSSTransition<undefined>
        addEndListener={(node: HTMLElement, done: () => void) => {
          node.addEventListener("transitionend", done, false);
        }}
        classNames="fade"
        appear={true}
        timeout={600}
        in={true}
        unmountOnExit
      >
        <div>{words[state.AppReducer.stackCounter]}</div>
      </CSSTransition>
    </div> : null}
    </>
  );
}

export default TextCarousel;
