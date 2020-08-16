import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import Owl from "./Images/owl_head.png";
import Typography from "@material-ui/core/Typography";
import ReactTypingEffect from "react-typing-effect";
import Review from "./Review";
import "./css/ChatBoxComponent.css";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Roboto",
  headerBgColor: "#fff",
  headerFontColor: "#4caf50",
  headerFontSize: "10",
  botBubbleColor: "#4caf50",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

function ChatBoxComponent(props) {
  function handleUserInput(values) {
    props.callBack(
      values.values[0],
      values.values[1],
      values.values[2],
      values.values[4]
    );
  }
  return (
    <>
      <Typography
        classes={{ label: "description" }}
        color="secondary"
        variant="h5"
        component="h1"
      >
        {" "}
        <ReactTypingEffect
          className="description"
          speed={80}
          eraseDelay={1000000}
          text="Hoot hoot, it’s Hedwig here. Hooray you one step closer to your dream
          goals, by being curious about how KiwiSaver can help you. Tell me more
          about yourself and I will make a you a personalised journey!"
        />
      </Typography>
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Hedwig"
          botAvatar={Owl}
          steps={[
            {
              id: "1",
              message: "What is your name?",
              trigger: "name",
            },
            {
              id: "name",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: "Hi {previousValue} ! Where are you located?",
              trigger: "location",
            },
            {
              id: "location",
              options: [
                { value: "Auckland", label: "Auckland", trigger: "5" },
                { value: "Wellington", label: "Wellington", trigger: "5" },
                { value: "Canterbury", label: "Canterbury", trigger: "5" },
                {
                  value: "Other North Island",
                  label: "Other North Island",
                  trigger: "5",
                },
                {
                  value: "Other South Island",
                  label: "Other South Island",
                  trigger: "5",
                },
              ],
            },
            {
              id: "5",
              message: "How old are you?",
              trigger: "age",
            },
            {
              id: "age",
              user: true,
              trigger: "7",
              validator: (value) => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } else if (value > 65) {
                  return `${value}? Come on, youre not that old yet!`;
                }

                return true;
              },
            },
            {
              id: "7",
              message: "Which industry would you like to be in?",
              trigger: "8",
            },

            {
              id: "8",
              options: [
                { value: "Arts", label: "Arts", trigger: "profession" },
                { value: "Commerce", label: "Commerce" },
                { value: "Construction", label: "Construction" },
                {
                  value: "Education",
                  label: "Education",
                },
                {
                  value: "Healthcare",
                  label: "Healthcare",
                },
                {
                  value: "Hospitality",
                  label: "Hospitality",
                },
                {
                  value: "Law",
                  label: "Law",
                },
                {
                  value: "Manufacturing",
                  label: "Manufacturing",
                },
                {
                  value: "Social Work",
                  label: "Social Work",
                },
                {
                  value: "Technology",
                  label: "Technology",
                },
                {
                  value: "Agriculture",
                  label: "Agriculture",
                },
              ],
            },
            {
              id: "profession",
              options: [
                {
                  value: "Advertising, Arts and Media",
                  label: "Advertising, Arts and Media",
                  trigger: "19",
                },
                {
                  value: "Design and Architecture",
                  label: "Design and Architecture",
                  trigger: "19",
                },
              ],
            },
            // {
            //   id: "10",
            //   options: [
            //     {
            //       value: "Accounting",
            //       label: "Accounting",
            //       trigger: "profession",
            //     },
            //     {
            //       value: "Administration & Office Support",
            //       label: "Administration & Office Support",
            //       trigger: "profession",
            //     },
            //     {
            //       value: "Banking and Financial Support ",
            //       label: "Banking and Financial Support ",
            //       trigger: "profession",
            //     },
            //     {
            //       value: "Consulting and Strategy",
            //       label: "Consulting and Strategy",
            //       trigger: "profession",
            //     },
            //     {
            //       value: "Human Resources and Recruitment",
            //       label: "Human Resources and Recruitment",
            //       trigger: "profession",
            //     },
            //     {
            //       value: "Insurance and Superannuation",
            //       label: "Insurance and Superannuation",
            //       trigger: "profession",
            //     },
            //     {
            //       value: "Marketing and Communications",
            //       label: "Marketing and Communications",
            //       trigger: "profession",
            //     },
            //     {
            //       value: "Mining and Resources and Energy",
            //       label: "Mining and Resources and Energy",
            //       trigger: "profession",
            //     },
            //     {
            //       value: "Retail and Property",
            //       label: "Retail and Property",
            //       trigger: "profession",
            //     },
            //     {
            //       value: "Retail and Consumer Products",
            //       label: "Retail and Consumer Products",
            //       trigger: "profession",
            //     },
            //     { value: "Sales", label: "Sales", trigger: "profession" },
            //   ],
            // },

            {
              id: "19",
              message: "Great! Check out your summary",
              trigger: "review",
            },
            {
              id: "review",
              component: <Review />,
              asMessage: true,
              trigger: "update",
            },
            {
              id: "update",
              message: "Would you like to update some field?",
              trigger: "update-question",
            },
            {
              id: "update-question",
              options: [
                { value: "yes", label: "Yes", trigger: "update-yes" },
                { value: "no", label: "No", trigger: "end-message" },
              ],
            },
            {
              id: "update-yes",
              message: "What field would you like to update?",
              trigger: "update-fields",
            },
            {
              id: "update-fields",
              options: [
                { value: "name", label: "Name", trigger: "update-name" },
                {
                  value: "location",
                  label: "location",
                  trigger: "update-location",
                },
                { value: "age", label: "Age", trigger: "update-age" },
                {
                  value: "profession",
                  label: "profession",
                  trigger: "update-profession",
                },
              ],
            },
            {
              id: "update-name",
              update: "name",
              trigger: "19",
            },
            {
              id: "update-location",
              update: "location",
              trigger: "19",
            },
            {
              id: "update-age",
              update: "age",
              trigger: "19",
            },
            {
              id: "update-profession",
              update: "profession",
              trigger: "19",
            },
            {
              id: "end-message",
              message:
                "Thanks! to see your own personalised data, Scroll down!",
              end: true,
            },
          ]}
          handleEnd={(values) => handleUserInput(values)}
        />{" "}
      </ThemeProvider>
    </>
  );
}

export default ChatBoxComponent;
