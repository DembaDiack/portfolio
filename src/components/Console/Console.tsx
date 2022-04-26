import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Divider from "../Divider/Divider";
import CSS from "./Console.module.css";
import Output from "./Output/Output";
import update from "immutability-helper";
import handleCommand from "./Commander";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { appendOutput } from "../../store/reducers/AppReducer";

function Console() {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  const inputRef = useRef<any>();
  const [inputValue, setInputValue] = useState("");
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const outputareaRef = useRef<any>();

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        e.stopPropagation();
        e.cancelBubble = true;
        handleCommand(inputRef.current.value, dispatch);
        setInputValue("");
        inputRef.current.focus();
      }
    });
  }, []);
  const resetZoom = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    // @ts-ignore
    const viewportmeta = document.querySelector("meta[name=viewport]");
    viewportmeta?.setAttribute(
      "content",
      "initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
    );
    console.log(e, "blured");
  };

  return (
    <motion.div
      ref={titleRef}
      animate={{ opacity: titleInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={CSS.console}
      onClick={(e) => inputRef.current.focus()}
    >
      <div className={CSS.top}>
        <div className={CSS.circle}></div>
        <div className={CSS.circle}></div>
        <div className={CSS.circle}></div>
      </div>
      <Divider />
      <div className={CSS.bottom}>
        <div
          id={"outputarea"}
          ref={outputareaRef}
          className={CSS.outputarea}
          style={{
            overflowY: "scroll",
          }}
        >
          <Output text="Welcome to my fun little console! type --help to see what you can do!" />
          <Output
            newline
            text="this is actually a reusable console component"
          />
          <Output
            newline
            text="that i made from scratch, you can totaly reuse it!"
          />
          {state.AppReducer.consoleOutput}
        </div>
        <div className={CSS.inputarea}>
          <span
            style={{
              fontWeight: "bold",
              color: "var(--demba-light-grey)",
            }}
          >
            $Demba{" "}
          </span>
          <input
            value={inputValue}
            onInput={(e) => setInputValue(e.currentTarget.value)}
            onBlur={(e) => resetZoom(e)}
            ref={inputRef}
            type={"text"}
            className={CSS.consoleinput}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Console;
