import { forwardRef, useImperativeHandle, useState } from "react";

const ChildBox = forwardRef(function ChildBox(props, ref) {
  const [message, setMessage] = useState("Child is waiting...");

  useImperativeHandle(ref, () => ({
    changeMessageFromParent() {
      setMessage("Parent called me. React wizardry achieved.");
    },
    resetMessage() {
      setMessage("Child is waiting...");
    }
  }));

  return (
    <div
      style={{
        border: "2px solid #888",
        padding: "1rem",
        marginTop: "1rem",
        borderRadius: "6px"
      }}
    >
      <h2>Child Component</h2>

      <p>{message}</p>

      <button onClick={() => setMessage("Child updated itself!")}>
        Change message from child
      </button>
    </div>
  );
});

export default ChildBox;