'use strict';

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => console.log('Socket in logger.js created!'));

client.on('data', data => {
  let payload = JSON.parse(data.toString());
  if(payload.name === 'saved'){
    console.log(payload);
  } else{
    console.error(payload);
  }
});

client.on('close', () => {
  console.log('Connection to logger socket closed!');
});
