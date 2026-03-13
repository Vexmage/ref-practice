import { useRef } from "react";
import ChildBox from "./components/ChildBox";
import FocusInput from "./components/FocusInput";
import DemoCard from "./components/DemoCard";
import NoticeBox from "./components/NoticeBox";
import CodeExample from "./components/CodeExample";

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
        fontFamily: "sans-serif",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        color: "#1f2937"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem",
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          gap: "2rem",
          alignItems: "start"
        }}
      >
        <aside
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #d6d6d6",
            borderRadius: "12px",
            padding: "1.25rem",
            position: "sticky",
            top: "1rem",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.06)"
          }}
        >
          <h2 style={{ marginTop: 0 }}>React Concept Lab</h2>

          <p style={{ fontSize: "0.95rem" }}>
            A small interactive tutorial app for learning React patterns through
            explanation and live demos.
          </p>

          <hr style={{ margin: "1rem 0" }} />

          <h3 style={{ marginBottom: "0.5rem" }}>Concepts</h3>

          <nav>
            <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
              <li style={{ marginBottom: "0.75rem" }}>
                <a href="#overview" style={{ color: "#2563eb", textDecoration: "none" }}>
                  Overview
                </a>
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <a href="#example-1" style={{ color: "#2563eb", textDecoration: "none" }}>
                  Parent calling child methods
                </a>
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <a href="#example-2" style={{ color: "#2563eb", textDecoration: "none" }}>
                  Parent focusing child input
                </a>
              </li>
            </ul>
          </nav>

          <hr style={{ margin: "1rem 0" }} />

          <div style={{ fontSize: "0.95rem" }}>
            <p>
              <strong>Core APIs:</strong>
            </p>
            <p style={{ margin: "0.25rem 0" }}>• useRef</p>
            <p style={{ margin: "0.25rem 0" }}>• forwardRef</p>
            <p style={{ margin: "0.25rem 0" }}>• useImperativeHandle</p>
          </div>
        </aside>

        <main>
          <section
            id="overview"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #d6d6d6",
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.06)"
            }}
          >
            <h1 style={{ marginTop: 0 }}>Refs and Imperative Handles</h1>

            <p>
              This app demonstrates a special React pattern where a parent
              component interacts with a child component through a ref.
            </p>

            <p>
              In normal React architecture, data usually flows downward through
              props, and children communicate upward through callbacks.
            </p>

            <p>
              These examples show an escape hatch: the child deliberately
              exposes a small interface, and the parent uses a ref to call that
              interface.
            </p>

            <div
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "1rem",
                marginTop: "1rem"
              }}
            >
              <p style={{ margin: "0 0 0.5rem 0" }}>
                <strong>Normal React flow:</strong> state → props → render
              </p>
              <p style={{ margin: 0 }}>
                <strong>This demo’s pattern:</strong> parent ref → child exposed
                method → child action
              </p>
            </div>
          </section>

          <div id="example-1">
            <DemoCard
              title="Example 1 — Parent calling methods in a child"
              summary="This example shows a child component exposing methods through useImperativeHandle. The parent holds a ref and calls those methods to trigger changes inside the child."
              takeaway="The parent does not directly mutate the child. Instead, the child deliberately exposes a limited set of methods through the ref."
            >
              <p>
                The child component exposes:
                <code> changeMessageFromParent() </code>
                and
                <code> resetMessage() </code>.
              </p>

              <p>
                Clicking the buttons below makes the parent call those methods.
                The child then updates its own internal state.
              </p>

              <button onClick={handleCallChild} style={{ marginRight: "0.5rem" }}>
                Change child from parent
              </button>

              <button onClick={handleResetChild}>Reset child</button>

              <ChildBox ref={childRef} />

              <h3 style={{ marginTop: "1.5rem" }}>Relevant code</h3>

              <CodeExample
                title="Child component exposing methods"
                code={`const ChildBox = forwardRef(function ChildBox(props, ref) {
  const [message, setMessage] = useState("Child is waiting...");

  useImperativeHandle(ref, () => ({
    changeMessageFromParent() {
      setMessage("Parent called me. React wizardry achieved.");
    },
    resetMessage() {
      setMessage("Child is waiting...");
    }
  }));

  return <div>{message}</div>;
});`}
              />

              <NoticeBox
                items={[
                  "forwardRef allows the child component to receive the parent’s ref.",
                  "useImperativeHandle defines what the parent is allowed to access.",
                  "The child still controls its own state internally."
                ]}
              />

              <CodeExample
                title="Parent calling the child methods"
                code={`const childRef = useRef(null);

const handleCallChild = () => {
  childRef.current?.changeMessageFromParent();
};

const handleResetChild = () => {
  childRef.current?.resetMessage();
};

<ChildBox ref={childRef} />`}
              />

              <NoticeBox
                items={[
                  "useRef creates the reference container.",
                  "childRef.current points to the interface exposed by the child.",
                  "The parent is calling methods intentionally exposed by the child."
                ]}
              />
            </DemoCard>
          </div>

          <div id="example-2">
            <DemoCard
              title="Example 2 — Parent focusing an input inside a child"
              summary="This example shows one of the most common real uses of forwardRef: letting a parent trigger focus on an input that lives inside a child component."
              takeaway="Refs are especially useful for imperative UI actions like focus, scrolling, animation triggers, or media controls."
            >
              <p>
                The child contains an input element and exposes a
                <code> focusInput() </code>
                method.
              </p>

              <p>
                When the button is clicked, the parent calls that method through
                the ref, and the child focuses its internal input.
              </p>

              <button onClick={handleFocusInput}>Focus child input</button>

              <FocusInput ref={inputRef} />

              <h3 style={{ marginTop: "1.5rem" }}>Relevant code</h3>

              <CodeExample
                title="Child component exposing focusInput"
                code={`const FocusInput = forwardRef(function FocusInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current?.focus();
    }
  }));

  return <input ref={inputRef} />;
});`}
              />

              <NoticeBox
                items={[
                  "The child keeps a ref to its internal input element.",
                  "useImperativeHandle exposes a method to the parent.",
                  "The parent can now trigger focus without reaching into the DOM structure itself."
                ]}
              />

              <CodeExample
                title="Parent triggering focus"
                code={`const inputRef = useRef(null);

const handleFocusInput = () => {
  inputRef.current?.focusInput();
};

<FocusInput ref={inputRef} />`}
              />

              <NoticeBox
                items={[
                  "The parent does not manipulate the input directly.",
                  "Instead it calls the method exposed by the child.",
                  "This keeps the child in control of its internal implementation."
                ]}
              />
            </DemoCard>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;