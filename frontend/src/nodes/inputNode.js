// inputNode.js

import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_"),
  );

  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <BaseNode
      title="Input"
      outputs={[
        {
          id: `${id}-value`,
        },
      ]}
    >
      <label
        style={{
          fontSize: "14px",
          fontWeight: "600",
          color: "#374151",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        Name
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          style={{
            width: "100%",
            marginTop: 8,
            padding: "10px 12px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            outline: "none",
            fontSize: "14px",
            boxSizing: "border-box",
            transition: "all .2s ease",
          }}
        />
      </label>

      <label
        style={{
          fontSize: "14px",
          fontWeight: "600",
          color: "#374151",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        Type
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          style={{
            width: "100%",
            marginTop: 8,
            padding: "10px 12px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            fontSize: "14px",
            outline: "none",
            cursor: "pointer",
            boxSizing: "border-box",
          }}
        >
          <option>Text</option>
          <option>File</option>
        </select>
      </label>
    </BaseNode>
  );
};
