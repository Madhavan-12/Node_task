// setTimeout: Runs only once after 3 seconds
setTimeout(() => {
  console.log("🎬 Scene 1 starts (after 3 seconds)");
}, 3000);

// setInterval: Runs repeatedly every 2 seconds
const shoot = setInterval(() => {
  console.log("🎥 Camera rolling...");
}, 2000);

// stop the interval after 7 seconds
setTimeout(() => {
  clearInterval(shoot);
  console.log("🛑 Shooting stopped!");
}, 7000);
