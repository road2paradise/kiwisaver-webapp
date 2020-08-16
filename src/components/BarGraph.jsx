import React from "react";
import { Chart } from "react-charts";
function BarGraph() {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [{ x: 1, y: 0 }],
      },
      {
        label: "Series 2",
        data: [{ x: 2, y: 50 }],
      },
      {
        label: "Series 3",
        data: [{ x: 3, y: 30 }],
      },
      {
        label: "Series 4",
        data: [{ x: 4, y: 20 }],
      },
    ],
    []
  );
  const series = React.useMemo(
    () => ({
      type: "bar",
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { position: "left", type: "linear", stacked: false },
    ],
    []
  );
  return (
    <div
      style={{
        width: "400px",
        height: "300px",
      }}
    >
      <Chart data={data} series={series} axes={axes} tooltip />
    </div>
  );
}

export default BarGraph;
