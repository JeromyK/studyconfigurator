-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_StudyConfiguration" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Mein Studium',
    "configJson" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "StudyConfiguration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_StudyConfiguration" ("configJson", "createdAt", "id", "updatedAt", "userId") SELECT "configJson", "createdAt", "id", "updatedAt", "userId" FROM "StudyConfiguration";
DROP TABLE "StudyConfiguration";
ALTER TABLE "new_StudyConfiguration" RENAME TO "StudyConfiguration";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
