import React, { useState } from "react";
import "./App.css";
import "fontsource-roboto";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import Section from "./components/Section";
import Button from "@material-ui/core/Button";

function App() {
  const [started, setStarted] = useState(false);
  const scrollToStart = () => {
    setStarted(true);
  };

  return (
    <div className="App">
      <Fade duration={1000}>
        <Section title="Kiwi Saver" id="section1" type="text" />
        <Link
          to="section2"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={scrollToStart}
        >
          <Button color="secondary" classes={{ label: "start-btn" }}>
            Click here to get started!
          </Button>{" "}
        </Link>
      </Fade>
      {started ? (
        <div className="section-2">
          <Section
            title="Introducing Owl the Kiwisaver!"
            id="section2"
            type="chat-bot"
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
