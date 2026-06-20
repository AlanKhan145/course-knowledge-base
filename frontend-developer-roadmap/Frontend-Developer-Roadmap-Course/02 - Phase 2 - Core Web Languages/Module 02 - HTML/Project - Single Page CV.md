# 005 - Project: Personal Portfolio Static

## Section
Phase 2 — HTML

## Project Overview

Build a static personal portfolio website using only HTML and CSS (no JavaScript). Deploy it to GitHub Pages.

This is **Project 1** in your portfolio. It demonstrates semantic HTML, responsive CSS, and basic deployment — all things interviewers look for in a junior candidate.

---

## Skills Demonstrated

- Semantic HTML structure
- CSS layout (Flexbox, Grid)
- Responsive design (mobile, tablet, desktop)
- GitHub repository with README
- Deployment to GitHub Pages

---

## Pages / Sections Required

Your portfolio must have these five sections on a single page:

### 1. Hero / Introduction
- Your name as `<h1>`
- Short tagline (e.g., "Frontend Developer | Building clean web experiences")
- A photo of yourself (with descriptive `alt`)
- Two CTA buttons: "View Projects" (anchor link) and "Download CV" (file link)

### 2. About Me
- 2–3 sentences describing your background and what you're learning
- A list of technologies you know

### 3. Skills
- A visual grid of skill badges/icons
- Organized by category: Languages, Frameworks, Tools

### 4. Projects
- At least 3 project cards, each with:
  - Project name (`<h3>`)
  - Short description
  - Technology tags
  - Links: Live demo and GitHub source

### 5. Contact
- Your email (mailto link)
- GitHub profile link
- LinkedIn profile link (or placeholder)
- A simple contact form (HTML only, no backend)

---

## File Structure

```
personal-portfolio/
├── index.html
├── styles.css
├── assets/
│   ├── photo.jpg
│   └── cv.pdf
└── README.md
```

---

## Step-by-Step Guide

### Step 1: Set Up the Repository

```bash
# Create project folder
mkdir personal-portfolio
cd personal-portfolio
git init

# Create files
touch index.html styles.css README.md
mkdir assets
```

### Step 2: Build the HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nguyen Van A — Frontend Developer</title>
  <meta name="description" content="Portfolio of Nguyen Van A, a frontend developer.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- Navigation -->
  <header>
    <a href="#" class="logo">NVA</a>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <button class="nav-toggle" aria-label="Toggle navigation">&#9776;</button>
  </header>

  <main>

    <!-- Hero -->
    <section id="hero">
      <img src="assets/photo.jpg" alt="Nguyen Van A" class="avatar">
      <div class="hero-text">
        <h1>Hi, I'm Nguyen Van A</h1>
        <p class="tagline">Frontend Developer — building modern, accessible web apps</p>
        <div class="hero-cta">
          <a href="#projects" class="btn btn-primary">View Projects</a>
          <a href="assets/cv.pdf" class="btn btn-secondary" download>Download CV</a>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about">
      <h2>About Me</h2>
      <p>
        I'm a self-taught frontend developer based in Ho Chi Minh City.
        I focus on building clean, performant user interfaces using React and Next.js.
      </p>
      <p>Currently learning: TypeScript, testing with Vitest, and deployment with Vercel.</p>
    </section>

    <!-- Skills -->
    <section id="skills">
      <h2>Skills</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Languages</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Frameworks</h3>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Tools</h3>
          <ul>
            <li>Git &amp; GitHub</li>
            <li>Vite</li>
            <li>Figma</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects">
      <h2>Projects</h2>
      <div class="projects-grid">

        <article class="project-card">
          <img src="assets/project1.png" alt="Screenshot of expense tracker app">
          <div class="project-info">
            <h3>Expense Tracker</h3>
            <p>A vanilla JavaScript app to track income and expenses with localStorage persistence.</p>
            <ul class="tech-tags">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div class="project-links">
              <a href="#">Live Demo</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </article>

        <article class="project-card">
          <img src="assets/project2.png" alt="Screenshot of weather app">
          <div class="project-info">
            <h3>Weather App</h3>
            <p>Search for real-time weather by city using the OpenWeatherMap API.</p>
            <ul class="tech-tags">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Fetch API</li>
            </ul>
            <div class="project-links">
              <a href="#">Live Demo</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </article>

        <article class="project-card">
          <img src="assets/project3.png" alt="Screenshot of this portfolio">
          <div class="project-info">
            <h3>Portfolio Website</h3>
            <p>This portfolio — built with semantic HTML and CSS, deployed to GitHub Pages.</p>
            <ul class="tech-tags">
              <li>HTML</li>
              <li>CSS</li>
              <li>GitHub Pages</li>
            </ul>
            <div class="project-links">
              <a href="#">Live Demo</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </article>

      </div>
    </section>

    <!-- Contact -->
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>I'm open to internship and junior developer opportunities.</p>
      <div class="contact-links">
        <a href="mailto:you@example.com">Email Me</a>
        <a href="https://github.com/yourusername">GitHub</a>
        <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
      </div>
    </section>

  </main>

  <footer>
    <p>&copy; 2025 Nguyen Van A. Built with HTML &amp; CSS.</p>
  </footer>

</body>
</html>
```

### Step 3: CSS Requirements

Your `styles.css` must include:

- CSS custom properties (variables) for colors, fonts, and spacing
- Mobile-first base styles
- Responsive navigation (hamburger menu on mobile)
- Flexbox for the hero section
- CSS Grid for skills and projects sections
- Hover effects on project cards and buttons
- Smooth scroll behavior: `html { scroll-behavior: smooth; }`

Recommended breakpoints:
```css
/* Mobile: default (320px+) */
/* Tablet: 768px+ */
@media (min-width: 768px) { ... }
/* Desktop: 1024px+ */
@media (min-width: 1024px) { ... }
```

---

### Step 4: Deploy to GitHub Pages

```bash
# Stage and commit all files
git add index.html styles.css README.md assets/
git commit -m "Initial portfolio build"

# Create repository on GitHub, then push
git remote add origin https://github.com/yourusername/personal-portfolio.git
git branch -M main
git push -u origin main
```

Then in GitHub → repository → **Settings** → **Pages** → Source: **Deploy from a branch** → `main` / `/ (root)` → Save.

Your site will be live at `https://yourusername.github.io/personal-portfolio/` within a minute.

---

## Checklist Before Submitting

- [ ] Passes HTML validation at [validator.w3.org](https://validator.w3.org)
- [ ] All five sections present and linked from nav
- [ ] At least 3 project cards with links
- [ ] Responsive: looks good on 375px (mobile), 768px (tablet), 1440px (desktop)
- [ ] All images have descriptive `alt` text
- [ ] All form labels connected to inputs
- [ ] Deployed and accessible on GitHub Pages
- [ ] Repository has a README with screenshots and tech stack

---

## README Template for This Project

```markdown
# Personal Portfolio

A static portfolio website showcasing my frontend development skills.

## Live Demo

[https://yourusername.github.io/personal-portfolio/](link)

## Features

- Responsive layout (mobile, tablet, desktop)
- Semantic HTML5
- CSS Grid and Flexbox
- Smooth scroll navigation

## Tech Stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox)
- GitHub Pages (deployment)

## Screenshots

[Add screenshots here]

## What I Learned

- Structuring a page with semantic HTML
- Building responsive layouts without any framework
- Deploying a static site to GitHub Pages
```

---

## Next Phase

Phase 3 — CSS: selectors, box model, Flexbox, Grid, responsive design in depth
