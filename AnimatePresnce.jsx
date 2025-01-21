// AnimatedRoutes.jsx

import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import App from "./src/App";
import Projects from "./src/page/Projects/Projects";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div className="wrapper">
      <TransitionGroup mode="wait">
        <CSSTransition key={location.key} timeout={500} classNames="fade">
          <div className="route-section">
            <Routes location={location}>
              <Route path="/" element={<App />} />
              <Route path="projects" element={<Projects />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default AnimatedRoutes;
