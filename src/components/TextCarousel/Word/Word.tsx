import React, { useEffect, useState } from "react";
import CSS from "./Word.module.css";

interface WordProps {
  text: string;
}
function Word(props: WordProps) {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
      let temp = props.text.split("").map(letter => {
          return <div style={{display : "inline-block"}}>{letter}</div>
      });
      setState(<div className={CSS.word}>{temp}</div>);
  }, []);
  return <div>{state}</div>;
}

export default Word;
