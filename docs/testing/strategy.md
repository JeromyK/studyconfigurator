# Testing Strategy

This project follows a multi-layered testing approach to ensure reliability of the study configuration logic and a premium user experience.

## 1. Unit Testing (`src/domain/logic/`)
- **Target**: Pure functions in the domain layer.
- **Tool**: [Vitest](https://vitest.dev/) (Recommended).
- **Focus**: ECTS calculations, requirement validation logic, edge cases (0 ECTS, cyclic dependencies).

## 2. Component Testing (`src/presentation/components/`)
- **Target**: Individual React components like `Card`, `Button`.
- **Tool**: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
- **Focus**: Accessibility, state changes (hover/active), prop rendering.

## 3. End-to-End (E2E) & Visual Regression
- **Target**: Critical user flows (selecting a module, achieving ECTS target).
- **Tool**: [Playwright](https://playwright.dev/) + **ForeAI**.
- **Focus**: Cross-browser compatibility, visual consistency of the Glassmorphism UI.

## ForeAI Validation
Before any merge to `main`, the project must pass the **ForeAI Validation**:
- No visual regressions on core UI elements.
- Interaction tests for the "Konfigurator" flow.
