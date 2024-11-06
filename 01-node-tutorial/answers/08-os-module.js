// OS = operating system
const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// os.uptime returns the system uptime is seconds

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log("Current OS", currentOS);
