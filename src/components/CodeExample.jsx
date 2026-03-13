export default function CodeExample({ title, code }) {
  return (
    <div
      style={{
        marginTop: "1rem",
        backgroundColor: "#111827",
        color: "#f9fafb",
        borderRadius: "10px",
        padding: "1rem",
        overflowX: "auto",
        border: "1px solid #374151"
      }}
    >
      {title && (
        <h3 style={{ marginTop: 0, marginBottom: "0.75rem", fontSize: "1rem" }}>
          {title}
        </h3>
      )}

      <pre
        style={{
          margin: 0,
          whiteSpace: "pre-wrap",
          fontFamily: "Consolas, Monaco, 'Courier New', monospace",
          fontSize: "0.95rem"
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}