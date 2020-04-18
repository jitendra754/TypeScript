//Array declaration by various way
var arr_name = new Array(4);
for (var i = 0; i < arr_name.length; i++) {
    arr_name[i] = i * 2;
    console.log(arr_name[i]);
}
var arr_first;
arr_first = ["1", "2", "3", "4", "5"];
console.log(arr_first);
console.log("Reversed Array: " + arr_first.reverse());
var arr_second = new Array("1", "2", "3", "4", "5");
console.log(arr_second);
// For Each Loop
arr_second.forEach(function (value) {
    console.log(value);
});
// join in array element with some character
console.log("Joined character shows: " + arr_first.join("+"));
var arr3 = [1, 9, 4];
console.log(arr3.map(Math.sqrt));
console.log("Sorted Array: " + arr3.sort());
var total = arr3.reduce(function (a, b) { return a + b; });
console.log("Total : " + total);
//Traversal using in
var j;
for (j in arr3) {
    console.log(arr3[j]);
}
// Array Destructuring
var arr4 = [12, 13];
var x = arr4[0], y = arr4[1];
console.log(x);
console.log(y);
// Array store hetrogeneous type data
var arr5 = [20, "Hello", 15];
console.log(arr5[0]);
console.log(arr5[1]);
