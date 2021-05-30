const day18 = require('./queuesAndStacks.js');

mainTitle();

loadDaySolution(day18, day18.excecute);

function mainTitle() {
	console.log("HACKER RANK");
	console.log("30 Days of Code.");
	console.log("-----------------")
};

function loadDaySolution(challenge, exc){
	console.log("Day ", challenge.day, ", ", challenge.title);
	console.log("Solution: \n");
	exc();
}