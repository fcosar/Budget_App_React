import React from "react";
import '../assets/styles/header.css';
import Logo from "../assets/imgs/money.png";
import Icon from"../assets/imgs/left2.png";

import { useNavigate } from "react-router-dom";

const Header = ({ whichPage, navigateTo }) => {
  console.log(whichPage);
  const navigate=useNavigate()
  var show = false;
  if (whichPage !== "home") {
    show = true;
  }
  return (
    <div className="headerContainer">
      <div className="headerWrapper">
        {show === true && (
          <div onClick={()=>navigate(navigateTo)} className="headerIconWrapper">
            <img src={Icon} />
          </div>
        )}
        <div className="logoWrapper">
          <img src={Logo} />
        </div>
        <h1>My Budget App</h1>
        <div className="logoWrapper">
          <img src={Logo} />
        </div>
      </div>
    </div>
  );
};

export default Header;