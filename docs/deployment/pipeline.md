# Deployment & CI/CD

The project is optimized for automated deployment cycles.

## Environments

| Environment | URL | Purpose |
| :--- | :--- | :--- |
| **Development** | `localhost:3000` | Local feature development |
| **Preview** | `PR-*.preview.jeromy.ch` | Automated preview for every Pull Request |
| **Staging** | `staging.studyconfigurator.jeromy.ch` | Final QA and stakeholder review |
| **Production** | `study-configurator.jeromy.ch` | Public production environment |

## CI/CD Pipeline (GitHub Actions)

1. **Linting & Types**: `npm run lint` and `tsc`.
2. **Unit Tests**: Run vitest.
3. **Build**: `npm run build`.
4. **Validation**: ForeAI visual regression check.
5. **Deploy**: Automatic deployment to Vercel/Cloud-Infrastructure.
