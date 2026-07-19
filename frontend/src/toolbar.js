// toolbar.js

import { DraggableNode } from "./draggableNode";
import {
  FaKeyboard,
  FaRobot,
  FaFileAlt,
  FaArrowRight,
  FaCloud,
  FaDatabase,
  FaEnvelope,
  FaClock,
  FaFilter,
} from "react-icons/fa";

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        padding: "18px 30px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <h2
        style={{
          margin: 0,
          marginBottom: 18,
          color: "#1e293b",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        Pipeline Builder
      </h2>

      <div
        style={{
          display: "flex",
          gap: "14px",
          flexWrap: "wrap",
        }}
      >
        <DraggableNode type="customInput" label="Input" icon={<FaKeyboard />} />

        <DraggableNode type="llm" label="LLM" icon={<FaRobot />} />

        <DraggableNode type="text" label="Text" icon={<FaFileAlt />} />

        <DraggableNode
          type="customOutput"
          label="Output"
          icon={<FaArrowRight />}
        />
        <DraggableNode type="api" label="API" icon={<FaCloud />} />
        <DraggableNode type="database" label="Database" icon={<FaDatabase />} />
        <DraggableNode type="email" label="Email" icon={<FaEnvelope />} />
        <DraggableNode type="delay" label="Delay" icon={<FaClock />} />
        <DraggableNode type="filter" label="Filter" icon={<FaFilter />} />
      </div>
    </div>
  );
};
