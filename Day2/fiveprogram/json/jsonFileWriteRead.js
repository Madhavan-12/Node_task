const fs = require("fs");

const user = {
  name: "Azhagu",
  age: 23,
  skills: ["HTML", "CSS", "JavaScript"]
};

// Write object as JSON
fs.writeFileSync("user.json", JSON.stringify(user, null, 2));

// Read and parse JSON file
const jsonData = fs.readFileSync("user.json", "utf-8");
const obj = JSON.parse(jsonData);

console.log("User name:", obj.name);
