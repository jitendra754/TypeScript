var global_num=12;
class Numbers{
num_value = 13;
static sval=10;
StoreNum():void{
    var local_num=14;
}
}
console.log("Global Num "+global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log("Global Num "+obj.num_value);
