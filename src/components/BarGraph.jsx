import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Typography from "@material-ui/core/Typography";
import "./css/BarGraph.css";

function BarGraph(props) {
  return (
    <div className="bar-wrapper">
      {console.log(props.data[0])}
      <Typography color="secondary" variant="h3" component="h3">
        Years of retirement
      </Typography>
      <Typography color="secondary" variant="h6" component="h3">
        By just putting a small percentage of your salary aside , see how many
        years of retirements just live on your KiwiSaver account.
      </Typography>
      <BarChart width={700} height={400} data={props.data[0]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          unit="% Contribution"
          dataKey="name"
          value="Pages of my website"
          offset={0}
          position="insideBottom"
        />
        <YAxis
          label={{
            value: "Years Of Retirement",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip />
        <Bar dataKey="RetirementYears" fill="#4caf50" />
      </BarChart>
    </div>
  );
}

export default BarGraph;
