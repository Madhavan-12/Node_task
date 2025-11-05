const fs = require("fs");

// Read all scene text files
const scene1 = fs.readFileSync("scene1.txt", "utf8");
const scene2 = fs.readFileSync("scene2.txt", "utf8");
const scene3 = fs.readFileSync("scene3.txt", "utf8");

// Combine all scenes into an array of lines
const allScenes = `${scene1}\n${scene2}\n${scene3}`.split("\n");

// Function to print lines one by one
function playScene(lines, delay) {
  let i = 0;
  const interval = setInterval(() => {
    if (i < lines.length) {
      console.log(lines[i]);
      i++;
    } else {
      clearInterval(interval);
      console.log("\n🎞️ Scene playback complete! THE END 🎬-by Sudha kongara🎬");
    }
  }, delay);
}

// 🎥 Start playback (each line shows every 1.5 seconds)
console.log("🎬 Starting Soorarai Pottru Movie Playback...\n");
playScene(allScenes, 1500);
