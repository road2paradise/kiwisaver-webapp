import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import "./css/ChatBoxComponent.css";
import Review from "./Response";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Roboto",
  headerBgColor: "#fff",
  headerFontColor: "#fff",
  headerFontSize: "0",
  botBubbleColor: "#4caf50",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

function ChatBoxComponent() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChatBot
          hideBotAvatar={true}
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
                } else if (value > 120) {
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
              message: "Thanks! Your data was submitted successfully!",
              end: true,
            },
          ]}
        />{" "}
      </ThemeProvider>
    </>
  );
}

export default ChatBoxComponent;
