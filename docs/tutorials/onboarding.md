# Tutorials & Onboarding

## Getting Started
To contribute to the Study Configurator, follow these steps:

1. **Clone the Repo**: Ensure you have access to the Jeromy GitHub.
2. **Setup Node**: Use Node.js v18+.
3. **Install Deps**: `npm install`.
4. **Environment Setup**: Copy `.env.example` to `.env` (or create it) and provide `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and `DATABASE_URL`.
5. **Database Init**: Run `npx prisma migrate dev` to set up the local SQLite database.
6. **Start Dev**: `npm run dev`.

## Adding a New Module
1. Update `src/domain/types.ts` if structure changes.
2. Add the module entry in `src/domain/mockData.ts`.
3. The UI in `src/app/page.tsx` will automatically pick up the new data.

## Writing Logic
- Business logic belongs in `src/domain/logic/`.
- Logic must be **testable** and **pure**.
- Refer to `studyLogic.ts` for examples of ECTS and requirement handling.
