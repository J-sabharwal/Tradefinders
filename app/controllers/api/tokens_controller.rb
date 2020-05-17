require "twilio-ruby"

class Api::TokensController < ApplicationController
  def create
    # Create Grant for Access Token
    grant = Twilio::JWT::AccessToken::ChatGrant.new
    grant.service_sid = ENV["TWILIO_CHAT_SERVICE_SID"]

    # Create an Access Token
    token = Twilio::JWT::AccessToken.new(
      ENV["TWILIO_ACCOUNT_SID"],
      ENV["TWILIO_API_KEY"],
      ENV["TWILIO_API_SECRET"],
      [grant]
    )

    token.identity = params[:username]

    # Generate the token and send to client
    render json: { identity: token.identity, jwt: token.to_jwt }
  end
end
