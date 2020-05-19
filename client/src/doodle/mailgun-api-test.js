/**
 * WARNING:
 * Please do not commit api keys to github
 */
const mailgun = require("mailgun-js");
const DOMAIN = 'name@ourdomain.com';
const API_KEY = "something";

const mg = mailgun({apiKey: API_KEY, domain: DOMAIN});

const data = {
  from: 'Excited User <name@ourdomain.com>',
  to: 'recepiant@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

mg.messages().send(data, function(error, body) {});