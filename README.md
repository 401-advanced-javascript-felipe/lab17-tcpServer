# LAB 18 TCP Server

### Author: Felipe

### Links and Resources
* [submission PR](https://github.com/401-advanced-javascript-felipe/lab17-tcpServer/pull/1)
* [travis](https://travis-ci.com/401-advanced-javascript-felipe/lab17-tcpServer/builds/116062544)

### Modules
#### `app.js`
Reads/Writes/Uppercases a file. It also connects to the running server using TCP. On file errors, write an error message to the socket. On file save, write a save message to the socket.

#### `server.js`
Parse the text it receives. Given a good “event” broadcast the event to all connected clients.

### `logger.js`
Connects to the server.js. Listen for “error” and “save” events only. On “save”, do a console.log() with the message. On “error” do a console.error() with the message

### Setup
#### `.env` requirements
* `PORT` - 3001 is the default port

#### Running the app
Open 3 terminal windows

1. `npm run startServer` - This will kick off the main server. It will listen and then emit. It is listening to `data` events.
2. `npm run startLogger` - This will run the logger server. This server will listen for `saved` event. Once it hears the event it will console.log the message. Anything else it wil console.log error
3. `npm start` - it will read and turn to uppercase the contents in `./files/test.txt`. Upon success it will then emit success to `server.js`.
4. (Optional) `npm run startError` - Same as `npm start` but will emit the `file-error` message
  
#### Tests
`npm test` - Will test for functions that I have written. and will mock the fs module.


#### UML
![](./assets/tcpServer.jpg)
