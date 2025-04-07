# 🐎 Horse Racing Game – Insider Front-End Case Study

An animated, state-driven horse racing simulation built with Vue 3, Vuex, TypeScript, Tailwind CSS, and tested with Cypress & Vitest.

> This project was created as part of a front-end case study. It demonstrates Vue state management, component-driven design, animations, and example unit and E2E tests.

---

## 🚀 Live Demo

🌐 https://horse-racing-game-seven.vercel.app/

---

## 🧰 Tech Stack

- ✅ Vue 3 + TypeScript
- ✅ Vite
- ✅ Vuex 4
- ✅ Tailwind CSS
- ✅ Vitest (Unit Testing)
- ✅ Cypress (E2E Testing)
- ✅ GitHub Actions (CI Pipeline for Cypress)
- ✅ Vercel (Deployment)

---

## 🧠 Architecture Overview

```bash
src/
├── features/             # Feature-based modular structure
│   ├── horses/           # Horse logic
│   │    └── components/
│   │    └── composables/
│   │    └── store/
│   │    └── tests/
│   │    └── types/ 
│   └── race/             # Race engine, state, animations, results
├── components/           # Global reusable components (if needed)
├── pages/                # Route-based views (GamePage.vue)
├── store/                # Vuex setup and module registry
├── router/               # Vue Router config
├── layouts/              # Optional layout wrappers (if needed)
├── assets/               # Global styles (Tailwind)
└── main.ts               # App entry point
````

## 🎮 Features

🔄 Generates a race schedule (6 rounds, 10 horses each)
🧠 Centralized state using Vuex (horses, race, results)
🏁 Horse races are animated and condition-based
📊 Round-by-round race results
🧪 Unit test example for Horse module
✅ E2E test for Race Schedule functionality using Cypress
🔄 CI/CD integration via GitHub Actions for E2E testing

## 📸 Screenshot

![Screenshot 2025-04-07 at 12 35 02](https://github.com/user-attachments/assets/b4438edf-3cc9-4edd-b737-654040a1bc9e)


## 🧪 Run Tests

✅ Unit Tests

```bash
npm run test
```

✅ E2E Tests (Cypress)
```bash
npm run dev      # in one terminal
npx cypress open # in another terminal
```

## ⚙️ Dev Setup

```bash 
npm install
npm run dev
```

## 📦 Build & Deploy

```bash 
npm run build
# Output: dist/
```
Deployed via Vercel -> https://horse-racing-game-seven.vercel.app/

## 👤 Author
Mehmet Arif Şahin
[GitHub](https://github.com/MArifSahin)
[LinkedIn](https://www.linkedin.com/in/mehmet-arif-sahin/)





