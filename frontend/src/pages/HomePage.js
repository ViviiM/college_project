import React from "react";
import Layout from "./../components/Layout/Layout";
import Carpool from "../extras/carpool.js";
import Background from '../extras/Background.js'
const HomePage = () => {
  return (
    <Layout>
      <div className="container ">
        <Carpool/>
        <Background/>
      </div>
    </Layout>
  );
};

export default HomePage;
