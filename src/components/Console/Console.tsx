import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Divider from "../Divider/Divider";
import CSS from "./Console.module.css";
import Output from "./Output/Output";
import update from 'immutability-helper';
import handleCommand from "./Commander";

function Console() {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  const inputRef = useRef<any>();
  const [inputValue, setInputValue] = useState("");
  const [outputArr,setOutputArr] = useState([
      <Output text="Welcome to my commandline! type --help to see what you can do"/>
  ]);

  const handleSubmit = () => {
      const result = handleCommand(inputRef.current.value,outputArr.length);
        let temp = outputArr;
        temp.push(result);
        setOutputArr(temp);
  }
  useEffect(()=>{
    document.addEventListener("keydown",(e)=>{
        if(e.key == "Enter")
        {
            e.stopPropagation();
            e.cancelBubble = true;
            handleSubmit();
            setInputValue("");
            inputRef.current.focus();
        }
    })
  },[]);
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
        <div className={CSS.outputarea} style={{
            overflowY : "scroll"
        }}>
            {outputArr}
        </div>
        <div className={CSS.inputarea}>
        <span style={{
          fontWeight : "bold",
          color : "var(--demba-light-grey)"
      }}>$Demba </span>
          <input
            value={inputValue}
            onInput={(e) => setInputValue(e.currentTarget.value)}
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
