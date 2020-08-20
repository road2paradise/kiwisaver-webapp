import React from "react";
import { Typography } from "@material-ui/core";
import Logo from "./Images/OwlLogo.png";
import Gif from "../gifs/gL.gif";
import ReactTypingEffect from "react-typing-effect";
import "./css/TextComponent.css";

function TextComponent() {
  return (
    <>
      <div class="row">
        <img src={Gif} alt="owl" className="owl" />
        <div class="column">
          <img src={Logo} alt="WiserLogo" className="logo" />
          <Typography color="secondary" variant="h3" component="h1">
            <ReactTypingEffect
              speed={85}
              eraseDelay={1000000}
              text="A personal assistant to help you plan your life journey."
            />
          </Typography>
        </div>
      </div>
    </>
  );
}

export default TextComponent;
