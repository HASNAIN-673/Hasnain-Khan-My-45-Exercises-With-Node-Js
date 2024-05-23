// Array of current users

let current_Users = ["Usman","Ali","Areeba","Zain","Osama"]

// Array of New Users

let new_Users = ["Hamza","Ayesha","Ali","Mahad","Areeba"]

// Loop throught new_Users to cheak for Usernames avaibility

new_Users.forEach(new_one_User => {

    //Making a condition Username already exist and save in our condition variable

let our_condition = current_Users.some(current_one_User => current_one_User.toLowerCase() === new_one_User.toLowerCase())  

// Print Diffrent massages using if_else  statements

if (our_condition){

    console.log(`sorry ${new_one_User} is already taken!`)

}else{
    
    console.log(`This Username ${new_one_User} is avilable`)
}
})
