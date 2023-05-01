var person={
    name:'roshan',
    age:23,
    emai:'roshan10kandel@gmail.com',
    phone:987
}

console.log(person.name); //acessing property of object using dot operator

console.log(person['name'])


var phone='name';
console.log('using reference >>',person[phone]) //bracket notation is recommended when working with references
//references=non-initialize variable

