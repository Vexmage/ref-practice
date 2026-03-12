import { useRef } from "react";
import ChildBox from "./components/ChildBox";

function App() {
  const childRef = useRef(null);

  const handleCallChild = () => {
    childRef.current?.changeMessageFromParent();
  };

  const handleResetChild = () => {
    childRef.current?.resetMessage();
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>React Ref Practice Lab</h1>

      <p>This is the parent component.</p>

      <button onClick={handleCallChild} style={{ marginRight: "0.5rem" }}>
        Change child from parent
      </button>

      <button onClick={handleResetChild}>
        Reset child
      </button>

      <ChildBox ref={childRef} />
    </div>
  );
}

export default App;