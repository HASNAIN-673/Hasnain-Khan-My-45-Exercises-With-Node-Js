//QUESTION NO 15;
var guestList = ["Atia", "Bilal", "Rubasha", "Kiran"];
var dontcome = guestList[0];
console.log(dontcome, "nahein aa sakti.");
guestList.splice(0, 1, "Madiha");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, " would you like to dinner with me ?")); });
