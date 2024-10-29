import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  return (
    <div>
      <h1>Componente</h1>
      <p>lorem 123</p>
    </div>
  );
}

root.render(
  <div>
    <Greeting />
    <Greeting />
  </div>
);
