# Nihil Hesara — Portfolio

Personal portfolio of **Nihil Hesara**, a Full Stack & Mobile Developer and second-year Computer Science undergraduate at the University of Westminster.

Live at: [nihilhesara.github.io/3D-Portforlio](https://nihilhesara.github.io/3D-Portforlio)

---

## Stack

- **React 19** + **Vite 6**
- **CSS custom properties** — single global stylesheet (`src/index.css`), `nhds-` prefix
- **Google Fonts** — Fraunces (display serif), Inter (body), JetBrains Mono (mono/labels)
- **GitHub Pages** via `gh-pages`

---

## Design

Dark editorial aesthetic: deep charcoal backgrounds, warm tan text, calmed blue accent (`#6FA6D6`), rust accent (`#B86A47`).

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-0` | `#14171C` | page frame |
| `--bg-1` | `#1C2027` | primary sections |
| `--bg-2` | `#222831` | cards / panels |
| `--fg-1` | `#F1E6D0` | headings |
| `--fg-2` | `#DFD0B8` | body text |
| `--blue` | `#6FA6D6` | accent, links |
| `--rust` | `#B86A47` | accent, gradients |

### Animations

- Two ambient aurora blobs (fixed, blurred, slow-floating)
- Hero headline lines slide up on load; name gradient shifts continuously
- Floating pill navbar slides down on load
- Scroll-reveal: sections fade + translate up when they enter the viewport (`IntersectionObserver`, `useScrollReveal` hook)
- Project cards track the mouse cursor with a radial glow (`--mx` / `--my` CSS vars)
- Portrait photo card tilted −1.5° at rest, straightens and scales on hover
- Certifications grid: bottom-line sweep reveals on hover
- Contact email: underline retracts on hover

---

## Sections

| # | Section | Notes |
|---|---------|-------|
| 1 | Hero | Fraunces headline, portrait card, marquee tech strip |
| 2 | About | Serif lede + 2×2 stat grid |
| 3 | Journey | Side-by-side timeline (Experience + Education) |
| 4 | Projects | Asymmetric 6-col grid with magnetic glow |
| 5 | Skills | Grouped cards with gradient progress bars |
| 6 | Certifications | Borderless mosaic grid |
| 7 | Contact | Large italic CTA, pill social links, footer |

---

## Getting started

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build      # production build → dist/
npm run deploy     # build + push to gh-pages branch
```

---

## Project structure

```
src/
  components/
    Navbar.jsx          # Floating pill nav
    Home.jsx            # Hero section + marquee
    About.jsx           # Lede + stats grid
    Experience.jsx      # Combined exp + education timeline
    Projects.jsx        # Magnetic project cards
    Skills.jsx          # Progress bar skill groups
    Certifications.jsx  # Mosaic cert grid
    Contact.jsx         # CTA + footer
  hooks/
    useScrollReveal.js  # IntersectionObserver scroll animations
  index.css             # All styles (nhds- prefix)
  App.jsx
  main.jsx
public/
  profile.jpeg
  nh-logo.svg
```
