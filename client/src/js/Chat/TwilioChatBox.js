/* eslint-disable camelcase */
import React, { Component, useState, useEffect } from "react";
import axios from 'axios';

import { Widget, addResponseMessage } from "react-chat-widget";

import logo from "../../images/Norman-Plumber.png";
import "react-chat-widget/lib/styles.css";

const TwilioChat = require('twilio-chat');

export default function TwilioChatBox(props) {
  const [messages, setMessage] = useState([]);
  const [username, setUsername] = useState(null);
  const [channel, setChannel] = useState(null);


  useEffect(()=>{
    getToken()
      .then(createChatClient)
      .then(joinGeneralChannel)
      .then(configureChannelEvents)
      .catch((error) => {
        addMessage({ body: `Error: ${error.message}` });
      });
  }, []);

  // Grabs the token data and sets state with username
  const getToken = () => {
    return new Promise((resolve, reject) => {
      setMessage([...messages, { body: `Connecting...` }]);

      const username = props.currentUser ? props.currentUser.name : "Guest";

      axios.post("/api/tokens", null, {
        params: {
          username
        }
      })
        .then((data) => {
          console.log("data.data.identity is ");
          console.log(data.data.identity);
          setUsername(data.data.identity);
          console.log("username is");
          console.log(username);
          resolve(data.data);
        })
        .catch(() => {
          reject(Error("Failed to connect."));
        });
    });
  };

  // Passed in message author and message body, then state is set with data. A response if only sent back if the user name is not the same as the author (stops your message from duplicating)
  const addMessage = (message) => {
    const messageData = { ...message, me: message.author === username };
    setMessage([...messages, messageData]);
    if (messageData.me === false) {
      addResponseMessage(message.body, username);
    }
  };

  const createChatClient = (token) => {
    return new Promise((resolve, reject) => {
      resolve(new TwilioChat.Client.create(token.jwt));
    });
  };

  // user joins a channel and listening for a before unload event and leaves the channel
  // tries to retrieve general channel, if not found then creates general channel
  const joinGeneralChannel = (chatClient) => {
    return new Promise((resolve, reject) => {
      chatClient.getSubscribedChannels().then(() => {
        chatClient.getChannelByUniqueName('general').then((receivedChannel) => {

          addMessage({ body: 'Joining general channel...' });
          setChannel(receivedChannel);

          receivedChannel.join().then(() => {
            addMessage({ body: `Joined general channel as ${username}` });
            window.addEventListener('beforeunload', () => receivedChannel.leave());
          }).catch(() => reject(Error('Could not join general channel.')));

          resolve(receivedChannel);
        }).catch(() => createGeneralChannel(chatClient));
      }).catch(() => reject(Error('Could not get channel list.')));
    });
  };

  // Creates a new channel called general if one does not already exist
  const createGeneralChannel = (chatClient) => {
    return new Promise((resolve, reject) => {
      addMessage({ body: 'Creating general channel...' });
      chatClient
        .createChannel({ uniqueName: 'general', friendlyName: 'General Chat' })
        .then(() => joinGeneralChannel(chatClient))
        .catch(() => reject(Error('Could not create general channel.')));
    });
  };

  // Messages that are generated > joined channel messages and actual author and message body passed to the addMessage function above
  const configureChannelEvents = (channel) => {

    channel.on('messageAdded', ({ author, body }) => {
      addMessage({ author, body });
    });

    channel.on('memberJoined', (member) => {
      addMessage({ body: `${member.identity} has joined the channel.` });
    });

    channel.on('memberLeft', (member) => {
      addMessage({ body: `${member.identity} has left the channel.` });
    
    });
  };

  // If the channel exists then send the message
  const handleNewMessage = (text) => {
    if (channel) {
      channel.sendMessage(text);
    }
  };
  
  return (
    <Widget
      className="rcw-bubble"
      handleNewUserMessage={handleNewMessage}
      profileAvatar={logo}
      title="Tradefinder"
      subtitle="Ask an expert!"
    />
  );
}