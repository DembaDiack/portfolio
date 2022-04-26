import React, { useEffect, useState } from "react";
import ReactIcon from "../../assets/react.svg";
import MongoDBIcon from "../../assets/mongodb.svg";
import TypeScriptIcon from "../../assets/typescript.svg";
import NodeIcon from "../../assets/nodejs.svg";
import CSS from "./Particle.module.css";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import useIcon from "../../hooks/useIcon";

const icons = [TypeScriptIcon, ReactIcon, MongoDBIcon, NodeIcon];
const rand_x = Math.floor(Math.random() * 100) + 1;
function Particle() {
  const state = useSelector((state: RootState) => state);
  const icon = useIcon();

  useEffect(()=>{
    console.log(icon);
  },[icon]);

  return (
    <div style={{ cursor: "pointer",left : `${rand_x}%` }} className={CSS.particle_orbit}>
      <CSSTransition<undefined>
        addEndListener={(node: HTMLElement, done: () => void) => {
          node.addEventListener("transitionend", done, false);
        }}
        classNames="fade"
        appear={true}
        timeout={600}
        in={true}
      >
        {icon ? icon : <span></span>}
      </CSSTransition>
    </div>
  );
}

export default Particle;
