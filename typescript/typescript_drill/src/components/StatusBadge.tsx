import React from 'react';

// TODO 1: Add "maintenance" to this Union
export type Status = "idle" | "loading" | "success" | "error";

interface StatusProps {
  state: Status;
}

export const StatusBadge = ({ state }: StatusProps) => {
  // TODO 2: Notice the error on 'config' after you add "maintenance" above.
  // You must add a color and icon for the new status to fix it!
  const config = {
    idle: { color: "#666", icon: "⚪" },
    loading: { color: "#3498db", icon: "🔵" },
    success: { color: "#2ecc71", icon: "🟢" },
    error: { color: "#e74c3c", icon: "🔴" }
  };

  const { color, icon } = config[state as keyof typeof config];

  return (
    <div style={{ color, border: `1px solid ${color}`, padding: '4px 8px', borderRadius: '4px', display: 'inline-block' }}>
      {icon} {state.toUpperCase()}
    </div>
  );
};