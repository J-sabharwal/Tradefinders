import React, { Component } from "react";
import axios from 'axios'
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import ViewSelector from "./View_Selector";
import logo from "../images/Norman-Plumber.png";
import "../styles/App.css";

const TwilioChat = require('twilio-chat')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      username: null,
      token: null,
      channel: null,
    };
  }
  
  // Grabs the token data and sets state with username
  getToken = () => {
    return new Promise((resolve, reject) => {
      this.setState({
        messages: [...this.state.messages, { body: `Connecting...` }],
      })

      axios.post("/api/tokens")
        .then((data) => {
        this.setState(prev => ({
          ...prev,
          username: data.data.identity
       }))
        console.log(this.state.username) // Left this here so we know which user we are logged into chat with.
        resolve(data.data)
      })
      .catch(() => {
        reject(Error("Failed to connect."))
      })
    })
  }

  // Chain of functions - see below function for more details
  componentDidMount = () => {
    this.getToken()
      .then(this.createChatClient)
      .then(this.joinGeneralChannel)
      .then(this.configureChannelEvents)
      .catch((error) => {
        this.addMessage({ body: `Error: ${error.message}` })
      })
  }

  // Passed in message author and message body, then state is set with data. A response if only sent back if the user name is not the same as the author (stops your message from duplicating)
  addMessage = (message) => {
    const messageData = { ...message, me: message.author === this.state.username }
    this.setState({
      messages: [...this.state.messages, messageData],
    })
    if (messageData.me === false) {
      addResponseMessage(message.body, this.state.username)
    }
  }

  createChatClient = (token) => {
    return new Promise((resolve, reject) => {
      resolve(new TwilioChat.Client.create(token.jwt))
    })
  }

  // user joins a channel and listening for a before unload event and leaves the channel
  // tries to retrieve general channel, if not found then creates general channel
  joinGeneralChannel = (chatClient) => {
    return new Promise((resolve, reject) => {
      chatClient.getSubscribedChannels().then(() => {
        chatClient.getChannelByUniqueName('general').then((channel) => {

          this.addMessage({ body: `Connecting you with ${this.state.username}...` })
          this.setState({ channel })

          channel.join().then(() => {
            this.addMessage({ body: `${this.state.username} has joined the chat!` })
            window.addEventListener('beforeunload', () => channel.leave())
          }).catch(() => reject(Error('Could not join general channel.')))

          resolve(channel)
        }).catch(() => this.createGeneralChannel(chatClient))
      }).catch(() => reject(Error('Could not get channel list.')))
    })
  }

  // Creates a new channel called general if one does not already exist
  createGeneralChannel = (chatClient) => {
    return new Promise((resolve, reject) => {
      this.addMessage({ body: 'Creating general channel...' })
      chatClient
        .createChannel({ uniqueName: 'general', friendlyName: 'General Chat' })
        .then(() => this.joinGeneralChannel(chatClient))
        .catch(() => reject(Error('Could not create general channel.')))
    })
  }

  // Messages that are generated > joined channel messages and actual author and message body passed to the addMessage function above
  configureChannelEvents = (channel) => {

    channel.on('messageAdded', ({ author, body }) => {
      this.addMessage({ author, body })
    })

    channel.on('memberJoined', (member) => {
      this.addMessage({ body: `${member.identity} has joined the channel.` })
    })

    channel.on('memberLeft', (member) => {
      this.addMessage({ body: `${member.identity} has left the channel.` })
      
    })
  }

  // If the channel exists then send the message
  handleNewMessage = (text) => {
    if (this.state.channel) {
      this.state.channel.sendMessage(text)
    }
  }

  render() {
    return (
      <div>
        <ViewSelector />
        <Widget
          className="rcw-bubble"
          handleNewUserMessage={this.handleNewMessage}
          profileAvatar={logo}
          title="Tradefinders"
          subtitle="Ask an expert!"
        />
      </div>
    );
  }
}

export default App;