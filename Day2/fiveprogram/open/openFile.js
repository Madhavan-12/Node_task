const fs = require("fs");

fs.open("example5.txt", "w", (err, file) => {
  if (err) throw err;
  fs.writeFileSync("example5.txt", "Line 1\nLine 2\nLine 3");
  
  const data = fs.readFileSync("example5.txt", "utf-8");
  console.log("File opened and read successfully:\n", data);
});
