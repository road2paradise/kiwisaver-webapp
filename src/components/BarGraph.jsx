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

const data = [
  {
    name: "3",
    RetirementYears: 23.286398375476434,
  },
  {
    name: "4",
    RetirementYears: 26.753900142819262,
  },
  {
    name: "6",
    RetirementYears: 33.688903677504996,
  },
  {
    name: "8",
    RetirementYears: 40.62390721219081,
  },
  {
    name: "10",
    RetirementYears: 47.55891074687647,
  },
];

export default class BarGraph extends PureComponent {
  render() {
    return (
      <div className="bar-wrapper">
        <Typography color="secondary" variant="h3" component="h3">
          Years of retirement
        </Typography>
        <BarChart width={700} height={400} data={data}>
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
}
