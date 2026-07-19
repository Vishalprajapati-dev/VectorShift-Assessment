import { BaseNode } from "../components/BaseNode";

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      title="Filter"
      inputs={[
        { id: `${id}-data` },
      ]}
      outputs={[
        { id: `${id}-filtered` },
      ]}
    >
      <div
        style={{
          fontSize: "14px",
          color: "#555",
          lineHeight: "1.5",
        }}
      >
        Filters incoming data based on conditions.
      </div>
    </BaseNode>
  );
};