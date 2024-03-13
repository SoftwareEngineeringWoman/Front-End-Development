
function greet(){
    console.log('Hello');   //logic is print 
}                           // no semicolon
greet();                    // prints hello



function greet(name, lastName){    // name is Parameter which has John argument
    console.log('Hello' + name+ ''+ lastName);   //logic is print and concat name
}                           // no semicolon
greet(John);           // prints hello John  // John is ARGUMENT

greet('Mary');           // prints hello John  // John is ARGUMENT
greet('Mary', 'Smith');   // prints hello Mary Smith

////TYPES
//performing a task

// calculate value

function square(number){
    return number * number;   // return value whoever is calling 
}

let nmbr= square(10);    // save it in variable
console.log(nmbr);
// or console.log(square(10));