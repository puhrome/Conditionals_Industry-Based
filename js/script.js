/**
 * Conditional_Industry-Based Created by Phirom Yim on 4/17/14.
 */
//Using Conditional Operators, Arrays and Ternary in Conditional Statement
//Calculate the amount of space in a 50g external hard drive with files for Web Design and Development
//create a variable for hard drive space
var hardDrive = 50;//define hard drive space at 50 gigs
//user input current storage amount in percentage
var currentStorage = Number(prompt("Enter your current storage percentage"));
//user input how large the files are in gig
var files = Number (prompt ("How many gigs of file do you have?"));
//create a variable to calculate the amount left by the percentage of new files will take up in hard drive
//total storage is files divided by hard drive and multiplied by 100 to get percentage
var storageNeed = ((files/hardDrive) * 100);
var storageUsed = (100 - currentStorage) - storageNeed ;
//create ternary to print if true or else statement if false
(storageUsed <= currentStorage) ? console.log("Whew! You can save all of your hard work in one place!"): console.log("Sorry you are at" + " " + storageUsed + "% total storage");
//create alert for statement of how much storage is left on hard drive
alert("You have " + " " + storageUsed + "% total storage left");
