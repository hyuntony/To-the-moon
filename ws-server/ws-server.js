const express = require('express');
const WebSockets = require('ws');
const SocketServer = WebSockets.Server;

require('dotenv').config();

// Set the port to 3001
const PORT = 3001;

// Initialize server
const server = express()
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`listening on ${ PORT }`));

// Create the WebSockets server
const ws = new SocketServer({ server });

// initialize the finn websocket server
const socket = new WebSockets(`wss://ws.finnhub.io?token=${process.env.FINNHUB_KEY}`);

socket.on('open', function(event) {
  socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}));
});

// server.get('/', )
socket.on('message', function(event) {
  // let 
  console.log('Message from server ', JSON.parse(event));
});

const unsubscribe = function(symbol) {
  socket.send(JSON.stringify({'type':'unsubscribe-news','symbol': symbol}));
};
