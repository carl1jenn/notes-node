console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

//var res = notes.addNote();

console.log('Result:', notes.add(10,5));
// string concatentation - deprecated due to append file
// fs.appendFile('greetings.txt','Hello '+ user.username + '!');

// string concatentation - deprecated due to append file being synchronis
// fs.appendFileSync('greetings.txt','Hello '+ user.username + '!');

// es6 - template strings
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
