import React from "react";
import Divider from "../../Divider/Divider";
import Section from "../../Section/Section";
import CSS from "./AboutMe.module.css";
import FirebaseIcon from "../../../assets/firebase.svg";
import MyPicture from "../../../assets/me.jpg";
import Button from "../../Button/Button";

function AboutMe() {
  return (
    <Section row width="100%" sharp  style={{background : "inherit",color : "white",marginTop : 50,minHeight : 300}}>
      <div style={{fontSize : "6vmin"}}>
        Hello There.
      </div>
      <div style={{fontSize : "10vmin",textAlign : "center",inlineSize : "70%"}}>
        I am a simple guy, with a complex mind
      </div>
      <div style={{marginTop : 10}}>
      <img className={CSS.icon} src={FirebaseIcon} width={50}/>
      </div>
    </Section>
  );
}

export default AboutMe;
