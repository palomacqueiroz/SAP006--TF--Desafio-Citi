import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";

const About = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="text-center">
        <div className="container-fluid justify-content-center">
          <h2>Espaço para os GitHubs</h2>
        </div>
      </div>
    </>
  );
};

export default About;
