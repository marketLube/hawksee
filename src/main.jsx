import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./page/Section10/Aboutus.jsx";
import Blogs from "./page/Section12/Blogs.jsx";
import Blog from "./page/Section13/Blog.jsx";

createRoot(document.getElementById("root")).render(
  <ParallaxProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:name" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </ParallaxProvider>
);
