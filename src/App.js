import React, { useState } from "react";
import "./App.css";
import "fontsource-roboto";
import Fade from "react-reveal/Fade";
import Section from "./components/Section";
import PieGraph from "./components/PieGraph";
import KiwiSaverIntro from "./components/KiwisaverIntro";
import BarGraph from "./components/BarGraph";
function App() {
  const getTotalSavingsAt65 = (Salary, Age, CntrbRate, Rate) => {
    if (Age < 18) {
      Age = 18; //if below 18 they dont get paid
    }
    const workingYears = 90 - Age;
    var savingsTotal = 0;
    var savingsFromGov = 0;
    var savingsFromEmployer = 0;
    var savingsFromInvestment = 0;
    const interestRate = 0.03; // investment fund revenue
    const EmployerConstribution = 0.03;
    const tax = 0.175; // tax on investment
    for (var year = 0; year < workingYears; year++) {
      savingsFromInvestment =
        savingsFromInvestment +
        (Salary * CntrbRate + Salary * EmployerConstribution + savingsTotal) *
          (interestRate * (1 - tax));
      savingsTotal =
        (Salary * CntrbRate + Salary * EmployerConstribution + savingsTotal) *
          (1 + interestRate * (1 - tax)) +
        521.43;
      savingsFromGov = savingsFromGov + 521.43;
      savingsFromEmployer =
        savingsFromEmployer + Salary * EmployerConstribution;
    }
    const percentGov = savingsFromGov / savingsTotal;
    const percentEmpl = savingsFromEmployer / savingsTotal;
    const percentInvs = savingsFromInvestment / savingsTotal;
    const necessaryRetirementFunds = 645 * 52 * (90 - 65) * Rate;

    // how much years
    const equivalentRetirementYears = savingsTotal / necessaryRetirementFunds;

    ///////////////////////CHANGED
    return [
      [equivalentRetirementYears, percentEmpl, percentGov, percentInvs],
      [
        savingsTotal,
        savingsFromEmployer,
        savingsFromGov,
        savingsFromInvestment,
      ],
    ];
  };
  const CalculateSavings = (Profession, Age, Region, isPieChartPage) => {
    var Salary = 0;
    var Rate = 0;
    switch (Region) {
      case "Auckland":
        Rate = 1.148439;
        break;
      case "Wellington":
        Rate = 1.093423;
        break;
      case "Canterbury":
        Rate = 0.98146;
        break;
      case "Other South Island":
        Rate = 0.851412;
        break;
      case "Other North Island":
        Rate = 0.8824;
        break;
      default:
        break;
    }
    switch (Profession) {
      case "Advertising, Arts and Media":
        Salary = 71105;
        break;
      case "Design and Architecture":
        Salary = 76379;
        break;

      default:
        break;
    }

    const contributionRates = [0.03, 0.04, 0.06, 0.08, 0.1];
    const arrayForReturn = [0, 0, 0, 0, 0];
    ////////////////////////CHANGED
    const tableData = [0, 0, 0, 0, 0];
    var arrayLength = contributionRates.length;
    for (var i = 0; i < arrayLength; i++) {
      /////////////////////////////CHANGED
      var [calculation, tableStuff] = getTotalSavingsAt65(
        Salary,
        Age,
        contributionRates[i],
        Rate
      );
      var govVal = calculation[2] * 100;
      var empVal = calculation[1] * 100;
      var invVal = calculation[3] * 100;
      var yourVal =
        100 -
        (calculation[2] * 100 + calculation[1] * 100 + calculation[3] * 100);
      if (isPieChartPage) {
        arrayForReturn[i] = [
          { title: "Government Contribution", value: govVal, color: "#E38627" },
          { title: "Employee Contribution", value: empVal, color: "#C13C37" },
          { title: "Return fron Investment", value: invVal, color: "#6A2135" },
          { title: "Your Contribution", value: yourVal, color: "#FBFVBF" },
        ];
        ////////////////////////CHANGED
        tableData[i] = [
          { title: "Savings from Government", value: tableStuff[2] },
          { title: "Savings from Employer", value: tableStuff[1] },
          { title: "Savings from Investment", value: tableStuff[3] },
          {
            title: "Your Savings",
            value:
              tableStuff[0] - (tableStuff[1] + tableStuff[2] + tableStuff[3]),
          },
          { title: "Total Savings", value: tableStuff[0] },
        ];
      } else {
        arrayForReturn[i] = { x: contributionRates[i], y: calculation[0] };
      }
    }
    ///////////////////////////CHANGED
    return [arrayForReturn, tableData];
  };
  const [userInput, setUserInput] = useState(true);
  const [data, setData] = useState(null);
  const handleUserInput = (name, location, age, profession) => {
    console.log(
      CalculateSavings("Advertising, Arts and Media", 20, "Auckland", false)
    );
    //setData(CalculateSavings(profession, age, location, true));
    setUserInput(true);
  };

  return (
    <div className="App">
      <Fade duration={1000}>
        <Section id="section1" type="text" />
      </Fade>
      <div className="section-2">
        <Section
          title="Introducing Hedwig the Owl!"
          id="section-2"
          type="chat-bot"
          callBack={handleUserInput}
        />
      </div>
      {/* Need to add conditional for rendering the next few sections once user input has been given..*/}
      <KiwiSaverIntro />
      <PieGraph />
      <BarGraph />
    </div>
  );
}

export default App;
