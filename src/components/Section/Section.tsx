import React from "react";
import CSS from "./Section.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface sectionProps {
  children: JSX.Element[] | JSX.Element;
  width?: string;
  sharp?: boolean;
  height?:string,
  row?:boolean,
  style?: React.CSSProperties | undefined
}

function Section(props: sectionProps) {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <motion.div
      ref={titleRef}
      animate={{ scale: titleInView ? 1 : 0.8 }}
      transition={{ duration: 2.5 }}
      className={`${CSS.grid} ${CSS.hoverScale}`}
      style={{
        marginTop: 15,
        overflow: "hidden",
        width: props.width ? props.width : "80%",
        borderRadius: props.sharp ? "0px" : "15px",
        height : props.height ? props.height : "100%",
        gridAutoFlow : props.row ? "row" : "column",
        ...props.style

      }}
    >
      {props.children}
    </motion.div>
  );
}

export default Section;
