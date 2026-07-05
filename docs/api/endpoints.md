# API Documentation

The Study Configurator is designed as a Frontend-First application. While it currently uses mock data, the API interfaces are predefined to support a seamless backend integration.

## Base URL
`https://api.studyconfigurator.jeromy.ch/v1` (Draft)

## Endpoints

### 1. Catalog API
Retrieve the full study catalog.
- **Path**: `GET /catalog`
- **Response**: `Catalog` object (JSON).

### 2. Validation API
Validate a set of selected modules.
- **Path**: `POST /validate`
- **Body**: `{ selectedModuleIds: string[] }`
- **Response**: `{ status: 'ok' | 'error', missingRequirements: Requirement[] }`

## Future Integration: Strangler-Fig Pattern
As part of the migration from the legacy Java system, the new API will gradually replace the direct database access of the old stack.
