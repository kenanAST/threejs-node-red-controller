import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Model } from "./assets/models/Model.jsx";
import { Drone } from "./assets/models/Drone.jsx";
import { OrbitControls } from "@react-three/drei";
import { Room } from "./assets/models/Room.jsx";
import { Cafe } from "./assets/models/Cafe.jsx";
import { SelectiveBloom, EffectComposer } from "@react-three/postprocessing";
import Slider from "@mui/material/Slider";

const App = () => {
  const [bulbs, setBulbs] = useState([
    { bulb_id: 1, strength: 1, status: true },
    { bulb_id: 2, strength: 1, status: true },
    { bulb_id: 3, strength: 1, status: true },
  ]);

  const handleBulbUpdate = (bulb_id, event) => {
    const updatedBulbs = bulbs.map((bulb) => {
      return bulb.bulb_id === bulb_id
        ? { ...bulb, strength: event.target.value / 100 }
        : bulb;
    });
    setBulbs(updatedBulbs);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ width: "40vw", height: "80vh" }}>
        <Canvas>
          <Cafe bulbs={bulbs} />
          <OrbitControls />
        </Canvas>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "40vw",
          height: "80vh",
          padding: "20px",
        }}
      >
        {bulbs.map((bulb) => {
          return (
            <div key={bulb.bulb_id} style={{ width: "30vw" }}>
              <p>
                Bulb {bulb.bulb_id} : {bulb.strength * 100}%
              </p>
              <Slider
                defaultValue={100}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={(event) => handleBulbUpdate(bulb.bulb_id, event)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
