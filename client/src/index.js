import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//This is just here for reference, was taken from App.js

// fetchData = () => {
//   axios
//     .get("/api/user") // You can simply make your requests to "/api/whatever you want"
//     .then((response) => {
//       // handle success
//       console.log(response.data.users.company); // The entire response from the Rails API

//       console.log(response.data.users[0].name); // Just the message
//       this.setState({
//         user: response.data.users[0],
//       });
//     });
// };

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
