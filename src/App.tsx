import "./App.css";
import "animate.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import { RootState } from "./store/store";
import Section from "./components/Section/Section";
import { incCounter } from "./store/reducers/AppReducer";
import BGParticles from "./components/BGParticles/BGParticles";
import AboutMe from "./components/Sections/AboutMe/AboutMe";
import WhatYouNeed from "./components/Sections/WhatYouNeed/WhatYouNeed";
import Particle from "./components/Particles/Particle";
import Iam from "./components/Sections/Iam/Iam";

function App() {
  const state = useSelector((state: RootState) => {
    return state;
  });
  const dispatch = useDispatch();

  useEffect(()=>{
      setTimeout(()=>{
          dispatch(incCounter());
      },15000);
  },[state.AppReducer.stackCounter]);

  return (
    <div className="app-container">
      <Navbar title="Demba Diack" />
      <BGParticles/>
      <AboutMe/>
      <Particle/>
      <WhatYouNeed/>
      <Iam/>
    </div>
  );
}

export default App;
