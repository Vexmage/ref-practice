export default function DemoCard({ title, summary, takeaway, children }) {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #d6d6d6",
        borderRadius: "12px",
        padding: "1.25rem",
        marginBottom: "1.5rem",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.06)"
      }}
    >
      <h2 style={{ marginTop: 0 }}>{title}</h2>

      <p>{summary}</p>

      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        {children}
      </div>

      <div
        style={{
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          padding: "0.9rem",
          border: "1px solid #e2e2e2"
        }}
      >
        <strong>Key takeaway:</strong> {takeaway}
      </div>
    </section>
  );
}