import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello world!</h1>;
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
