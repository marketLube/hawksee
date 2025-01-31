import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Nav } from "./components/Nav";
import { Bird } from "./page/Section1/Bird";
import { BirdMobo } from "./page/Section1/BirdMobo";
import { Paragraph } from "./page/Section2/Paragraph";
import { Counter } from "./page/Section3/Counter";
import { DoubleLineReels } from "./page/Section4/DoubleLineReels";
import { Research } from "./page/Section5/Research";
import { Grid } from "./page/Section7/Grid";
import { MeetTheTeam } from "./page/Section8/MeetTheTeam";
import { GetInTouch } from "./page/Section9/GetInTouch";
import Projects from "./page/Projects/Projects";
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

  const isMobile = useMediaQuery({ query: "(max-width: 767.98px)" });

  return (
    <>
      <header>
        <Nav
          isNavScrolling={isNavScrolling}
          setIsNavScrolling={setIsNavScrolling}
        />
      </header>
      <main>
        {isMobile ? (
          <BirdMobo />
        ) : (
          <Bird
            isNavScrolling={isNavScrolling}
            setIsNavScrolling={setIsNavScrolling}
          />
        )}
        <Paragraph />
        {isMobile ? <ServiceMobo /> : <ServiceSCroll />}
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
