import { useRef } from "react";
import ChildBox from "./components/ChildBox";
import FocusInput from "./components/FocusInput";

function App() {
  const childRef = useRef(null);
  const inputRef = useRef(null);

  const handleCallChild = () => {
    childRef.current?.changeMessageFromParent();
  };

  const handleResetChild = () => {
    childRef.current?.resetMessage();
  };

  const handleFocusInput = () => {
    inputRef.current?.focusInput();
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>React Ref Practice Lab</h1>

      <h3>Example 1 — Parent calling child methods</h3>

      <button onClick={handleCallChild} style={{ marginRight: "0.5rem" }}>
        Change child from parent
      </button>

      <button onClick={handleResetChild}>
        Reset child
      </button>

      <ChildBox ref={childRef} />

      <hr style={{ margin: "2rem 0" }} />

      <h3>Example 2 — Parent focusing child input</h3>

      <button onClick={handleFocusInput}>
        Focus child input
      </button>

      <FocusInput ref={inputRef} />
    </div>
  );
}

export default App;