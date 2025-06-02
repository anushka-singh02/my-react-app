import React from "react";
import reactDom from "react-dom/client";

const root= document.querySelector("#root");
const rootElement = reactDom.createRoot(root);

rootElement.render(<h1>Hey there! Great to see you.</h1>);