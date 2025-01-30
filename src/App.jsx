import React, { useState, useEffect } from "react";
import { Nav } from "./components/Nav";
import { Bird } from "./page/Section1/Bird";
import { Paragraph } from "./page/Section2/Paragraph";
import { Counter } from "./page/Section3/Counter";
import { DoubleLineReels } from "./page/Section4/DoubleLineReels";
import { Research } from "./page/Section5/Research";

import { Grid } from "./page/Section7/Grid";
import { MeetTheTeam } from "./page/Section8/MeetTheTeam";
import { GetInTouch } from "./page/Section9/GetInTouch";
import Projects from "./page/Projects/Projects";
import Service from "./page/Service/service";
import ServiceMobo from "./page/Service/serviceMobo";
import ServiceSCroll from "./page/Service/ServiceSCroll";

function App() {
  const [isNavScrolling, setIsNavScrolling] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <Nav
          isNavScrolling={isNavScrolling}
          setIsNavScrolling={setIsNavScrolling}
        />
      </header>
      <main>
        <Bird
          isNavScrolling={isNavScrolling}
          setIsNavScrolling={setIsNavScrolling}
        />
        <Paragraph />
        <ServiceSCroll />
        {/* {windowWidth > 768 ? <ServiceSCroll /> : <ServiceMobo />} */}
        <Projects />
        <Counter />
        <DoubleLineReels />
        <Research />
        {/* <RealStories /> */}
        <Grid />
        <MeetTheTeam />
      </main>
      <footer>
        <GetInTouch />
      </footer>
    </>
  );
}

export default App;
