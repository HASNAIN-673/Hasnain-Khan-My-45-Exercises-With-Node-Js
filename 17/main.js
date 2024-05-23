/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program*/
var guestlist = ["Saqib", "Noor", "Abiha", "Eshaal"];
var dontcome = guestlist[0];
console.log(dontcome, "Nai aa sakta");
guestlist.splice(0, 1, "Moosa");
console.log("Good News!we have found a bigger table for dinner.");
guestlist.unshift("aais");
guestlist.push("Rohaan");
var middleIndex = Math.floor(guestlist.length / 2);
guestlist.splice(middleIndex, 0, "Ali");
console.log("Updated list of our guests");
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ",would you like to dinner with me")); });
console.log("Unfortunately,the new dinner table wont arrive on time.so I cant only invite two guests to dinner with me");
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("sorry,".concat(removedGuest, "I cant invite you to dinner"));
}
console.log("Invitations to the last 2 Guests");
guestlist.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ",you are still invited to dinner")); });
guestlist.pop();
guestlist.pop();
console.log("Empty List:", guestlist);
