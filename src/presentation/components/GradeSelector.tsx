"use client"

import React, { useState } from "react"

interface GradeSelectorProps {
  onSelect: (grade: number) => void
  onCancel: () => void
}

export function GradeSelector({ onSelect, onCancel }: GradeSelectorProps) {
  const [grade, setGrade] = useState(1.0);

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
      zIndex: 1001,
      backdropFilter: "blur(5px)"
    }}>
      <div style={{
        background: "var(--primary-bg)",
        padding: "2rem",
        borderRadius: "16px",
        border: "1px solid var(--glass-border)",
        width: "90%",
        maxWidth: "400px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        textAlign: "center"
      }}>
        <h3 style={{ marginBottom: "2rem" }}>Note festlegen</h3>
        
        <div style={{ fontSize: "4rem", fontWeight: "bold", color: "var(--accent-color)", marginBottom: "1rem" }}>
          {grade.toFixed(1)}
        </div>

        <input 
          type="range" 
          min="1.0" 
          max="6.0" 
          step="0.1" 
          value={grade} 
          onChange={(e) => setGrade(parseFloat(e.target.value))}
          style={{ 
            width: "100%", 
            marginBottom: "2rem",
            accentColor: "var(--accent-color)"
          }}
        />

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "2rem" }}>
          <button 
            onClick={() => setGrade(prev => Math.max(1.0, +(prev - 0.1).toFixed(1)))}
            style={{ padding: "0.5rem 1rem", borderRadius: "8px", border: "1px solid var(--glass-border)", background: "rgba(255,255,255,0.05)", color: "#fff" }}
          >
            -0.1
          </button>
          <button 
            onClick={() => setGrade(prev => Math.min(6.0, +(prev + 0.1).toFixed(1)))}
            style={{ padding: "0.5rem 1rem", borderRadius: "8px", border: "1px solid var(--glass-border)", background: "rgba(255,255,255,0.05)", color: "#fff" }}
          >
            +0.1
          </button>
        </div>

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
            onClick={() => onSelect(grade)}
            className="button-primary"
            style={{ padding: "0.5rem 1.5rem" }}
          >
            Übernehmen
          </button>
        </div>
      </div>
    </div>
  )
}
