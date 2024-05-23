// QUESTION NO:16
// CREATING A ARRAY
var guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];
// Making a Array
var dontcome = guestList[0];
//Print the name of guest who cant come
console.log(dontcome, "nahen aa sakty hain");
//Add or remove value from guest list array
guestList.splice(0, 1, "Rubasha");
//Massage print for bigger table
console.log("Good News ! we have found a bigger a table for dinner.");
//Adding a new value at string index of array
guestList.unshift("Ali");
//Adding a new value at ending index of array
guestList.push("Zain");
//Adding anew guest at middle index of array 
var middleindex = Math.floor(guestList.length / 2);
//Adding new guest to middle index of array
guestList.splice(middleindex, 0, "osama");
//Print massage to updated list
console.log("Update list of our guest");
//Sending a invitation massage to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ",would you like to dinner with me ?")); });
