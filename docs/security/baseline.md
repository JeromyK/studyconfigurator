# Security Baseline

Security is a core pillar of the Jeromy Engineering culture.

## Principles
- **Least Privilege**: Only request necessary data.
- **Input Sanitization**: All data displayed in the UI is treated as untrusted.
- **HTTPS Only**: Enforced by the deployment infrastructure.

## Data Protection
- This application handles study-related data.
- **No PII** (Personally Identifiable Information) should be stored in the repository or local mock files.
- Real user data (in future) must be encrypted at rest and in transit.

## Authentication & Authorization
- **Implementation**: Google OAuth via **NextAuth.js (Auth.js)**.
- **Isolation**: Each user's study configuration is isolated in the database and linked to their unique `userId`.
- **Role-based Access Control (RBAC)**: Currently supports authenticated users; admin roles are planned for future catalog management.
