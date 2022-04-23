import React from "react";
import CSS from "./Banner.module.css";
import Particle from "./Particles/Particle";
import TextCarousel from "../TextCarousel/TextCarousel";
import { CSSTransition } from "react-transition-group";

function Banner() {
  return (
    <CSSTransition<undefined>
      addEndListener={(node: HTMLElement, done: () => void) => {
        node.addEventListener("transitionend", done, false);
      }}
      classNames="fade"
      appear={true}
      timeout={600}
      in={true}
    >
      <div className={`${CSS.banner} ani`}>
        <Particle />
        <div>HI THERE</div>
        <div>
          DO YOU EVEN <span className={CSS.textBlue}><div className={CSS.smallwrapper}><TextCarousel /></div>?</span>
        </div>
        <div>
          <div className={CSS.wrapper}>
            <TextCarousel />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Banner;
