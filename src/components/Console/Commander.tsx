import React from "react";
import Output from "./Output/Output";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { appendOutput } from "../../store/reducers/AppReducer";

export default async function handleCommand(
  command: string,
  dispatch: Dispatch<AnyAction>
) {
  console.log(command);
  const params: any = {
    contact: {
      action: getContacts,
    },
    skills: {
      action: skillsList,
    },
    help: {
      action: help,
    },
    dadjoke: {
      action: dadjoke,
    },
    guessmyage :{
        action : guessmyage
    }
  };
  console.log(command,command.split("--"),command.includes("--"),command.indexOf("--"));

  if (command.includes("--") && command.indexOf("--") == 0) {
    const func: any = command.split("--")[1];
    const param:any = func.split(" ").length > 1 ? func.match(/^(\S+)\s(.*)/).slice(1)[1] : "";
    let action = params[func] || params[func.split(" ")[0]];
    
    console.log(action,func);
    if (action) {
      action.action(dispatch,param);
    } else {
      dispatch(
        appendOutput(
          <Output text="command not found, try --help to see list" />
        )
      );
    }
  } else {
    return dispatch(
      appendOutput(<Output text="commands start with --[command]" />)
    );
  }
}

function getContacts(dispatch: Dispatch<AnyAction>) {
  dispatch(
    appendOutput(
      <>
        <Output text="How to get in touch with me" />
        <Output newline text="Github : https://github.com/DembaDiack" />
        <Output
          newline
          text="LinkedIn : https://www.linkedin.com/in/demba-diack-18069a229/"
        />
        <Output newline text="Phone : +221 709334376" />
        <Output newline text="Email : dembadiack@gmail.com" />
      </>
    )
  );
}
function skillsList(dispatch: Dispatch<AnyAction>) {
  dispatch(
    appendOutput(
      <>
        <Output text="Plus the ones you aready know :)" />
        <Output newline text="Firebase+++" />
        <Output newline text="Java++++" />
        <Output newline text="Express+++++" />
        <Output newline text="Spring+++" />
        <Output newline text="MySQL++++++" />
      </>
    )
  );
}
function help(dispatch: Dispatch<AnyAction>) {
  dispatch(
    appendOutput(
      <>
        <Output text="help" />
        <Output newline text="--contact to see how to contact me" />
        <Output newline text="--skills to see all the technologies i use" />
        <Output newline text="--dadjoke to hear a dad joke XD " />
        <Output newline text="--guessmyage [name] so we can guess your age! " />
      </>
    )
  );
}
async function dadjoke(dispatch: Dispatch<AnyAction>) {
  const joke = await axios.get("https://icanhazdadjoke.com/", {
    headers: { Accept: "text/plain" },
  });
  dispatch(
    appendOutput(
      <>
        <Output text="Joke" />
        <Output newline text={joke.data} />
      </>
    )
  );
}
async function guessmyage(dispatch:Dispatch<AnyAction>,param:string)
{
    const result = await axios.get(`https://api.agify.io/?name=${param}`);
    dispatch(
        appendOutput(
          <>
            <Output text="Your probably" />
            <Output newline text={`${result.data.age} years old ${result.data.name}`} />
          </>
        )
      );
}
