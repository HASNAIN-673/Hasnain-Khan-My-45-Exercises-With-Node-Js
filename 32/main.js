// Array of current users
var current_Users = ["Usman", "Ali", "Areeba", "Zain", "Osama"];
// Array of New Users
var new_Users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
// Loop throught new_Users to cheak for Usernames avaibility
new_Users.forEach(function (new_one_User) {
    //Making a condition Username already exist and save in our condition variable
    var our_condition = current_Users.some(function (current_one_User) { return current_one_User.toLowerCase() === new_one_User.toLowerCase(); });
    // Print Diffrent massages using if_else  statements
    if (our_condition) {
        console.log("sorry ".concat(new_one_User, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_User, " is avilable"));
    }
});
