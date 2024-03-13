let person = {
    name: 'John',
    age: 25
};

//dot notation to change

person.age = 30;

console.log(person);

//bracket notation to change

person['age'] = 32;
console.log(person);
// or let selection ='name';
//person[selection] = 'Jane';