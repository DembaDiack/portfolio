import React from "react";
import Card from "../../Card/Card";
import Section from "../../Section/Section";
import CSS from "./WhatYouNeed.module.css";
import ReactIcon from "../../../assets/react.svg";
import TypescriptIcon from "../../../assets/typescript.svg";
import MongodbIcon from "../../../assets/mongodb.svg";
import Nodecon from "../../../assets/nodejs.svg";
import GithubIcon from "../../../assets/github.svg";
import RokcetIcon from "../../../assets/rocket.svg";
import Console from "../../Console/Console";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function WhatYouNeed() {
  return (
    <span className={CSS.container}>
      <Section sharp width="100%" row className={CSS.section}>
        <div style={{ inlineSize: "90%", marginTop: "50px" }}>
          <div style={{ fontSize: 40, textAlign: "center" }}>
            <strong>
              Everything you need for a <u>perfect</u> website
            </strong>
            <div>Check out what i can work with</div>
          </div>
        </div>
        <div style={{ width: "90%" }}>
          <div className={CSS.cards}>
            <Card
              body="React is a library used to make websites come to life,with it i can do magic"
              icon={<img src={ReactIcon} width={50} />}
              title="React"
            />
            <Card
              body="Never feel the pain of a bad code base, with typescript, i mastered the art of clean code"
              icon={<img src={TypescriptIcon} width={50} />}
              title="Typescript"
            />
            <Card
              body="With my mongodb skills,your database will survive anything"
              icon={<img src={MongodbIcon} width={50} />}
              title="MongoDB"
            />
            <Card
              body="You can spell MERN without Nodejs,i can handle both the sides of the stack"
              icon={<img src={Nodecon} width={50} />}
              title="NodeJS"
            />
            <Card
              body="Teamwork makes the dream work, git it ?"
              icon={<img src={GithubIcon} width={50} />}
              title="Git"
            />
            <Card
              body="This section would be too long if i were to list them all, not branging at all , ok maybe a little."
              icon={<img src={RokcetIcon} width={50} />}
              title="Much More..."
            />
          </div>
        </div>
        <div style={{marginTop : 10}}>
          Get to know me better <FontAwesomeIcon icon={faArrowDown}/>
        </div>
        <div style={{
          width : "100%",
          display : "flex",
          justifySelf : "center",
          alignItems : "center",
          flexDirection : "column"
        }}>
          <Console/>
        </div>
      </Section>
    </span>
  );
}

export default WhatYouNeed;
