import React from "react";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import TextComponent from "./TextComponent";
import ChatBoxComponent from "./ChatBoxComponent";
import KiwisaverIntro from "./KiwisaverIntro";

import "./css/Section.css";

function Section(props) {
  let component = null;
  function handleUserInput(name, location, age, profession) {
    props.callBack(name, location, age, profession);
  }
  switch (props.type) {
    case "text":
      component = <TextComponent />;
      break;
    case "chat-bot":
      component = <ChatBoxComponent callBack={handleUserInput} />;
      break;
    default:
      component = null;
  }

  return (
    <div className="section-content" id={props.callBackid}>
      <Container maxWidth="Xl" classes={{ label: `section-${props.id}` }}>
        <Typography color="secondary" variant="h2" component="h1">
          {props.title}
        </Typography>{" "}
        {component}{" "}
      </Container>
    </div>
  );
}

export default Section;
