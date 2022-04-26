import { useEffect, useState } from "react";


export default function useMusic(url:string):[()=>void,()=>void,any]
{
    
    const path = require("../assets/fireplace.mp3");
    const [state,setState] = useState({
        audio : new Audio(path.default),
        playing : false
    })
    useEffect(()=>{
       state.audio.autoplay = true;
    },[]);

    const playAudio = ()=>{
        console.log(state);
        state.audio.play()
        .then(function(){
            setState({
                ...state,
                playing : state.audio.paused
            })
        })
        .catch(err => {
            console.log(state);
            console.log(err);
            setState({
                ...state,
                playing : state.audio.paused
            })
        })
    }
    const pauseAudio = ()=>{
        console.log("called");
        state.audio.pause();
    }
    return [playAudio,pauseAudio,state];
}