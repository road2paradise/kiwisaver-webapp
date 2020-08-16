import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import Equal from "./Images/equal.png";
import Egg from "./Images/egg.png";
import "./css/KiwisaverIntro.css";

function KiwisaverIntro() {
  return (
    <div class="wrapper">
      <Typography
        classes={{ label: "description" }}
        color="secondary"
        variant="h2"
        component="h1"
      >
        What is KiwiSaver?
      </Typography>
      <Typography
        classes={{ label: "description" }}
        color="secondary"
        variant="h6"
        component="h1"
      >
        A simple breakdown of how KiwiSaver works
      </Typography>

      <div class="row">
        <div class="column">
          <Tooltip title="Your contributions">
            <EmojiPeopleIcon class="icon" style={{ fontSize: 200 }} />
          </Tooltip>
        </div>
        <div class="column">
          <AddIcon class="add" />
        </div>
        <div class="column">
          <Tooltip title="Government will contribute 50c for every $1 you contribute, up to a maximum of $521.43 per year ">
            <AccountBalanceIcon class="icon" style={{ fontSize: 200 }} />
          </Tooltip>
        </div>
        <div class="column">
          <AddIcon class="icon" class="add" />
        </div>
        <div class="column">
          <Tooltip title="Your employer will contribute at least 3% on top of your salary">
            <PeopleOutlineIcon class="icon" style={{ fontSize: 200 }} />
          </Tooltip>
        </div>
      </div>
      <div class="row">
        <div class="column"></div>
        <div class="column">
          <AddIcon class="add-2" />
        </div>
        <div class="column">
          <Tooltip title="Your funds are invested and will increase by 3-5% per year">
            <TrendingUpIcon style={{ fontSize: 250 }} />
          </Tooltip>
        </div>
        <div class="column">
          <img src={Equal} class="equal" alt="equal-sign" />
        </div>
        <div class="column">
          <Tooltip title="Your retirement savings">
            <img src={Egg} class="egg" alt="egg" />
          </Tooltip>{" "}
        </div>
      </div>
    </div>
  );
}

export default KiwisaverIntro;
