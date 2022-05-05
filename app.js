//const log = require('./logger');
const path = require('path');

// function sayHello(name) {
//     console.log('Hello ' + name);
// }

// sayHello('Subodha Sahu');

//console.log(window);

//console.log(module);

//console.log(logger);

//logger.log('hello');
// log('Message')

// console.log(path);
// var pathObj = path.parse(__filename);
// console.log(pathObj);



// const os = require('os');

// let totalMemory = os.totalmem();

// let freememo = os.freemem()
// //console.log('Total memory' + totalMemory);

// //Template String

// console.log(`Total Memory ${totalMemory}`); //total amount of system memory in bytes as an integer.
// console.log(`Free Memory ${freememo}`);



//File System
//const fs = require('fs');

//Synch function

// const files = fs.readdirSync('./');
// console.log(files);

//Asyn Function

// const files = fs.readdir('./', function(err, files){
//     if(err) console.log(`Error ${err}`)
//     else console.log(`Files are ${files}`)

// })


//Event

//Signla something happendeed

const EventEmitter = require('events');
const myEmitter = new EventEmitter();
//console.log(myEmitter);

//Register and Listener
// myEmitter.on('messageLogged', function(){
//     console.log('I am listening');
// })


//Dispatch an event,
//myEmitter.emit('messageLogged');
//Order of delcration is important for the event register and dispatch, 

//Event arguments 

// myEmitter.on('messageLogged', function(arg){
//     console.log('I am listening' + JSON.stringify(arg));
// })

//Arrow Function
// myEmitter.on('messageLogged', (arg) => {
//     console.log(`Listener Id  ${arg.id}`);
// })

// myEmitter.emit('messageLogged', {id: 1, url:'http://'});


//Event Listener in a module.
// const Logger = require('./logger');
// const logg = new Logger(); //Create an object of the Logger class.
// logg.on('messageLogged', (arg) => {
//     console.log(`Listener Id  ${arg.id}`);
// });
// logg.log('Send and Message, Did you receive?');


//HTTP Module

const http = require('http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  if(req.url === '/') {
    res.end(JSON.stringify({
        data: 'Hello World!'
      }));
  }
  if(req.url === '/api/test') {
    res.end(JSON.stringify([1,2, 3, 4]));
  }
 
});

server.listen(8005);