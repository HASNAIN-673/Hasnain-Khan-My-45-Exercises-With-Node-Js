/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a arra*/ 
 
 // Define  variables

 let apple = "apple";
 let UpperCaseApple = "APPLE";
 let ten = 10;
 let twenty = 20;
 let fruits = ["apple","banana","orange"];

 //Test for aquality and inequality with strings.

 console.log("\n Is a apple is not equal to apple?");
 console.log(apple != "apple"); 
 
 //Test using lowercase Function

 console.log("Is Apple is equal to apple after converting to lowercase?");
 console.log(UpperCaseApple.toLowerCase() == "apple");
 console.log("\n Is Apple is not equal to apple after converting to lowercase?");
 console.log(UpperCaseApple.toLowerCase() !="apple");

 //Numerical tests

 console.log("\n Is ten is equal to twenty?");
 console.log(ten == twenty);

 //Not equal to

 console.log("\n Is ten is not equal to twenty?");
 console.log(ten !=twenty); 

 //Greater than

 console.log("\n Is ten is greater than zero?");
 console.log(ten > 0);

 //Lass than

 console.log("\n Is twenty is less than 10");
 console.log(twenty < 10);

 // Greater than or equal to

 console.log("\n Is ten is greater than or equal to 5?");
 console.log(ten >= 5);

 //Less than or equal to

 console.log("\n twenty is less than or equal to 10");
 console.log(twenty <= 10);

 //Tests using "and" & "or" operators

 console.log("\n twenty is not equal to 10 and twenty is greater than 10");
 console.log(twenty != 10 && twenty > 10);

 console.log("\n twenty is not equal to 10 and twenty is greater than 10");
 console.log(twenty != 10 && twenty > 30);

//using ||(0R)

console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log(20 > 50 || 20  !=20);


//Tests Wether an item is include in Array

console.log("\n Is orange include in my fruits array");
console.log(fruits.includes("orange"));

//Not Include

console.log("\n Is orange not include in my fruits array");
console.log(!fruits.includes("orange"));
