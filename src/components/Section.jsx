import React from "react";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import TextComponent from "./TextComponent";
import ChatBoxComponent from "./ChatBoxComponent";
import "./css/Section.css";

export default function Section({ title, id, type }) {
  let component = null;
  switch (type) {
    case "text":
      component = <TextComponent />;
      break;
    case "chat-bot":
      component = <ChatBoxComponent />;
      break;
    default:
      component = null;
  }

  return (
    <div className="section-content" id={id}>
      <Container maxWidth="lg" classes={{ label: `section-${id}` }}>
        <Typography color="secondary" variant="h2" component="h1">
          {title}
        </Typography>{" "}
        {component}{" "}
      </Container>
    </div>
  );
}
