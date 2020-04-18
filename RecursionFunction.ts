// Recursive function
function factorial(num:number){
if(num<=0){
    return 1;
} else {
    return(num * factorial(num-1));
}
}
console.log("Output: "+factorial(6));

// Anonymous Recursive function
(function ()
{
    var x="Hello !!";
    console.log(x);
}
)
()