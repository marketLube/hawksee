import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <ParallaxProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ParallaxProvider>
);
