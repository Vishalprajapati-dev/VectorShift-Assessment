// databaseNode.js

import { BaseNode } from "../components/BaseNode";

export const DatabaseNode = ({ id }) => {
  return (
    <BaseNode
      title="Database"
      inputs={[
        {
          id: `${id}-query`,
        },
      ]}
      outputs={[
        {
          id: `${id}-data`,
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
        Executes a database query and returns data.
      </div>
    </BaseNode>
  );
};