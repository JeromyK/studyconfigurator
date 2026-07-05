# Study Configurator (Modernized)

Der **Study Configurator** ist eine moderne, Web-basierte Anwendung zur Planung und Verwaltung von Studiengängen. Ursprünglich als Java/Swing-Applikation entwickelt, wurde das Projekt in einen modernen **Next.js 15 / TypeScript** Stack migriert.

## Hauptfunktionen (Web-First)

- **Interaktive Studienplanung**: Echtzeit-Berechnung von ECTS-Punkten und Fortschrittsanzeige.
- **Voraussetzungsmanagement**: Automatische Prüfung von Modulabhängigkeiten direkt in der UI.
- **Premium Design**: Modernes Glassmorphism-Design mit Dark Mode Unterstützung.
- **Clean Architecture**: Saubere Trennung zwischen Geschäftslogik (Domain) und UI (Presentation).

## Dokumentation
Detaillierte Informationen zur Architektur, den Datenmodellen und Architekturentscheidungen findest du im [docs/](./docs/README.md) Verzeichnis.

- [Architektur-Übersicht](./docs/architecture/overview.md)
- [Datenmodell](./docs/data-model/entities.md)
- [Regeln & Konventionen](./docs/rules/guidelines.md)
- [ADRs (Architecture Decision Records)](./docs/adrs/0001-migration-to-nextjs.md)

## Installation & Ausführung

### Voraussetzungen
- [Node.js](https://nodejs.org/) (v18+)
- npm oder yarn

### Starten der Entwicklungsumgebung
```bash
npm install
npm run dev
```
Die Anwendung ist dann unter `http://localhost:3000` erreichbar.

### Produktions-Build
```bash
npm run build
npm run start
```

## Legacy Java Projekt
Der ursprüngliche Java-Quellcode befindet sich im Verzeichnis `/legacy-java`. Die Dokumentation zur Java-Version ist dort ebenfalls hinterlegt.

---
*Entwickelt als Teil der Jeromy Engineering Initiative.*
