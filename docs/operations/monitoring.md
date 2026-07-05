# Monitoring & Observability

This project uses **Sentry.io** as its primary error tracking and performance monitoring tool.

## Sentry Integration

### 1. Error Tracking
- **Client-side**: Captures unhandled exceptions, React Error Boundary triggers, and failed fetch requests.
- **Server-side**: Monitors API route failures and Next.js SSR/ISR errors.
- **Environment Tracking**: Errors are tagged with `production`, `staging`, or `development` to ensure clear separation.

### 2. Performance Monitoring
- Tracks core web vitals (LCP, FID, CLS).
- Monitors the performance of expensive domain logic calculations (e.g., ECTS-summation for large catalogs).

### 3. Debugging with Agent Skills
This repository is optimized for the **`sentry-debug`** agent skill. If an issue is reported in Sentry, the agent can:
- Automatically retrieve the stack trace.
- Compare it with the local source code.
- Propose a fix based on the exact error context.

## Logging Guidelines
- **No PII**: Ensure no Personally Identifiable Information (emails, names) is sent to Sentry.
- **Breadcrumbs**: Use Sentry breadcrumbs to log significant user actions (e.g., "Module Selected", "ECTS Target Achieved") to aid in reproduction.

## Alerting
- Critical production errors are routed to the `#study-configurator-alerts` Slack channel.
