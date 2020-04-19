class Car { 
    //field 
    engine:string; 
  
    //constructor 
    constructor(engine:string) { 
       this.engine = engine 
    }  
 
    //function 
    disp():void { 
       console.log("Engine is  :   "+this.engine) 
    } 
 }

//create an object 
var obj = new Car("XXSY1")

//access the field 
console.log("Reading attribute value Engine as :  "+obj.engine)  

//access the function
obj.disp()

// Class Inheritance
class Shape { 
    Area:number 
    
    constructor(a:number) { 
       this.Area = a 
    } 
 } 
 
 class Circle extends Shape { 
    disp():void { 
       console.log("Area of the circle:  "+this.Area) 
    } 
 }
   
 var cir = new Circle(223); 
 cir.disp()

// Method overriding
 class PrinterClass { 
    doPrint():void {
       console.log("doPrint() from Parent called…") 
    } 
 } 
 
 class StringPrinter extends PrinterClass { 
    doPrint():void { 
       super.doPrint() 
       console.log("doPrint() is printing a string…")
    } 
 } 
 
 var prnt = new StringPrinter() 
 prnt.doPrint()

 //Sttaic datamember and method
 class StaticMem {  
    static num:number; 
    
    static disp():void { 
       console.log("The value of num is"+ StaticMem.num) 
    } 
 } 
 
 StaticMem.num = 12     // initialize the static variable 
 StaticMem.disp()      // invoke the static method