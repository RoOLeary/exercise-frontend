/* JS goes here */
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/components/App";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);