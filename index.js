

var fs = require('fs');
var readlineSync = require('readline-sync');

var myData  = {};
myData.myStudent = [];



while(true) {
	var select = readlineSync.question('chon 1, 2 or 3 ');
	if (select ==1) {
		var myString = fs.readFileSync('./myData.JSON',{encoding:'utf-8'});
		console.log(JSON.parse(myString));		
	}

	if (select == 2) {
		var classmate = {};
		var name = readlineSync.question('name? ');
		var age = readlineSync.question('age?');
		var gender =  readlineSync.question(' gender (Male/Female): ');

		classmate.name = name;
		classmate.age = age;
		classmate.gender = gender;

		myData.myStudent.push(classmate);

	}

	if (select == 3) {
		fs.writeFileSync('./myData.JSON', JSON.stringify(myData));
		break;
	}
}

