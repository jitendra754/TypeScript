function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, "Smith");
//emp.prototype.email="kk@gmail.com";
console.log("Employee id :" + emp.id);
console.log("Employee name :" + emp.name);
//console.log("Employee email :"+emp.email);
// Exponential of Number
var num = 1225.30;
var num1 = num.toExponential();
console.log(num1);
// toFixed of Number
var num = 177.234;
console.log(num.toFixed());
console.log(num.toFixed(2));
console.log(num.toFixed(6));
// toLocaleString of Number
var num2 = new Number(177.1234);
console.log(num2.toLocaleString());
console.log(num2.toString());
console.log(num2.valueOf());
