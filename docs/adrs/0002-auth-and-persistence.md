# ADR 0002: Authentication and Persistence Layer

## Status
Accepted

## Context
The application initially used static mock data and local state, which did not support multiple users or persistent configurations across sessions. To provide a personalized experience, we needed a way to identify users and store their data.

## Decision
We implemented **NextAuth.js (Auth.js) v5** for authentication and **Prisma** with **SQLite** for persistence.

## Rationale
- **NextAuth.js**: Provides seamless integration with Next.js, supports Google OAuth out of the box, and handles session management securely.
- **Prisma**: A modern ORM that provides type-safety for our database queries, aligning with our TypeScript standards.
- **SQLite**: A file-based database that is easy to set up for local development and small-scale deployments without requiring a dedicated database server.

## Consequences
- **Positive**:
    - Users can now save and load their configurations.
    - Support for multiple users is established.
    - Type-safe database access via Prisma Client.
- **Negative**:
    - Increased complexity in the deployment process (database migrations, environment variables).
    - Dependency on external OAuth provider (Google).
