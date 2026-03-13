import { forwardRef, useImperativeHandle, useRef } from "react";

const FocusInput = forwardRef(function FocusInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current?.focus();
    }
  }));

  return (
    <div
      style={{
        border: "2px solid #4a90e2",
        padding: "1rem",
        marginTop: "1rem",
        borderRadius: "6px"
      }}
    >
      <h2>Focus Input Child</h2>

      <input
        ref={inputRef}
        placeholder="Click the parent button to focus me"
        style={{ padding: "0.5rem", width: "100%" }}
      />
    </div>
  );
});

export default FocusInput;