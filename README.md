# User Auth Screens ReactJS

A modern, responsive user authentication system built with React, TypeScript, and Tailwind CSS.

## Features

- **Login & Signup Forms** - Clean, professional authentication screens
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **TypeScript** - Full type safety and better development experience
- **Tailwind CSS** - Custom Amazon-inspired design system
- **React Router** - Client-side routing
- **Production Ready** - Clean, optimized codebase

## Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **pnpm** - Fast, disk space efficient package manager

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd user-auth-screens-reactjs
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── components/auth/          # Authentication components
│   ├── book/                # Text content and labels
│   ├── components/forms/     # Login & Signup forms
│   ├── interfaces/          # TypeScript interfaces
│   ├── pages/              # Auth page component
│   ├── utils/              # Form handlers
│   └── validations/        # Form validation logic
├── shared/                 # Shared components
│   ├── book/              # Shared text content
│   └── layouts/           # Navbar, Footer, Layout
├── app/                   # Main App component
├── routes/                # React Router configuration
├── index.ts               # Centralized exports
├── index.css              # Tailwind CSS imports
└── main.tsx               # Application entry point
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
