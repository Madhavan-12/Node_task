const fs = require("fs");

// Append text to the file
fs.appendFileSync("example2.txt", "This is the first line.\n");
fs.appendFileSync("example2.txt", "Adding another line!\n");

// Read and print content
const content = fs.readFileSync("example2.txt", "utf-8");
console.log(content);
