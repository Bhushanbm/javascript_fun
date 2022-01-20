// JavaScript source code

var num = 83343;
var reverse = (num) => parseInt(String(num)
    .split("")
    .reverse()
    .join(""), 10);
console.log(reverse(num));