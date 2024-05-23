/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians() with each array to
show that you have one array of the original names and one array with the
Great added to each magician’s name.*/
// Define the function to show magician names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Function to make magicians great through .map() it wil modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magician names
var magician_names = ["Harry Potal", "Hasnain", "Hiba"];
// Making a copy of original array .slice() function
var copy_magician_names = magician_names.slice();
// Modify the copied array to iclude "The Great" with there names
var copy_great_magician = make_great(copy_magician_names);
//Show both arrays original and copied
//original
console.log("Original Array\n");
show_magicians(magician_names);
//copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magician);
