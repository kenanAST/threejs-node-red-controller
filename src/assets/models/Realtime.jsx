import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";

const XAXISRANGE = 86400000;

const ApexChart = () => {
  const [series, setSeries] = useState([
    {
      data: data.slice(),
    },
  ]);

  const [options] = useState({
    chart: {
      id: "realtime",
      height: 350,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Dynamic Updating Chart",
      align: "left",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      range: XAXISRANGE,
    },
    yaxis: {
      max: 100,
    },
    legend: {
      show: false,
    },
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      getNewSeries(lastDate, {
        min: 10,
        max: 90,
      });

      ApexCharts.exec("realtime", "updateSeries", [
        {
          data: data,
        },
      ]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

const domContainer = document.querySelector("#app");
ReactDOM.render(<ApexChart />, domContainer);
