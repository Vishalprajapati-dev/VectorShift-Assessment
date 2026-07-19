import { BaseNode } from "../components/BaseNode";

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      title="Delay"
      inputs={[
        { id: `${id}-input` },
      ]}
      outputs={[
        { id: `${id}-output` },
      ]}
    >
      <div
        style={{
          fontSize: "14px",
          color: "#555",
          lineHeight: "1.5",
        }}
      >
        Delays the execution before passing data.
      </div>
    </BaseNode>
  );
};