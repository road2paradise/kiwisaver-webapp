import React, { useState } from "react";
import "./App.css";
import "fontsource-roboto";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import Section from "./components/Section";

function App() {
  const [started, setStarted] = useState(false);
  const scrollToStart = () => {
    setStarted(true);
  };

  return (
    <div className="App">
      <Fade duration={1000}>
        <Section title="KiwiSaver" id="section1" textContent={true} />
        <Link
          to="section2"
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          onClick={scrollToStart}
        >
          Click here to get started!
        </Link>
      </Fade>
      {started ? (
        <>
          <Section
            title="Introducing Owl the Kiwisaver!"
            id="section2"
            textContent={false}
          />
        </>
      ) : null}
    </div>
  );
}

export default App;
