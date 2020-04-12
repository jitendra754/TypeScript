var myName:string="john";
var score1:number=50;
var score2:number=42.50;
var sum=score1 + score2;

console.log("Name: " + myName);
console.log("First Score: " + score1);
console.log("Second Score: " + score2);
console.log("Sum Of Score: " + sum);

//Type Assertion

var star="1";
var star1:number=<number> <any>star;
console.log(typeof(star1));