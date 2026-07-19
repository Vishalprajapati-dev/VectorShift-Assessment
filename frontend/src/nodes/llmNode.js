// llmNode.js

import { BaseNode } from "../components/BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[
        { id: `${id}-system` },
        { id: `${id}-prompt` },
      ]}
      outputs={[
        { id: `${id}-response` },
      ]}
    >
      <div
        style={{
          fontSize: 14,
          color: "#555",
        }}
      >
        This is a Large Language Model.
      </div>
    </BaseNode>
  );
};