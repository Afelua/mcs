var a = 5;
var b = -7;
var d = 2;
var c =  (a + b) * d;
console.log(c);

console.log(a==b);
var e = 5;

console.log(a==e);

var f = "5";

console.log(a==f);
console.log(a===f);

console.log(a>b);
console.log(d<a);

console.log(a<=e);

console.log(a!=f);
console.log(a!==f);

var i = 10;

console.log(i);

if (i<5){
	console.log("Переменная " + i + " меньше 5");
 	i++;
}

// console.log(i);

// var age = prompt("Сколько вам лет");
// console.log(age);


// confirm("Вы-администратор?");



for(i=0; i<5; i++){
	console.log(i);
	console.log('----');
}


var my_array = [ 1, 2, 3, 45, 6645];
var names = ['Вася', 'Дима', 'Петя', 'Надя'];

console.log(my_array[0]);
console.log(my_array[1]);
console.log(my_array[2]);

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

function simpleFunction(){
	console.log(1);
}

simpleFunction();

function complexFunction(value){
	console.log(value);
}

complexFunction(4);
complexFunction(40);


function calcSquare(a, b, c){
	console.log(a*b);
}

calcSquare(3, 5, 7);


function showArray(array){

	for(i=0; i<3; i++){
		console.log(array[i]);
	}
}

showArray(my_array);
showArray(names);


function Values(){
	var a = 1;
	console.log(a);
}

Values();
console.log(a);


var student1 = {
	name: "Кирилл",
	surname: 'Михайлов',
	age: 22
}

var student2 = {
	name: "Михаил",
	surname: 'Иванов',
	age: 25
}

var pet = {
	color: "white",
	age: 8
}


console.log(student1.name);
console.log(student1.surname);
console.log(pet.age);
console.log(student2);
