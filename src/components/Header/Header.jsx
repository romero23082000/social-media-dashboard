import React from "react";
import Switch from "../switch/Switch";
import "./Header.css";

const Header = () => {
  return (
    <div className="container-header">
      <div className="container-title">
        <h1 className="title">Social Media Dashboard</h1>
        <p className="subtitle">Total Followers: 23.004</p>
      </div>

      <Switch />
    </div>
  );
};

export default Header;
