// textNode.js

import { useMemo, useState } from "react";
import { BaseNode } from "../components/BaseNode";
import { extractVariables } from "../utils/textParser";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");

  const variables = useMemo(() => {
    return extractVariables(text);
  }, [text]);

  return (
    <BaseNode
      title="Text"
      style={{
        width: Math.min(Math.max(text.length * 8, 260), 520),
      }}
      inputs={variables.map((variable) => ({
        id: `${id}-${variable}`,
      }))}
      outputs={[
        {
          id: `${id}-output`,
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
          gap: "8px",
        }}
      >
        Text
        <textarea
          placeholder="Type here... Use {{variable}} to create inputs."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
          rows={3}
          style={{
            width: "100%",
            minHeight: "90px",
            resize: "vertical",
            padding: "10px",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            fontSize: "14px",
            lineHeight: "1.5",
            fontFamily: "inherit",
            boxSizing: "border-box",
          }}
        />
      </label>
    </BaseNode>
  );
};
