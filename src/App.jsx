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
  const isMobile = useMediaQuery({ query: "(max-width: 767.98px)" });
  const isAir = useMediaQuery({ query: "(max-width: 820px)" });

  return (
    <>
      <header aria-label="Main navigation header">
        <Nav
          isNavScrolling={isNavScrolling}
          setIsNavScrolling={setIsNavScrolling}
          aria-label="Main navigation"
        />
      </header>
      <main aria-label="Main content area">
        {isMobile ? (
          <BirdMobo
            isNavScrolling={isNavScrolling}
            setIsNavScrolling={setIsNavScrolling}
            aria-label="Mobile bird section"
          />
        ) : (
          <Bird
            isNavScrolling={isNavScrolling}
            setIsNavScrolling={setIsNavScrolling}
            aria-label="Desktop bird section"
          />
        )}
        <Paragraph aria-label="Paragraph section" />
        {isAir ? (
          <ServiceMobo aria-label="Mobile service section" />
        ) : (
          <ServiceSCroll aria-label="Scroll service section" />
        )}
        <Projects aria-label="Projects section" />
        <Counter aria-label="Counter section" />
        <DoubleLineReels aria-label="Double line reels section" />
        <Research aria-label="Research section" />
        <Grid aria-label="Grid section" />
        <MeetTheTeam aria-label="Meet the team section" />
      </main>
      <footer aria-label="Footer section">
        <GetInTouch aria-label="Get in touch section" />
      </footer>
    </>
  );
}

export default App;
