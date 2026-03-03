# Fenrir Security

React-based security scanning dashboard built with React & Vite and Tailwind CSS.

---

## Tech Stack

| Layer      | Technology          |
| ---------- | ------------------- |
| Framework  | React 18            |
| Build Tool | Vite 5              |
| Routing    | React Router DOM v7 |
| Styling    | Tailwind CSS v3     |
| Icons      | Lucide React        |
| Linting    | ESLint 9            |

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

---

## Setup & Installation

**1. Clone the repository**

```bash
git clone https://github.com/shadabsaifi751/fenrir-security-.git
cd fenrir-security
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Available Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start development server     |
| `npm run build`   | Build for production         |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint                   |

---

## Pages & Routes

### ✅ Working Pages

| Route        | Page        | Description                     |
| ------------ | ----------- | ------------------------------- |
| `/`          | Login       | Entry point — sign in screen    |
| `/dashboard` | Dashboard   | Overview of all scans and stats |
| `/scans`     | Scans List  | Overview of all scans and stats |
| `/scans/:id` | Scan Detail | detail page of a single scan    |

### 🚧 Coming Soon (Placeholder)

| Route            | Page          |
| ---------------- | ------------- |
| `/projects`      | Projects      |
| `/schedule`      | Schedule      |
| `/notifications` | Notifications |
| `/settings`      | Settings      |
| `/support`       | Support       |

---

## Project Structure

```
src/
├── components/     # Reusable UI components
├── context/        # React context (theme)
├── lib/            # Utility helpers
├── pages/          # Page-level components
├── mockData.js     # Mock data for development
└── main.jsx        # App entry point
```

---

## Known Limitations

- **Mock data only** — All scan data is static and sourced from `mockData.js`. There is no real backend or API integration.
- **Authentication is not implemented** — The login screen is UI-only; no actual auth logic or token handling exists.
- **Several routes are placeholders** — Projects, Schedule, Notifications, Settings, and Support pages show a "Coming Soon" screen.
- **No persistent state** — Data resets on page refresh as there is no database or local storage integration.
- **Dark/Light theme** — Theme preference is not persisted across sessions.
