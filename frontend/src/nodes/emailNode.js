import { BaseNode } from "../components/BaseNode";

export const EmailNode = ({ id }) => {
  return (
    <BaseNode
      title="Email"
      inputs={[
        { id: `${id}-message` },
      ]}
      outputs={[
        { id: `${id}-status` },
      ]}
    >
      <div
        style={{
          fontSize: "14px",
          color: "#555",
          lineHeight: "1.5",
        }}
      >
        Sends an email and returns delivery status.
      </div>
    </BaseNode>
  );
};