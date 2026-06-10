import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import ProjectSection from "./components/ProjectSection";
import PricingSection from "./components/PricingSection";
import ReviewSection from "./components/ReviewSection";
import ContactSection from "./components/ContactSection";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <ProjectSection />
    <PricingSection />
    <ReviewSection />
    <ContactSection />
  </StrictMode>,
);
