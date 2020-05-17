import React from 'react'
import axios from 'axios'

const Twilio = require('twilio')

class Chat {
  constructor() {
    this.channel = null;
    this.client = null;
    this.messages = ["Connecting..."];
    this.initialize();
  }

  initialize() {
    this.renderMessages();

    axios.post("/api/tokens").then((data) => {
      console.log(data);
      Twilio.Chat.Client.create(data.token).then((client) =>
        this.setupClient(client)
      );
    });
  }

  joinChannel() {
    if (this.channel.state.status !== "joined") {
      this.channel.join().then(function (channel) {
        console.log("Joined General Channel");
      });
    }
  }

  setupChannel(channel) {
    this.channel = channel;
    this.joinChannel();
    this.addMessage({ body: `Joined chat` });
    this.channel.on("messageAdded", (message) => this.addMessage(message));
    this.setupForm();
  }

  setupForm() {
    const form = document.querySelector(".chat form");
    const input = document.querySelector(".chat form input");

    form.addEventListener("submit", event => {
      event.preventDefault();
      this.channel.sendMessage(input.value);
      input.value = "";
      return false;
    });
  }


  setupClient(client) {
    this.client = client;
    this.client
      .getChannelByUniqueName("general")
      .then((channel) => this.setupChannel(channel))
      .catch((error) => {
        this.client
          .createChannel({
            uniqueName: "general",
            friendlyName: "General Chat Channel",
          })
          .then((channel) => this.setupChannel(channel));
      });
  }

  renderMessages() {
    let messageContainer = document.querySelector(".chat .messages");
    messageContainer.innerHTML = this.messages
      .map((message) => `<div class="message">${message}</div>`)
      .join("");
  }

  addMessage(message) {
    let html = "";

    html += message.body;
    this.messages.push(html);
    this.renderMessages();
  }


}
