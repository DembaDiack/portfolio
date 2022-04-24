import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import Section from "../../Section/Section";
import CSS from "./Iam.module.css";

function Iam() {
    const [titleRef, titleInView] = useInView({
        triggerOnce: true,
        rootMargin: "-100px 0px",
      });
      
  return (
    <motion.div
      ref={titleRef}
      animate={{ translateX: titleInView ? 0 : -10 }}
      transition={{ duration: 0.5 }}
      className={CSS.background}
    >
      <div className={CSS.image}></div>
      <div className={CSS.toptext}>LETS</div>
      <a className={CSS.bigtext} href="#">
          LETS TALK BUSINESS <FontAwesomeIcon icon={faChevronRight}/>
      </a>
    </motion.div>
  );
}

export default Iam;
