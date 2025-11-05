const fs = require("fs");

const scene2 = `
🎬 Scene 2: 💖 Soorarai Pottru – Love Dialogue 💖

Oora poruthathukku varaiyil,

nee oru kirukki... naan oru kirukkan.

Namala katti kida yaarum vara maataanga.

Pesama nammale kattikidalaaaa ❤️

`;

fs.writeFileSync("scene2.txt", scene2);
console.log("✅ Scene 2 written successfully!");
