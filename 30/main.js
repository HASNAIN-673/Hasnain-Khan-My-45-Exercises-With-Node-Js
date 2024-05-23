// creating a Array
var UserNames = ["Muniza", "Noor", "Saqib", "Admin", "Ali"];
//using ForEach Loop on Array
UserNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneUser, ", thank you for logging in aagain."));
    }
});
