// draggableNode.js

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };

    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );

    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => {
        event.target.style.cursor = "grab";
      }}
      style={{
        cursor: "grab",

        display: "flex",
        alignItems: "center",
        gap: "10px",

        background: "#2563eb",
        color: "white",

        padding: "14px 18px",

        borderRadius: "12px",

        fontWeight: 600,

        fontSize: "15px",

        boxShadow: "0 10px 18px rgba(37,99,235,.22)",

        transition: "all .25s ease",

        userSelect: "none",

        minWidth: "110px",

        justifyContent: "center",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow =
          "0 18px 28px rgba(37,99,235,.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 10px 18px rgba(37,99,235,.22)";
      }}
    >
      <span
        style={{
          fontSize: 18,
          display: "flex",
          alignItems: "center",
        }}
      >
        {icon}
      </span>

      <span>{label}</span>
    </div>
  );
};