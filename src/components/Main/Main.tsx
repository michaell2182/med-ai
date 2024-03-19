import React from "react";
import account_circle from "../../assets/account_circle.png";
import {assets} from "../../assets/assets";
const Main = () => {
  return (
    <div className="main">
      <div className="nav" >
        <p>Ai Doctor</p>
        <img src={assets.user_icon} alt="" />
        <img src={account_circle} alt="" />
      </div>
      <div className="main-container ">
        <div className="great">
            
          <p>
            <span> Good Day.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p> How many vitamin and minerals do I need to stay healthy? </p>
          </div>
          <div className="card">
            <p> How much protein do I neeed? </p>
          </div>
          <div className="card">
            <p> Signs of high blood pressure? </p>
          </div>
          <div className="card">
            <p> What does it mean when my chest gets tight? </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
