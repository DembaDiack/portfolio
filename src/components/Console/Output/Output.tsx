import React from "react";
import CSS from "./Output.module.css";

interface outputProps 
{
    text:string,
    newline?:boolean
}
function Output(props:outputProps) {
  return (
    <div className={CSS.output}>
      {!props.newline? <span style={{
          fontWeight : "bold",
          color : "var(--demba-light-grey)"
      }}>$Demba </span> : <>&emsp;&emsp;&emsp;&emsp;&nbsp;</>}{props.text}
    </div>
  );
}

export default Output;
