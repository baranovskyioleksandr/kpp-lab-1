{
 let from=0, to=9, n = 4;
 var res = [...Array(to-from+1).keys()].map(i=>i+from) // range
	 .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), []) // shuffle
	 .slice(0, n); // slice n

}

function contrast() {
var chek = false;
var bull = 0,
	cows = 0;
 var readline = require('readline-sync');
 var enteredNumber = readline.question('\n enter your number, please \n');
if (enteredNumber.length < 4 || enteredNumber.length > 4) {
	console.log('wrong number')
 } else {
	for(var i = 0; i < res.length; i++) {
		if(res[i] == enteredNumber.charAt(i)) {
			bull++; 
			continue;
		}
		if(enteredNumber.indexOf(res[i]) !=-1) {
			cows++;
		}
	}
	console.log(bull + 'bulls' , cows + 'cows');
	if (bull === 4) {
		chek = true;
		console.log('you are winner')
	}
 }
 	return chek;
}
do {
	contrast();
}
while (!contrast())
// while (!contrast()) {
// 	contrast();
// } 

