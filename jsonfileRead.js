const fs = require("fs");

const data = fs.readFileSync("hello.json", "utf-8");
const obj = JSON.parse(data);

console.log("Name:", obj.name);
console.log("Age:", obj.age);