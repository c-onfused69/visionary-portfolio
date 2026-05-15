# Visionary Portfolio

Bold, futuristic portfolio built with React + Vite. Features animated pages, glassmorphism cards, and a polished contact flow.

## Live Preview

https://c-onfused69.github.io/visionary-portfolio/

## Features

- Animated, multi-page layout (Home, About, Projects, Contact)
- Glassmorphism UI and custom brand gradients
- Responsive grid for projects
- EmailJS-powered contact form

## Tech Stack

- React
- TypeScript
- Vite
- Motion (motion/react)
- Tailwind-style utility classes

## Getting Started

**Prerequisites:** Node.js 18+

1. Install dependencies:
   `npm install`
2. Start the dev server:
   `npm run dev`
3. Build for production:
   `npm run build`

## Project Structure

- [src/pages/HomePage.tsx](src/pages/HomePage.tsx)
- [src/pages/AboutPage.tsx](src/pages/AboutPage.tsx)
- [src/pages/ProjectsPage.tsx](src/pages/ProjectsPage.tsx)
- [src/pages/ContactPage.tsx](src/pages/ContactPage.tsx)
- [src/components/Navbar.tsx](src/components/Navbar.tsx)
- [src/components/Footer.tsx](src/components/Footer.tsx)
- [src/index.css](src/index.css)

## Customization

- Update project cards in [src/pages/ProjectsPage.tsx](src/pages/ProjectsPage.tsx)
- Update social links and contact details in [src/pages/ContactPage.tsx](src/pages/ContactPage.tsx)
- Tune global styles and color tokens in [src/index.css](src/index.css)

## EmailJS Setup (Contact Form)

The contact form uses EmailJS. Replace the service, template, and public key in [src/pages/ContactPage.tsx](src/pages/ContactPage.tsx).

## License

Apache-2.0
