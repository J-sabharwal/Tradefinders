import React from "react";

import {
  Widget,
  addResponseMessage,
  handleNewUserMessage,
  addUserMessage,
} from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

import ViewSelector from "./View_Selector";
import logo from "../images/Norman-Plumber.png";

import "../styles/App.css";

export default function App() {
  // useEffect(() => {
  //   addResponseMessage("Hi! This is Norman! How can I help you today?");
  // }, []);


  document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".chat")) {
      window.chat = new Chat();
    }
  });


  axios.post("/api/tokens", null, {
  }).then(((response) => {
     Twilio.Chat.Client.create(data.token).then(function (chatClient) {
       chatClient
         .getChannelByUniqueName("general")
         .then(function (channel) {
           // general channel exists
         })
         .catch(function () {
            chatClient
              .createChannel({
                uniqueName: "general",
                friendlyName: "General Chat Channel",
              })
              .then(function (channel) {
                if (channel.state.status !== "joined") {
                  channel.join().then(function (channel) {
                    console.log("Joined General Channel");
                  });
                }
              });
           // general channel does not exist
         });
     });
  }));

  let i = 0;
  const response = [
    "Hi! My name is Norman! How can I help you today?",
    "Sorry to hear that. Can you tell me more about the problem?",
    "I think I can help you with that!",
    "Don't worry, I'll walk you through it!",
    "My Pleasure! Let's get started.",
  ];

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message: ${newMessage}`);
    // Now send the message throught the backend API
    setTimeout(function () {
      addResponseMessage(response[i]);
      i++;
    }, 2000);
  };

  return (
    <div>
      <ViewSelector />
      <Widget
        className="rcw-bubble"
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        title="Tradefinders"
        subtitle="Ask an expert!"
      />
    </div>
  );
}
