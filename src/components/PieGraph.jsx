import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import CollapsibleTable from "./DropdownTable";
import Typography from "@material-ui/core/Typography";
import { PieChart } from "react-minimal-pie-chart";
import "./css/PieGraph.css";

function PieGraph(props) {
  const name = "Kenny";
  const data = [
    [
      {
        title: "Government Contribution",
        value: 4.069309672837944,
        color: "#E38627",
      },
      {
        title: "Employee Contribution",
        value: 16.64738877435945,
        color: "#C13C37",
      },
      {
        title: "Return fron investment",
        value: 62.63591277844286,
        color: "#6A2135",
      },
      {
        title: "Your Contribution",
        value: 16.64738877435974,
        color: "#7ecbcf",
      },
    ],
    [
      {
        title: "Government Contribution",
        value: 10,
        color: "#E38627",
      },
      {
        title: "Employee Contribution",
        value: 20,
        color: "#C13C37",
      },
      {
        title: "Return fron investment",
        value: 20,
        color: "#6A2135",
      },
      {
        title: "Your Contribution",
        value: 50,
        color: "#7ecbcf",
      },
    ],
    [
      {
        title: "Government Contribution",
        value: 5,
        color: "#E38627",
      },
      {
        title: "Employee Contribution",
        value: 10,
        color: "#C13C37",
      },
      {
        title: "Return fron investment",
        value: 30,
        color: "#6A2135",
      },
      {
        title: "Your Contribution",
        value: 55,
        color: "#7ecbcf",
      },
    ],
    [
      {
        title: "Government Contribution",
        value: 44,
        color: "#E38627",
      },
      {
        title: "Employee Contribution",
        value: 12,
        color: "#C13C37",
      },
      {
        title: "Return fron investment",
        value: 5,
        color: "#6A2135",
      },
      {
        title: "Your Contribution",
        value: 39,
        color: "#7ecbcf",
      },
    ],
    [
      {
        title: "Government Contribution",
        value: 20,
        color: "#E38627",
      },
      {
        title: "Employee Contribution",
        value: 50,
        color: "#C13C37",
      },
      {
        title: "Return fron investment",
        value: 15,
        color: "#6A2135",
      },
      {
        title: "Your Contribution",
        value: 15,
        color: "#7ecbcf",
      },
    ],
  ];
  const [percentage, setPercentage] = useState(0);
  const handleChange = (event) => {
    setPercentage(event.target.value);
  };

  if (data === null) {
    return null;
  } else {
    return (
      <>
        <Typography color="secondary" variant="h4" component="h1">
          Hi {name}, Here is your personalised Kiwisaver journey based on the
          information you gave us!
        </Typography>
        <div className="table">
          <CollapsibleTable />
        </div>
        <div className="pie-graph">
          <FormControl component="fieldset">
            <FormLabel component="legend">Your Contribution</FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="0"
              onChange={handleChange}
            >
              <FormControlLabel
                value="0"
                control={<Radio color="primary" />}
                label="3%"
                labelPlacement="3%"
              />
              <FormControlLabel
                value="1"
                control={<Radio color="secondary" />}
                label="4%"
                labelPlacement="4%"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="6%"
                labelPlacement="6%"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="8%"
                labelPlacement="8%"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="10%"
                labelPlacement="10%"
              />
            </RadioGroup>
          </FormControl>
          <PieChart animate={true} reveal={100} data={data[percentage]} />
        </div>
      </>
    );
  }
}
export default PieGraph;
