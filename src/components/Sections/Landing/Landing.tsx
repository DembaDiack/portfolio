import React, { useEffect, useRef, useState } from "react";
import Divider from "../../Divider/Divider";
import Section from "../../Section/Section";
import CSS from "./Landing.module.css";
import TextCarousel from "../../TextCarousel/TextCarousel";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import useMusic from "../../../hooks/useMusic";

function AboutMe() {
  const state = useSelector((state: RootState) => state);
  const [textWillUnmount, setTextWillUnmount] = useState(false);
  const [playAudio, pauseAudio, audioState] = useMusic(
    "./assets/fireplace.mp3"
  );

  useEffect(() => {
    console.log(1);
    setTextWillUnmount(false);
    return function () {
      setTextWillUnmount(true);
    };
  }, [state.AppReducer.stackCounter]);

  useEffect(() => {
    console.log(textWillUnmount);
  }, [textWillUnmount]);
  return (
    <>
      <Section
        row
        width="100%"
        sharp
        style={{
          background: "none",
          color: "white",
          minHeight: 350,
          alignContent : "baseline"
        }}
      >
        <div
          style={{
            fontSize: "10vmin",
            textAlign: "center",
            inlineSize: "70%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            justifyItems: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          Do you even
          <div className={CSS.wrapper}>
            <TextCarousel />
          </div>
          ?
        </div>
      </Section>
    </>
  );
}

export default AboutMe;
