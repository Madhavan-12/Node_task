const fs = require("fs");

const scene3 = `
🔥 Soorarai Pottru – Mass Dialogue 🔥



Ey vaanam enna?
Avanga appan veettu soththa?

*tha nee flight-a erakkuda!
Naan paathukiren!

Air oatu ravanum, aeroplane-la povaan da! ✈️🔥

`;

fs.writeFileSync("scene3.txt", scene3);
console.log("✅ Scene 3 written successfully!");
