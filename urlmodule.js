
// const myURL = new URL('https://example.org');
// myURL.pathname = "/a/b/c";
// myURL.search = '?d=e';
// myURL.hash = '#fgh';

// console.log(myURL)
// console.log(myURLhref)


//events

const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    setTimeout(()=>{ console.log('an event occurred!');},3000)
 
});
myEmitter.emit('event');
//set timeout runs after all the other functions are done 
// it executes at the last