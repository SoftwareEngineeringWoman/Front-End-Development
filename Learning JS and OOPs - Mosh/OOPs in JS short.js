//oops is a style that organizes code into objects
//it is better than procedural programming  as pp stores data in variables and funcs
//  in oops, we group related var and funcs together into an object 
//vars are called properties and func are called methods
// i.e. encapsulation
// in ES6, use class instead of object
// we can build multiple objects from the same class

//pp
let baseSalary= 10000;
let overtime= 10;
let rate=20;

function getWage (baseSalary, overtime, rate){
    return baseSalary + overtime + rate;
}

// OOP encapsulation
//object employee
// 3 properties
// method getWage
// reduces complex and increases reusability

let employee = {
    baseSalary: 10000,
    overtime: 10,
    rate:20,
    getWage: function(){
        return this.baseSalary + this.overtime + this.rate;
    }
};
employee.getWage();

// OOP abstraction
//hide properties and methods from outside
//simpler interface
//reduce impact of change


//OOPS inheritance
//mechanism to elimate reduntant code 

//oops polymorphism
// many forms
// technique that allows to get rid of long if else statements
// or switch and case statements // refactor code

