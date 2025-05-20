import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div>
      {/* <Helmet>
        <title>Settings</title>
      </Helmet> */}
      <h1>Settings</h1>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default Settings;
