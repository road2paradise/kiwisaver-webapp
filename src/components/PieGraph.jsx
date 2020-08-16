import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import CollapsibleTable from "./CollapisbleTable";
import Typography from "@material-ui/core/Typography";
import { PieChart } from "react-minimal-pie-chart";
import "./css/PieGraph.css";

function PieGraph(props) {
  const [percentage, setPercentage] = useState(0);
  const handleChange = (event) => {
    setPercentage(event.target.value);
  };

  if (props.data === null) {
    return null;
  } else {
    return (
      <>
        <Typography color="secondary" variant="h4" component="h1">
          Hi {props.userName}, Here is your personalised Kiwisaver journey based
          on the information you gave us!
        </Typography>
        <div className="table">
          <CollapsibleTable
            data={props.tableData[percentage]}
            percentageData={props.data[percentage]}
          />
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
          <PieChart animate={true} reveal={100} data={props.data[percentage]} />
        </div>
      </>
    );
  }
}
export default PieGraph;
