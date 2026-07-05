# Architecture Overview

## System Context
The Study Configurator is a web-based application designed to help students plan their studies by calculating ECTS and checking module prerequisites. It replaces a legacy Java/Swing desktop application.

## Tech Stack
- **Frontend/Backend**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS (Glassmorphism / Premium Design)
- **Deployment**: Optimized for Vercel/Node.js environments

## Layered Architecture (Clean Architecture)
The project follows a simplified Clean Architecture approach to ensure maintainability and separation of concerns:

### 1. Domain Layer (`src/domain/`)
- Contains pure business logic and type definitions.
- **No dependencies** on external frameworks or UI.
- Responsible for ECTS calculations and requirement validation.

### 2. Presentation Layer (`src/presentation/` & `src/app/`)
- **Components**: Reusable UI atoms (Cards, Buttons).
- **App/Pages**: Interactive views and state management (React Hooks).

### 3. Data & Persistence Layer
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: SQLite (local)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) (Auth.js)

## Design Principles
- **Functional Purity**: Core logic is implemented as pure functions.
- **Type Safety**: Strict TypeScript interfaces for all domain entities and database models.
- **Aesthetics**: Follows modern UI trends (Glassmorphism, Dark Mode).
- **Observability**: Built-in error tracking and performance monitoring via Sentry.io.
