"use client"

import React from "react"
import { Card } from "./Card"

interface StudyConfiguration {
  id: string
  name: string
  updatedAt: Date
}

interface StudySelectorProps {
  configs: StudyConfiguration[]
  currentId?: string
  onSelect: (id: string) => void
  onCreate: () => void
  onDelete: (id: string) => void
}

export function StudySelector({ configs, currentId, onSelect, onCreate, onDelete }: StudySelectorProps) {
  return (
    <Card title="Meine Studiengänge">
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {configs.length === 0 && <p style={{ fontSize: "0.85rem", opacity: 0.6 }}>Noch keine Studiengänge gespeichert.</p>}
        {configs.map((config) => (
          <div
            key={config.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.5rem",
              borderRadius: "8px",
              background: config.id === currentId ? "rgba(56, 189, 248, 0.1)" : "transparent",
              border: config.id === currentId ? "1px solid var(--accent-color)" : "1px solid transparent",
              cursor: "pointer",
            }}
            onClick={() => onSelect(config.id)}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.9rem", fontWeight: config.id === currentId ? "bold" : "normal" }}>{config.name}</span>
              <span style={{ fontSize: "0.7rem", opacity: 0.5 }}>{new Date(config.updatedAt).toLocaleDateString()}</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                if (confirm("Studiengang wirklich löschen?")) onDelete(config.id)
              }}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--warning)",
                cursor: "pointer",
                padding: "4px",
                fontSize: "1rem",
              }}
              title="Löschen"
            >
              🗑️
            </button>
          </div>
        ))}
        <button
          onClick={onCreate}
          className="button-primary"
          style={{ marginTop: "0.5rem", fontSize: "0.85rem", padding: "0.5rem" }}
        >
          + Neuer Studiengang
        </button>
      </div>
    </Card>
  )
}
