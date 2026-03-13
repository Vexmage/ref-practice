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
    <div
      style={{
        padding: "2rem",
        fontFamily: "sans-serif",
        lineHeight: "1.6",
        maxWidth: "900px",
        margin: "0 auto"
      }}
    >
      <h1>React Ref Practice Lab</h1>

      <p>
        This small app demonstrates how a parent component can interact with a
        child component using <strong>useRef</strong>,{" "}
        <strong>forwardRef</strong>, and{" "}
        <strong>useImperativeHandle</strong>.
      </p>

      <p>
        In normal React architecture, data usually flows downward through props,
        and child components communicate upward through callbacks. This app
        shows a more special-case pattern: a parent using a ref to call a method
        that the child deliberately exposes.
      </p>

      <div
        style={{
          backgroundColor: "#f4f4f4",
          padding: "1rem",
          borderRadius: "8px",
          border: "1px solid #ddd",
          marginBottom: "2rem"
        }}
      >
        <h2 style={{ marginTop: 0 }}>What this app demonstrates</h2>

        <p>
          <strong>useRef</strong>: creates a persistent reference object in the
          parent.
        </p>

        <p>
          <strong>forwardRef</strong>: allows a child function component to
          receive a ref from its parent.
        </p>

        <p>
          <strong>useImperativeHandle</strong>: lets the child decide what
          methods or values the parent can access through that ref.
        </p>

        <p style={{ marginBottom: 0 }}>
          In short: the parent holds a ref, the child accepts it, and the child
          exposes a small public interface through that ref.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#fff8e1",
          padding: "1rem",
          borderRadius: "8px",
          border: "1px solid #e6d28f",
          marginBottom: "2rem"
        }}
      >
        <h2 style={{ marginTop: 0 }}>Normal React flow vs this demo</h2>

        <p>
          <strong>Normal React flow:</strong> state -&gt; props -&gt; render
        </p>

        <p>
          <strong>This demo:</strong> parent ref -&gt; child exposed method
          -&gt; child action
        </p>

        <p style={{ marginBottom: 0 }}>
          This pattern is usually considered an <em>escape hatch</em>. It is
          useful for cases like focusing inputs, controlling media players,
          triggering animations, or resetting child components.
        </p>
      </div>

      <hr style={{ margin: "2rem 0" }} />

      <section style={{ marginBottom: "2rem" }}>
        <h2>Example 1 — Parent calling methods in a child</h2>

        <p>
          In this example, the child component exposes two methods:
          <code> changeMessageFromParent() </code>
          and
          <code> resetMessage() </code>.
        </p>

        <p>
          Clicking the buttons below causes the parent to call those methods
          through a ref. The child then updates its own internal state.
        </p>

        <button onClick={handleCallChild} style={{ marginRight: "0.5rem" }}>
          Change child from parent
        </button>

        <button onClick={handleResetChild}>Reset child</button>

        <ChildBox ref={childRef} />
      </section>

      <hr style={{ margin: "2rem 0" }} />

      <section>
        <h2>Example 2 — Parent focusing an input inside a child</h2>

        <p>
          This is one of the most common real-world uses of{" "}
          <code>forwardRef</code>. The child contains an input element and
          exposes a <code>focusInput()</code> method.
        </p>

        <p>
          When the parent button is clicked, the parent calls that method
          through the ref, and the child focuses its internal input element.
        </p>

        <button onClick={handleFocusInput}>Focus child input</button>

        <FocusInput ref={inputRef} />
      </section>
    </div>
  );
}

export default App;