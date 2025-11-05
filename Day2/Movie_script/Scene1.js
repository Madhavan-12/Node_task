const fs = require("fs");

const scene1 = `
🎭 Soorarai Pottru – Emotional Dialogue 🎭


Indha naatula irukkuravanu-ku,
illaadha van kadaisi varaiyum illaadha vanaave irukkanum.

100 varushathukku munnaadi current avangalukku mattum thaaan sonnaanga.
50 varushathukku munnaadi car avangalukku mattum thaaan sonnaanga.
Idhellam avanga enna sollraanga?

Ena avangal thavira vera evanum idha anubavichitta koodaadhu-nu dhaan!

Vasathi illaadha naam oru idathula irundhu
innoru idathukku poradhukku
naal kanakka naai maathiri alaindhu irukkom...

Panakaaran mattum vaanathula kadavul maathiri
usar parappaanam!

Naamma avangal aayitta,
avangalukku keela vera yaarum irukka maatangala
nu payam dhaan!

`;

fs.writeFileSync("scene1.txt", scene1);
console.log("✅ Scene 1 written successfully!");
