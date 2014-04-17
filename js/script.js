/**
 * Conditional_Industry-Based Created by Phirom Yim on 4/17/14.
 */
//Using Conditional Operators, Arrays and Ternary in Conditional Statement
//Calculate the amount of space in a 50g external hard drive with files for Web Design and Development
//create a variable for hard drive space
var hardDrive = 50;//define hard drive space at 50 gigs
//user input how large the files are in gigs
var files = Number (prompt ("How many gigs of file do you have?"));
//create a variable to calculate the amount left by the percentage of new files will take up in hard drive
//total storage is files divided by hard drive and multiplied by 100 to get percentage
var storageNeed = hardDrive - files;//the storage needed is 50 gigs minus user input amount file gigs
//create variable expression for calculating the storage percentage
//storage percent is calculated by the amount of needed storage by 50 gig times 100
var storagePercent = storageNeed / hardDrive * 100;
//create a variable to calculates how much storage is being used
//to find out how much storage is used from 50gig (100%) subtract storage percent by 100
var storageUsed = 100 - storagePercent;
//create a variable that calculates how much is left on the hard drive
//50gig is 100 percent and subtract how much storage used to get remaining hard drive space
var driveSpace = 100 - storageUsed;
//create ternary to print if true or else statement if false
(driveSpace >= storageUsed) ? console.log("Whew! You can save all of your hard work in one place!"): console.log("Sorry you are at" + " " + driveSpace + "% total storage");
//create alert for statement of how much storage is left on hard drive
alert("You have " + " " + driveSpace + "% total storage left");
