const express = require('express');
const WebSockets = require('ws');
const SocketServer = WebSockets.Server;

require('dotenv').config();

// Set the port to 3001
const PORT = 3001;

// initialize the finn websocket server
const socket = new WebSockets(`wss://ws.finnhub.io?token=${process.env.FINNHUB_KEY}`);

// unsubscribe the symbol from finn websocket
const unsubscribe = function(symbol) {
  socket.send(JSON.stringify({'type':'unsubscribe-news','symbol': symbol}));
};

// Initialize server
const server = express()
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

let symbol = "";

wss.on('connection', function(ws) {
  console.log('Client connected');
  ws.on('message', function(message) {
    symbol = message.toString();
    
    socket.on('open', function(event) {
      socket.send(JSON.stringify({'type':'subscribe', 'symbol': symbol}));
    });
    
    console.log(symbol);
    socket.on('message', function(event) {
      ws.send(`${event}`);
      console.log('Message from server ', JSON.parse(event));
    });
  });
  ws.on('close', function(ws) {
    console.log('connection closed');
    unsubscribe(symbol);
  });
});




