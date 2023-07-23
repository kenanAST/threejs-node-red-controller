import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Cafe } from "./assets/models/Cafe.jsx";
import Slider from "@mui/material/Slider";
import Chart from "react-apexcharts";

const App = () => {
  const [bulbs, setBulbs] = useState([
    { bulb_id: 1, strength: 1, status: true },
  ]);

  //All Bulb updates
  // const handleBulbUpdate = (bulb_id, event) => {
  //   const updatedBulbs = bulbs.map((bulb) => {
  //     return bulb.bulb_id === bulb_id
  //       ? { ...bulb, strength: event.target.value / 100 }
  //       : bulb;
  //   });
  //   setBulbs(updatedBulbs);
  // };

  //Temporary Single Bulb Update
  const handleBulbUpdate = (bulb_id, event) => {
    const newBulb = bulbs[0];
    newBulb.strength = event.target.value / 100;
    const updatedBulbs = [];
    updatedBulbs.push(newBulb);
    setBulbs(updatedBulbs);
  };

  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: "series-1",
        data: [],
      },
    ],
    colors: ["#F44336", "#FFFFFF", "#9C27B0"],
  });

  const getCurrentTimeStamp = () => {
    // Create a new Date object
    const now = new Date();

    // Get the current minute and second
    const currentMinute = now.getMinutes();
    const currentSecond = now.getSeconds();

    // Format the values to ensure leading zeros for single-digit numbers
    const formattedMinute = String(currentMinute).padStart(2, "0");
    const formattedSecond = String(currentSecond).padStart(2, "0");

    // Concatenate the minute and second with a colon separator
    const currentTime = `${formattedMinute}:${formattedSecond}`;

    // Return the result
    return currentTime;
  };

  const SECOND_MS = 1000;
  const [time, setTime] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeStamps = time;
      newTimeStamps.push(getCurrentTimeStamp());
      setTime(newTimeStamps);

      const newData = data;
      newData.push(Math.round(bulbs[0].strength * 220));
      setData(newData);

      const newState = {
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: newTimeStamps,
          },
        },
        series: [
          {
            name: "series-1",
            data: newData,
          },
        ],
        colors: ["#F44336", "#FFFFFF", "#9C27B0"],
      };

      setState(newState);
    }, SECOND_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  return (
    <>
      <h1 style={{ paddingTop: "50px", marginBottom: 0, textAlign: "center" }}>
        Threejs & Node Red Control Test
      </h1>

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
          <p>Voltage Timestamp</p>
          <div
            style={{
              backgroundColor: "#1a1919",
            }}
          >
            <Chart
              options={state.options}
              series={state.series}
              color={state.colors}
              type="line"
              width="400"
            />
          </div>
          {bulbs.map((bulb) => {
            return (
              <div key={bulb.bulb_id} style={{ width: "30vw" }}>
                <p>
                  Bulb {bulb.bulb_id} : {Math.floor(bulb.strength * 100)}%
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
    </>
  );
};

export default App;
