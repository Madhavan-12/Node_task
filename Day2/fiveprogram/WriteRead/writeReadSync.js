const fs = require("fs");

// Write to a file
fs.writeFileSync("example1.txt", "Hello Azhagu! This is my first file.");

// Read from the file
const data = fs.readFileSync("example1.txt", "utf-8");
console.log("File Content:", data);
