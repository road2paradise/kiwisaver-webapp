import React from "react";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import dummyText from "../dummytext";

export default function Section({ title, id, textContent }) {
  return (
    <div className="section-content" id={id}>
      <Container maxWidth="lg">
        <Typography color="secondary" variant="h1" component="h1">
          {title}
        </Typography>{" "}
        {textContent ? (
          <Typography color="primary" variant="h6" component="h1">
            {dummyText}
          </Typography>
        ) : null}
      </Container>
    </div>
  );
}
