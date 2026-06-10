# Stone.Code Portfolio

Personal portfolio website for showcasing services, projects, pricing packages, client feedback, and contact options.

## Overview

This project is built with React, Vite, and Tailwind CSS. The design uses a dark modern theme with cyan accents, responsive cards, smooth scrolling navigation, scroll reveal animations, and a rotating logo hero visual.

## Features

- Sticky responsive navbar for all main sections
- Smooth scroll navigation without hash changes in the URL
- Dynamic hero greeting based on the user's local time
- Rotating circular logo animation
- About section with skill chips
- Services section with professional service cards
- Projects section with preview images, tech stack icons, live demo links, and GitHub links
- Pricing section with data-driven packages
- Client feedback section with dummy testimonial data
- Get In Touch section with WhatsApp and email CTA
- Scroll reveal animation for each section
- Responsive layout for mobile, tablet, and desktop

## Sections

- `Home`
- `About`
- `Services`
- `Projects`
- `Pricing`
- `Reviews`
- `Contact`

## Tech Stack

- React
- Vite
- Tailwind CSS
- ESLint

## Project Structure

```text
src/
  assets/
    gastronex.png
    ecobalitech.png
    lentera-baca.png
    stravatraining.png
    my-logo.jpg
  components/
    Navbar.jsx
    HeroSection.jsx
    AboutSection.jsx
    ServiceSection.jsx
    ProjectSection.jsx
    PricingSection.jsx
    ReviewSection.jsx
    ContactSection.jsx
    ScrollReveal.jsx
  index.css
  main.jsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Run lint check:

```bash
npm run lint
```

## Customization

Project cards can be edited in:

```text
src/components/ProjectSection.jsx
```

Pricing packages can be edited in:

```text
src/components/PricingSection.jsx
```

Client reviews can be edited in:

```text
src/components/ReviewSection.jsx
```

Contact email and WhatsApp number can be edited in:

```text
src/components/ContactSection.jsx
```

Hero social links and greeting display can be edited in:

```text
src/components/HeroSection.jsx
```

## Notes

- The WhatsApp number in `ContactSection.jsx` should be replaced with the real number.
- The review data is dummy content and can be replaced with real client feedback.
- Scroll animation styles are defined in `src/index.css`.

## Author

Created by [Santika](https://github.com/wsantika).
