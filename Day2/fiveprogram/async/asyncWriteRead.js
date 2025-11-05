const fs = require("fs");

// Write asynchronously
fs.writeFile("example4.txt", "This file is written asynchronously!", (err) => {
  if (err) return console.error(err);
  
  console.log("File written successfully!");

  // Read file asynchronously
  fs.readFile("example4.txt", "utf-8", (err, data) => {
    if (err) return console.error(err);
    console.log("File Content:", data);
  });
});
