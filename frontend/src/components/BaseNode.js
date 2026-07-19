// BaseNode.js

import { Handle, Position } from "reactflow";

export const BaseNode = ({
  title,
  children,
  inputs = [],
  outputs = [],
  style = {},
}) => {
  return (
    <div
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 18px 35px rgba(37,99,235,.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,.08)";
      }}
      style={{
        minWidth: 260,
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "14px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        overflow: "hidden",
        position: "relative",
        transition: "all .25s ease",
        cursor: "pointer",
        ...style,
      }}
    >
      {/* Left Handles */}
      {inputs.map((handle, index) => (
        <Handle
          key={handle.id}
          type="target"
          position={Position.Left}
          id={handle.id}
          style={{
            top:
              inputs.length === 1
                ? "50%"
                : `${((index + 1) * 100) / (inputs.length + 1)}%`,
            background: "#2563eb",
            width: 14,
            height: 14,
            border: "2px solid white",
          }}
        />
      ))}

      {/* Right Handles */}
      {outputs.map((handle, index) => (
        <Handle
          key={handle.id}
          type="source"
          position={Position.Right}
          id={handle.id}
          style={{
            top:
              outputs.length === 1
                ? "50%"
                : `${((index + 1) * 100) / (outputs.length + 1)}%`,
            background: "#16a34a",
            width: 14,
            height: 14,
            border: "2px solid white",
          }}
        />
      ))}

      {/* Header */}
      <div
        style={{
          background: "#2563eb",
          color: "#ffffff",
          padding: "12px 16px",
          fontWeight: 600,
          fontSize: "16px",
          letterSpacing: "0.3px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {title}
      </div>

      {/* Body */}
      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {children}
      </div>
    </div>
  );
};
