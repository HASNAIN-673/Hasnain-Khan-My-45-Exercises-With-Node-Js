/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/

// Define veriable
let aliencolor = "green";

//First version

if (aliencolor === "green"){ 

    console.log("player just earned 5 points for shooting the alien.")
}

//Second version

if (aliencolor === "blue"){

    console.log("I am come from if ststement.");
}
else{
    console.log("I am come from Else statement."); 
}