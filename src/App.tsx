import "./App.css";
import "animate.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import { RootState } from "./store/store";
import { incCounter } from "./store/reducers/AppReducer";
import BGParticles from "./components/BGParticles/BGParticles";
import Landing from "./components/Sections/Landing/Landing";
import WhatYouNeed from "./components/Sections/WhatYouNeed/WhatYouNeed";
import Particle from "./components/Particles/Particle";
import Iam from "./components/Sections/Iam/Iam";
import CenterIcon from "./components/CenterIcon/CenterIcon";
import FireBaseIcon from "./assets/firebase.svg";

function App() {
  const state = useSelector((state: RootState) => {
    return state;
  });
  const dispatch = useDispatch();
  

  useEffect(()=>{
      setTimeout(()=>{
          dispatch(incCounter());
      },10000);
  },[state.AppReducer.stackCounter]);

  return (
    <div className="app-container">
      <Navbar title="Demba Diack" />
      <BGParticles/>
      <Landing/>
      <Particle/>
      <CenterIcon icon={FireBaseIcon}/>
      <WhatYouNeed/>
      <Iam/>
    </div>
  );
}

export default App;
