require "twilio-ruby"

class TokensController < ApplicationController

  def create
    #  # Define User Identity
    # identity = current_user.email

    # Create Grant for Access Token
    grant = Twilio::JWT::AccessToken::ChatGrant.new
    grant.service_sid = ENV['TWILIO_CHAT_SERVICE_SID']

    # Create an Access Token
    token = Twilio::JWT::AccessToken.new(
      ENV['TWILIO_ACCOUNT_SID'],
      ENV['TWILIO_API_KEY'],
      ENV['TWILIO_API_SECRET'],
      [grant]
    )

    # Generate the token and send to client
    render json: { token: token.to_jwt }
  end
end