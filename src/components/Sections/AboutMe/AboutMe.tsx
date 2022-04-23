import React from "react";
import Divider from "../../Divider/Divider";
import Section from "../../Section/Section";
import CSS from "./AboutMe.module.css";
import TypescriptIcon from "../../../assets/typescript.svg";
import MyPicture from "../../../assets/me.jpg";

function AboutMe() {
  return (
    <Section>
      <div>
        <div style={{ fontSize: 50, fontWeight: "bold" }}>
          MY NAME IS DEMBA DIACK
          <div>A FULLSTACK WEBDEV.</div>
        </div>
        <div>I find simple designs to be the best of designs</div>
        <Divider />
        <div>
          with my computer science degree from the top ranked polytechnical
          school in dakar
          <br />
          i can conjur up any design you hand me with ease, while knocking the
          backend out as well.
          <br />
          yes i just defined what a FullStack dev is 🐱‍🏍
        </div>
      </div>
      <div>
        <img className={CSS.icon} width={"250px"} src={MyPicture} />
      </div>
    </Section>
  );
}

export default AboutMe;
