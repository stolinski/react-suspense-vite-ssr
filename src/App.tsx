import React, { useState, Suspense, lazy, Fragment } from "react";
import logo from "./logo.svg";
import "./App.scss";

let TestLazy;
let SuspenseTwo = Suspense;

if (import.meta.env.SSR) {
  // ... server only logic
  SuspenseTwo = Fragment;
}

if (!import.meta.env.SSR) {
  // ...  client only logic
  console.log("hi");
  TestLazy = lazy(() => import("./TestLazy"));
}

export async function setup() {
  if (import.meta.env.SSR) {
    const transport = await import("./TestLazy");
    TestLazy = transport.default;
  }
}
export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <SuspenseTwo fallback={null}>
          <TestLazy />
        </SuspenseTwo>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Yoz</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}
