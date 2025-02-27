import { useCallback, useEffect, useRef, useState } from "react";
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
import { useInView } from "framer-motion";
import { ParagraphMob } from "./page/Section2/ParagraphMob";
import ServiceHorizontal from "./page/Service/serviceHorizontal";
import ServiceDetails from "./page/Service/serviceComponets/serviceDetails";

function App() {
  const [isNavScrolling, setIsNavScrolling] = useState(null);
  const isMobile = useMediaQuery({ query: "(max-width: 767.98px)" });
  const isAir = useMediaQuery({ query: "(max-width: 820px)" });
  const testerRef = useRef(null);
  const isTesterHundered = useInView(testerRef);
  const isTesterVisible = useInView(testerRef, { margin: "500px" });
  const paraRef = useRef(null);
  const paraInView = useInView(paraRef);

  return (
    <>
      <header aria-label="Main navigation header" id="header">
        <Nav
          isNavScrolling={isNavScrolling}
          setIsNavScrolling={setIsNavScrolling}
          aria-label="Main navigation"
          isTesterHundered={isTesterHundered}
          isMobile={isMobile}
        />
      </header>
      <main aria-label="Main content area">
        <div ref={testerRef} className="tester"></div>
        {isMobile ? (
          <BirdMobo
            isNavScrolling={isNavScrolling}
            setIsNavScrolling={setIsNavScrolling}
            aria-label="Mobile bird section"
            isTesterHundered={isTesterHundered}
            isTesterVisible={isTesterVisible}
            paraInView={paraInView}
          />
        ) : (
          <Bird
            isNavScrolling={isNavScrolling}
            setIsNavScrolling={setIsNavScrolling}
            aria-label="Desktop bird section"
          />
        )}
        {!isMobile ? (
          <Paragraph
            aria-label="Paragraph section"
            isTesterHundered={isTesterHundered}
            paraRef={paraRef}
          />
        ) : (
          <ParagraphMob
            aria-label="Paragraph section"
            isTesterHundered={isTesterHundered}
            paraRef={paraRef}
          />
        )}
        {isAir ? (
          <ServiceMobo aria-label="Mobile service section" />
        ) : (
          <ServiceHorizontal aria-label="Service horizontal section" />
        )}
        <Projects aria-label="Projects section" />
        <ServiceDetails aria-label="Service details section" />
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
