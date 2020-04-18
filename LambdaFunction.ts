// Lambda function
var foo=(x:number)=>100+x
console.log("Output: " +foo(10));
// Lambda function with braces
var foo1=(x:number)=>{
    x=100+x
console.log("Output: " +x);
}
foo1(100);
// Syntatic variable
var func=(x)=>{
    if(typeof x == "number"){
        console.log(x+ " is Number");
    } else if(typeof x == "string"){
        console.log(x+ " is String");
    }
}
func(12);
func("JK");
