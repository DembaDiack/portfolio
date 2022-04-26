import React, { useEffect, useRef } from "react";
import CSS from "./Output.module.css";

interface outputProps 
{
    text:string,
    newline?:boolean
}

function Output(props:outputProps) {

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef<any>();
    useEffect(() => elementRef.current?.scrollIntoView());
    return <div ref={elementRef} />;
  };

  
  return (
    <div className={CSS.output} id="output">
      {!props.newline? <span style={{
          fontWeight : "bold",
          color : "var(--demba-light-grey)"
      }}>$Demba </span> : <>&emsp;&emsp;&emsp;&emsp;&nbsp;</>}{props.text}
    <AlwaysScrollToBottom />
    </div>
  );
}

export default Output;
