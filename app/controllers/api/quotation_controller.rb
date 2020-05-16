require "mailgun-ruby"

class Api::QuotationController < ApplicationController
  def create
    sendMail
    stuff_to_return = getData

    render :json => {
      params: params,
      results: stuff_to_return,
    }
  end

  def sendMail
    # First, instantiate the Mailgun Client with your API key
    mg_client = Mailgun::Client.new params[:api_key]

    # Define your message parameters
    message_params = {
      from: "#{params[:sender]}@#{params[:domain]}",
      to: params[:recipient],
      subject: params[:subject],
      text: params[:text],
    }

    # Send your message through the client
    mg_client.send_message params[:domain], message_params
  end

  def getData
    # First, instantiate the Mailgun Client with your API key
    mg_client = Mailgun::Client.new params[:api_key]

    # Issue the get request
    result = mg_client.get("#{params[:domain]}/events", { :event => "delivered" })

    return result.to_h["items"].first
  end
end
