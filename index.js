const day18 = require('./queuesAndStacks.js');
const day19 = require('./interfaces.js');
const day20 = require('./sorting.js');

mainTitle();

loadDaySolution(day18, day18.excecute);
loadDaySolution(day19, day19.excecute);
loadDaySolution(day20, day20.excecute);

function mainTitle() {
	console.log("HACKER RANK");
	console.log("30 Days of Code.");
	console.log("-----------------");
};

function loadDaySolution(challenge, exc){
	console.log("Day ", challenge.day, ", ", challenge.title);
	console.log("Solution: \n");
	exc();
	console.log("-----------------");
}