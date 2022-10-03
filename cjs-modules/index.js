const { characters, stealRing } = require('./characters.js')

let myChar = characters

myChar = stealRing(characters, 'Frodo')

console.log(characters);
