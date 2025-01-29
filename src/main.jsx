import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./../css/style.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./page/Projects/Projects.jsx";
import AnimatedRoutes from "../AnimatePresnce.jsx";

createRoot(document.getElementById("root")).render(
  <ParallaxProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ParallaxProvider>
);
