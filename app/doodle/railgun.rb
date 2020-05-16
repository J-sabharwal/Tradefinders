require "mailgun-ruby"

# First, instantiate the Mailgun Client with your API key
mg_client = Mailgun::Client.new "75336608ca637e01c81759cca8c7a251-3e51f8d2-007403fa"

# Define your message parameters
message_params = { from: "bob@sandbox6bd39aa88173432d96e848eaf7f16a6a.mailgun.org",
                   to: "bbbplumbing8@gmail.com",
                   subject: "The Ruby SDK is awesome!",
                   text: "It is really easy to send a message!" }

# Send your message through the client
mg_client.send_message "sending_domain.com", message_params
