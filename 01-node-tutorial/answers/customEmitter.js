const EventEmitter = require("events");  
// const emitter = new EventEmitter();  
// setInterval(() => {  
//   emitter.emit("timer", "hi there");  
// }, 2000);  
// emitter.on("timer", (msg) => console.log(msg));  

const emitter = new EventEmitter();
emitter.on('event1', (message) => {
  console.log("Event1 received: ", message);
});

emitter.on('event2', (data) => {
  console.log("Event2 received: ", data);
});

emitter.emit('event1', "Hello from event 1");
emitter.emit('event2', { name: "Alice", age: 25 });

setInterval(()=> {
  emitter.emit("timer", "This message is sent every 2 seconds");
}, 2000);

emitter.on('timer', (msg) => {
  console.log("Timer event received:", msg);
});