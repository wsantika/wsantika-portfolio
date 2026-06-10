import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import ProjectSection from "./components/ProjectSection";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <ProjectSection />
  </StrictMode>,
);
