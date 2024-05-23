/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed*/

let UserNames = ["Muniza","Noor","Saqib","Admin","Ali"]

//Remove all values from our Array now our Array is empty
UserNames = []

// if statement for cheaking lenght of our Array is empty?
if(UserNames.length ===0){

    console.log("You Array in Empty we need to find some Users!")

}else{

    // if Array is not empty use forEach Loop on Array

UserNames.forEach(oneUser =>{

    if (oneUser === "Admin"){

        console.log(`hello${oneUser},would you like to see a status report?`)
    }
     else{
        console.log(`hello${oneUser},thank you for logging in aagain.`)

        }
    })
}