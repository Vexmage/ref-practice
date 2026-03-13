# React Concept Lab
Interactive demonstrations of React concepts


## Concept 1: Refs and imperative handles

A small practice project demonstrating how a parent component can call methods inside a child component using React refs.

This pattern uses three React features:

- useRef

- forwardRef

- useImperativeHandle

The goal of this project is to understand how React allows imperative control of child components when needed.

## Project Structure
src
 ├─ components
 │   └─ ChildBox.jsx
 ├─ App.jsx
 └─ main.jsx

The parent component (App.jsx) holds a reference to the child component (ChildBox.jsx) and calls methods exposed by the child.

## Normal React Data Flow

React usually follows a declarative data flow.

state → props → render

A parent passes data down to a child via props, and the child updates when the parent's state changes.

Example pattern:

Parent state
   ↓
props passed to child
   ↓
child re-renders

This is the preferred way to structure React applications.

## The Problem This Demo Explores

Sometimes a parent needs to trigger behavior directly inside a child component, for example:

focusing an input

resetting a form

triggering an animation

controlling a canvas or media player

React provides a controlled way to do this using refs.

## The Tools Used
### useRef

useRef creates a reference object that persists between renders.

Example:

const childRef = useRef(null);

This ref will later point to the child component instance.

### forwardRef

By default, React does not allow refs to be attached to function components.

forwardRef allows a child component to receive a ref from its parent.

Example:

const ChildBox = forwardRef(function ChildBox(props, ref) {

This gives the child access to the parent's ref.

### useImperativeHandle

useImperativeHandle allows the child to control what the parent can access through the ref.

Example:

useImperativeHandle(ref, () => ({
  changeMessageFromParent() {
    setMessage("Parent called me!");
  },
  resetMessage() {
    setMessage("Child is waiting...");
  }
}));

The parent can now call these methods.

## Parent Component Example

In App.jsx:

const childRef = useRef(null);

const handleCallChild = () => {
  childRef.current?.changeMessageFromParent();
};

This calls a function that lives inside the child component.

## Architecture in This Demo
Parent Component
      │
      │ holds ref
      ▼
Child Component
      │
      │ exposes methods with
      │ useImperativeHandle
      ▼
Child State Updates

## Why This Pattern Exists

React is primarily declarative, but some UI behaviors are inherently imperative.

This pattern acts as an escape hatch for those cases.

Common real-world uses include:

focusing form inputs

controlling video players

interacting with canvas elements

triggering animations

## Running the Project

Install dependencies:

npm install

Run the development server:

npm run dev

Then open the URL shown in the terminal (usually http://localhost:5173).

## Learning Goal

This project exists purely as a practice exercise to understand how React allows a parent component to call methods in a child component using refs.