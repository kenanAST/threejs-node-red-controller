import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Canvas></Canvas>
  </>
);
