import "./App.css";
import "animate.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import { RootState } from "./store/store";
import Banner from "./components/Banner/Banner";
import Section from "./components/Section/Section";
import { incCounter } from "./store/reducers/AppReducer";
import BGParticles from "./components/BGParticles/BGParticles";
import AboutMe from "./components/Sections/AboutMe/AboutMe";
import WhatYouNeed from "./components/Sections/WhatYouNeed/WhatYouNeed";

function App() {
  const state = useSelector((state: RootState) => {
    return state;
  });
  const dispatch = useDispatch();

  useEffect(()=>{
      setTimeout(()=>{
          dispatch(incCounter());
      },5000);
  },[state.AppReducer.stackCounter]);

  return (
    <div className="app-container">
      <Navbar title="Demba Diack" />
      <BGParticles/>
      <Banner />
      <AboutMe/>
      <WhatYouNeed/>
    </div>
  );
}

export default App;
