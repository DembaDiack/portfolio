import React, { useEffect, useState } from "react";
import ReactIcon from "../../assets/react.svg";
import MongoDBIcon from "../../assets/mongodb.svg";
import TypeScriptIcon from "../../assets/typescript.svg";
import NodeIcon from "../../assets/nodejs.svg";
import CSS from "./Particle.module.css";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const icons = [TypeScriptIcon,ReactIcon, MongoDBIcon, NodeIcon];

function Particle() {
//   const [counter, setCounter] = useState(0);
//   const handleIconChange = (
//     e: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ) => {
//     if (counter == icons.length - 1) setCounter(0);
//     else setCounter(counter + 1);
//   };
const state = useSelector((state:RootState) => state);

  return (
    <div
      style={{ cursor: "pointer" }}
      className={CSS.particle_orbit}
    >
      <CSSTransition<undefined>
        addEndListener={(node: HTMLElement, done: () => void) => {
          node.addEventListener("transitionend", done, false);
        }}
        classNames="fade"
        appear={true}
        timeout={600}
        in={true}
      >
        <img className={CSS.particle} width={20} src={icons[state.AppReducer.stackCounter]} />
      </CSSTransition>
    </div>
  );
}

export default Particle;
