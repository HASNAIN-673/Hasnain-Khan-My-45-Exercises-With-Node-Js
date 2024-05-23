//QUESTION NO 15;
let guestList = ["Atia","Bilal","Rubasha","Kiran"];
let dontcome = guestList[0];
console.log(dontcome,"nahein aa sakti.");
// splice add or remove 
guestList.splice(0,1, "Madiha");

guestList.forEach(guest => console.log(`Salam ${guest} would you like to dinner with me ?`));
