var global_num = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_value = 13;
    }
    Numbers.prototype.StoreNum = function () {
        var local_num = 14;
    };
    Numbers.sval = 10;
    return Numbers;
}());
console.log("Global Num " + global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log("Global Num " + obj.num_value);
