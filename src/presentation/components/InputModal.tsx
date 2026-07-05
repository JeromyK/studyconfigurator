"use client"

import React, { useState } from "react"

interface InputModalProps {
  title: string
  defaultValue: string
  onConfirm: (value: string) => void
  onCancel: () => void
}

export function InputModal({ title, defaultValue, onConfirm, onCancel }: InputModalProps) {
  const [value, setValue] = useState(defaultValue)

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      backdropFilter: "blur(5px)"
    }}>
      <div style={{
        background: "var(--primary-bg)",
        padding: "2rem",
        borderRadius: "16px",
        border: "1px solid var(--glass-border)",
        width: "90%",
        maxWidth: "400px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
      }}>
        <h3 style={{ marginBottom: "1rem" }}>{title}</h3>
        <input 
          autoFocus
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onConfirm(value)
            if (e.key === "Escape") onCancel()
          }}
          style={{
            width: "100%",
            padding: "0.75rem",
            background: "var(--secondary-bg)",
            border: "1px solid var(--glass-border)",
            borderRadius: "8px",
            color: "var(--text-primary)",
            marginBottom: "1.5rem"
          }}
        />
        <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
          <button onClick={onCancel} style={{ 
            background: "transparent", 
            border: "none", 
            color: "var(--text-secondary)",
            cursor: "pointer"
          }}>
            Abbrechen
          </button>
          <button 
            onClick={() => onConfirm(value)}
            className="button-primary"
            style={{ padding: "0.5rem 1.5rem" }}
          >
            Bestätigen
          </button>
        </div>
      </div>
    </div>
  )
}
