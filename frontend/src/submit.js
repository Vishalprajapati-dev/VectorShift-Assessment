// submit.js

import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes: nodes.map((node) => ({
            id: node.id,
          })),
          edges: edges.map((edge) => ({
            source: edge.source,
            target: edge.target,
          })),
        }),
      });

      const result = await response.json();

      alert(
        `Pipeline Analysis

Nodes: ${result.num_nodes}
Edges: ${result.num_edges}
Is DAG: ${result.is_dag ? "Yes ✅" : "No ❌"}`,
      );
    } catch (error) {
      console.error(error);

      alert("Unable to connect to backend.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "12px 28px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "15px",
          fontWeight: "600",
        }}
      >
        Submit Pipeline
      </button>
    </div>
  );
};
