// Lambda function
var foo = function (x) { return 100 + x; };
console.log("Output: " + foo(10));
// Lambda function with braces
var foo1 = function (x) {
    x = 100 + x;
    console.log("Output: " + x);
};
foo1(100);
// Syntatic variable
var func = function (x) {
    if (typeof x == "number") {
        console.log(x + " is Number");
    }
    else if (typeof x == "string") {
        console.log(x + " is String");
    }
};
func(12);
func("JK");
