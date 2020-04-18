//function without parameter
function greet():string {
    return "Hello World"
}
function caller(){
    var msg=greet();
    console.log(msg);
}
caller();

//function with parameter and optional param
function test_param(name:string,age:number,gender?:string) {
    console.log(name);
    console.log(age);
    console.log(gender);
}
test_param("Jitendra",24,"male");
test_param("Aakash",22);

//Anonymous function
var myfunction=new Function("a","b","return a*b");
var x=myfunction(4,3);
console.log(x);