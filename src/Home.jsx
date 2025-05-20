import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home mpa</h1>
      <Link to="/settings">Go to settings</Link>
    </div>
  );
};

export default Home;
