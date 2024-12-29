// 04-names.js imports values from 04-names
const names = require("./04-names");

// imports a function
const greeting = require("./05-utils.js");
greeting(names.user1);
greeting(names.user2);
greeting(names.user3);

//imports separate singular values by using module.exports for each one
const details = require("./06-alternative-flavor.js");
console.log("my details:", details);

//imports 07-mind-grenade which only executes when required
require("./07-mind-grenade.js");
