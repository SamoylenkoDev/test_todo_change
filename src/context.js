import React from "react";

const Store = React.createContext({
  todos: [
    "Learn HTML and CSS",
    "Learn JavaScript(ES6+)",
    "Design with Figma",
    "Develop applications with 'React' and 'Material-UI'"
  ],
  myTheme: "light",
  complete: ["Go to work", "Lunch"]
});

export default Store;
