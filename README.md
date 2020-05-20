# Tradefinder

Tradefinder is a multi-page app where users who are in need of services from tradespeople, are able to search for reputable business in their local area. 

Live Chat Feature

!["Navigating Week"](https://github.com/J-sabharwal/Tradefinders/blob/master/client/src/images/Live-Chat.gif?raw=true)

Search Feature

!["Add/Edit View"](https://github.com/J-sabharwal/Tradefinders/blob/master/client/src/images/Search-Feature.gif?raw=true)


# 
## Setup

### Please follow the set of instructions below to demo this application:

An account with Twilio and Mailgun are required to run some of our features. please visit https://www.twilio.com/ to signup for the live chat functionality and https://www.mailgun.com/homepage/ for the mailing service.

Once these accounts have been created, a `.env` file will need to created in both the `client` directory and `root` directory.

There will account credentials within the Twilio and Mailgun account which will be required to go into these files. please see below an example:

#### `Root` Directory:
```
TWILIO_API_KEY=SKXXXXXXXX
TWILIO_API_SECRET=ELXXXXXXXX
TWILIO_CHAT_SERVICE_SID=ISXXXXXXXXXX
TWILIO_ACCOUNT_SID=ACXXXXXXXXXXXXX
```

#### `Client` Directory:
```
REACT_APP_MAILGUN_DOMAIN=XXXXXXXXXXX
REACT_APP_MAILGUN_API_KEY=XXXXXXXXXXX
```

#
### For this demo you will require the use of two terminals. 

In the first terminal, you will start the Ruby on Rails API server.
1. Run `bundle install` to install the required dependencies. 
2. Run `bin/rake db:setup` to create the database.
3. Run `bin/rake db:reset` to reset/ seed the database.
4. Run `rails server -b 0.0.0.0 -p 3001` or `bin/rails server` to start the server. 
  - This will allow your browser and other programs on the host machine to access the API server.

In the second terminal, you will start the React Development server.
1. Navigate to the client folder in the terminal.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to start the service.
4. Go to `http://localhost:3000` in the browser.

## Dependencies
- React
- Ruby on Rails
- Mailgun
- Twillio
- Postgres

## User Experience

The user will be able to search for categorized trade types and locations. They can then navigate through the application and view the various search results meeting that criteria and view the company profiles.

Within the company profiles the user can see reviews and ratings. The average rating system is based on 4 main criterias: Cleanliness, Reliability, Value and Workmanship. Reviews can be added by visiting the add review page.

The user can also request a quotation by completing the quotation form.

If a company wishes to list their business on the website, they can do so by completing the form by clicking on the Add Company button in the navigation panel.

#### Created by Jaspinder Sabharwal, Brad Ruud and Kevin Cheng @ Lighthouse Labs 2020




