import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () {alert('Hello')}} // puedo enviar funciones tambien por js
    />

    <UserCard
    name="Matias Suarez"
    amout={1000}
    married={false}
    points={[22,45]}
    address={{
        street:"Av Sarmiento",
        city:"New York"
    }}
    />
  </>
);
