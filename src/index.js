import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {

  function add(x, y) {
    return x + y;
  }
  const user = {
    firstName: "Julian",
    lastName: "Boxler",
  };
  return (
    <>
      <h1>{user.firstName}</h1>
      <h3>{user.lastName}</h3>
      <h3>{add(20, 20)}</h3>
    </>
  );
}

root.render( //FRAGMENT, si eliminamos la etiqueta nos evitamos el div dentro de otro div, funciona sin tener nada ahora gracias a JSX
  <> 
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />
  </>
);
