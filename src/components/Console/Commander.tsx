import React from "react";
import Output from "./Output/Output";

export default function handleCommand(command:string,key:number):JSX.Element
{
    const params:any = {
        contact : {
            action : getContacts
        },
        skills : {
            action : skillsList
        },
        help : {
            action : help
        }
    }

    if(command.includes("--") && command.indexOf("--") == 0)
    {
        const func:any = command.split("--")[1];
        if(params[func])
        {
            return params[func].action(key);
        }
        else 
        {
            return <Output key={key} text="command not found, try --help to see list"/>
        }
    }
    else 
    {
        return <Output key={key} text="commands start with --[command]"/>
    }

}

function getContacts(key:number):JSX.Element
{
    return <>
    <Output key={key} text="contact list"/>
    <Output newline key={key} text="contact list"/>
    <Output newline key={key} text="contact list"/>
    </>
}
function skillsList(key:number):JSX.Element
{
    return <Output key={key} text="skills list"/>
}
function help(key:number):JSX.Element
{
    return <>
    <Output key={key} text="help"/>
    <Output newline key={key} text="--contact to see how to contact me"/>
    <Output newline key={key} text="--skills to see all the technologies i use"/>
    </>
}