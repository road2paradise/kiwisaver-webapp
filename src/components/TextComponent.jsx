import React from "react";
import dummyText from "../dummytext";
import { Typography } from "@material-ui/core";
import "./css/TextComponent.css";

function TextComponent() {
  return (
    <Typography
      classes={{ label: "section-text" }}
      color="secondary"
      variant="h6"
      component="h1"
    >
      {dummyText}
    </Typography>
  );
}

export default TextComponent;
