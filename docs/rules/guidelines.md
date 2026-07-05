# Project Rules & Conventions

This project follows the **Jeromy Engineering Conventions** as defined in the agent skills.

## Core Rules

### 1. TypeScript Coding Standards
- **Strict Typing**: No `any`. Use interfaces and unions.
- **Pure Functions**: Business logic must reside in `src/domain/logic/` as pure functions.
- **Zod Validation**: Use Zod for any external data input (future).

### 2. React / Frontend Standards
- **Component Decomposition**: Keep components small and focused.
- **Theming**: Use CSS variables in `globals.css` for consistent styling.
- **Accessibility**: Ensure ARIA labels and semantic HTML are used.

### 3. Git Workflow
- **Branching**: Follow the Jeromy Git workflow (Features branches, Pull Requests).
- **Commits**: Clear, descriptive commit messages.

## Reference to Agent Skills
For detailed instructions, refer to the following skill documentation (Internal):
- [Baseline Conventions](../../.agent/skills/conventions/SKILL.md)
- [TypeScript Conventions](../../.agent/skills/typescript-conventions/SKILL.md)
- [React Conventions](../../.agent/skills/react-conventions/SKILL.md)
