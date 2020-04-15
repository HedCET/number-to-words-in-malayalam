const converter = require("./main.js");

// console.log("00", converter.lessThan100("00"));
// for (let i = 0; i < 100; i++) console.log(i, converter.lessThan100(i));

// console.log("000", converter.lessThan1000("000"));
// for (let i = 0; i < 1000; i++) console.log(i, converter.lessThan1000(i));

// console.log("00000", converter.lessThan100000("00000"));
// for (let i = 0; i < 100000; i++) console.log(i, converter.lessThan100000(i));

// console.log("0000000", converter.lessThan10000000("0000000"));
// for (let i = 0; i < 10000000; i++) console.log(i, converter.lessThan10000000(i));

console.log(
  "000000000000000000000",
  converter.toWords("000000000000000000000")
);

const randomNumber = `${Math.random()}`.substr(2);
console.log(randomNumber, converter.toWords(randomNumber));
