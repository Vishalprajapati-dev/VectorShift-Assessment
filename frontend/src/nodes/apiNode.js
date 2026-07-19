// apiNode.js

import { BaseNode } from "../components/BaseNode";

export const ApiNode = ({ id }) => {
  return (
    <BaseNode
      title="API"
      inputs={[
        {
          id: `${id}-request`,
        },
      ]}
      outputs={[
        {
          id: `${id}-response`,
        },
      ]}
    >
      <div
        style={{
          fontSize: "14px",
          color: "#555",
          lineHeight: "1.5",
        }}
      >
        Sends an API request and returns a response.
      </div>
    </BaseNode>
  );
};