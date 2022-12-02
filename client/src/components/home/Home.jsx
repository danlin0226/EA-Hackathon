import React from "react";
import screenshot from "../../assets/EA.png";
import "./Home.scss";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import closeButton from "../../assets/exit.png";
import { Link } from "react-router-dom";




const Home = () => {

  return (
    <div className="home">
      <img className="screenshot" src={screenshot} alt="" />
    </div>
  );
};

export default Home;
