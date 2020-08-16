import React, { Component } from "react";
import PropTypes from "prop-types";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      location: "",
      age: "",
      profession: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, location, age, profession } = steps;

    this.setState({ name, location, age, profession });
  }

  render() {
    const { name, location, age, profession } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>{location.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
            <tr>
              <td>Profession</td>
              <td>{profession.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;
