# Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my skills in software engineering, data science, and machine learning.

## 🔗 Live Website

**Visit my portfolio:** [https://IsurangaHerath.github.io/My_Portfolio/](https://IsurangaHerath.github.io/My_Portfolio/)

---

## ✨ Features

- **Hero section** with animated typing roles and mouse glow effect
- **About** — bio, stats, and learning journey
- **Education** — university, A/L & O/L, diplomas, and achievements
- **Skills** — categorized skill set (Languages, Frameworks, AI/ML, Tools)
- **Projects** — detailed project cards with rich modal previews
- **Certifications** — 15+ certifications showcase
- **Contact form** powered by EmailJS
- **Theme toggle** (light/dark) with scroll progress and back-to-top buttons
- Fully responsive, accessible UI components built on Radix UI

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Environment Variables

Create a `.env` file from the `.env.example` template with your EmailJS credentials to enable the contact form:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

These are injected at build time by the deployment workflow (see `.github/workflows/deploy.yml`).

---

## 🚢 Deployment

Deployment to GitHub Pages is fully automated with GitHub Actions. Pushing to the `main` branch triggers the workflow, which builds the project and publishes the `build/` output to GitHub Pages. No manual deploy step required.

---

## 🛠️ Tech Stack

- **React** + **TypeScript** — frontend and type safety
- **Vite** — build tool and dev server
- **Radix UI** — accessible, headless components
- **Framer Motion** — animations
- **Recharts** — data visualization charts
- **lucide-react** — icons
- **next-themes** — theme switching
- **EmailJS** — contact form delivery
- **CSS** — custom styling with Google Fonts

---

## 📂 Project Structure

```
├── .github/workflows/   # GitHub Pages deploy workflow
├── public/              # Static assets (images, CV)
├── src/
│   ├── components/      # Section components + shadcn/ui primitives
│   ├── constants/       # Centralized portfolio data
│   ├── hooks/           # Custom React hooks
│   ├── services/        # EmailJS service
│   └── styles/          # Global CSS
├── index.html
└── vite.config.ts
```

---

## 📄 License

This project is for personal use.

---

Built with ❤️ by Isuranga Herath