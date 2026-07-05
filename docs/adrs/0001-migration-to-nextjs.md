# ADR 0001: Migration to Next.js (TypeScript)

## Status
Accepted

## Context
The original study configurator was implemented as a Java/Swing desktop application. Java/Swing is considered legacy for modern interactive user interfaces. The goal is to move to a web-based platform to increase accessibility and provide a modern UX.

## Decision
We migrated the project to **Next.js 15 (App Router)** using **TypeScript**.

## Rationale
- **Web-First**: The requirement "Web-First" is best met by a modern framework like Next.js.
- **Type Safety**: TypeScript allows us to port the complex Java class hierarchies with high reliability.
- **Performance**: Next.js provides server-side rendering and static site generation, ensuring fast load times.
- **Modern UI**: React enables the implementation of advanced UI patterns like Glassmorphism and interactive real-time ECTS calculations.

## Consequences
- **Positive**:
    - Significantly improved developer experience.
    - Responsive design for mobile and desktop.
    - Easy integration with modern CI/CD pipelines.
- **Negative**:
    - The team needs to be familiar with the React ecosystem.
    - Build process is more complex than a simple JAR build.
