import "./App.css";
import 'animate.css';
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import { RootState } from "./store/store";
import Banner from "./components/Banner/Banner";

function App() {
  const state = useSelector((state:RootState) => {

    return state;
  });

  useEffect(() => {
    console.log(state.AppReducer.name);
  });

  return <>
  <Navbar title="Demba Diack"/>
  <Banner/>
  </>;
}

export default App;
