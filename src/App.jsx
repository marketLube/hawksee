import React from "react";
import { Nav } from "./components/Nav";
import { Bird } from "./page/Section1/Bird";
import { Paragraph } from "./page/Section2/Paragraph";
import { Counter } from "./page/Section3/Counter";
import { DoubleLineReels } from "./page/Section4/DoubleLineReels";
import { Research } from "./page/Section5/Research";
import { RealStories } from "./page/Section6/RealStories";
import { Grid } from "./page/Section7/Grid";
import { MeetTheTeam } from "./page/Section8/MeetTheTeam";
import { GetInTouch } from "./page/Section9/GetInTouch";

function App() {
  const [isNavScrolling, setIsNavScrolling] = React.useState(null);
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
        <Counter />
        <DoubleLineReels />
        <Research />
        <RealStories />
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
