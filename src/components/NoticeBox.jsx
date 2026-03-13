export default function NoticeBox({ items }) {
  return (
    <div
      style={{
        backgroundColor: "#fff7ed",
        border: "1px solid #fed7aa",
        borderRadius: "8px",
        padding: "0.9rem",
        marginTop: "1rem"
      }}
    >
      <strong>What to notice:</strong>

      <ul style={{ marginTop: "0.5rem", paddingLeft: "1.2rem" }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "0.35rem" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}