import React from "react";
import GateAxios from "../components/GateAxios";
import HomePage from "../components/HomePage";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <HomePage />
      <GateAxios />
      
    </>
  );
};

export default Home;
