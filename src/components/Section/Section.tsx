import React from 'react'
import Divider from '../Divider/Divider';
import CSS from "./Section.module.css";
import TypescriptIcon from "../../assets/typescript.svg";
function Section() {

  return (
    <div className={`${CSS.grid} ${CSS.hoverScale}`} style={{marginTop : 15,overflow : "hidden"}}>
        <div>
            <div style={{fontSize : 50,fontWeight : "bold"}}>
                FIND THE BEAUTY IN
                <div>
                SIMPLICITY.
                </div>
                </div>
            <div>
                I find simple designs to be the best of designs
            </div>
            <Divider/>
            <div>
                with my computer science degree from the top ranked polytechnical school in dakar<br/>
                i can conjur up any design you hand me with ease, while knocking the backend out as well.<br/>
                yes i just defined what a FullStack dev is 	🐱‍🏍
            </div>
        </div>
        <div>
            <img className={CSS.icon} width={"250px"} src={TypescriptIcon}/>
        </div>
    </div>
  )
}

export default Section