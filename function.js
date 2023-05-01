// two ways of writing a function
// 1.expression  function
// 2.declaration function

// 1.expression fucntion
// var welcome= function(){
//     console.log('Welcome')
    
// }

// welcome()

// 2.declaration function

// function decFunc(){
//     console.log('this is a declarative function')
// }
// decFunc();

/* major difference between expression and declarative function is that expression function cannot be 
called before the function where as declarative funvtion can be called anywhere   (it's due to hoisting)*/
// hoisting=>declare all the variable at the top.
/* welcome();  cannot be decared above */

// var welcome= function(){
//     console.log('Welcome')
    
// }

// decFunc();
// function decFunc(){
//         console.log('this is a declarative function')
//  }

//  type of function 
// 1.namedd function
// 2.unnamed function(anonymous)function (mostly used in js)
// function(){
//   }

// 3.function with argument
// 4.function with return type
// 5.IIFE(immediately invoked functional expression)
// >>IIFE le function call nagari function invoked garxa
// 5.IIFE
    // syntax
    // () ();
        // eg.(welcome)();
// IIFE in anonymous function
//IIFE cannot be used more than once

// (function()
// {
//     console.log('This is a IIFE use in anonymous function ')
// })();

// 2.anonymous function
    // we cannot assign variable.  var a=function(){

    // }

// 3.function with argument

// function welcome(name,dest){
//     var text="hey"+name+"welcome to"+dest;
//     console.log(text);
// }

// welcome('ram','npj');
// welcome('shyam','ktm');
// welcome(null,'bkt');

// //  If there is more than two argument it is recommended to do from object

// function sendMail(to,sub,msg,form,cc,replyTo,bcc){
//     //content generator
// }

// // we shold do above as
// // dherai argument xa vane single argument ma lagne and use object

// function sendNewMail(details){
//     console.log(details)
// }

// sendNewMail({
//     from:'roshan10kandel@gmail.com',
//     sub:'Programming',
//     msg:'hey',
//     from:'roshankandel100@gmail.com',
//     cc:'cc',
//     replyTo:'diuid',
//     bcc:'wde'

// })

// // flasy values=> null,undefined,'',NaN

// // 4.function with return type

// function add(num1,num2){
//     var res=num1+num2;
//     var op=num1-num2;
//     return {res,op}  //always use bracket for two paramter //object short hand
//     console.log('after retutn nothing will be executed')
// } 

// var a=add(5,3)
// var b=add(6,2)
// var c=add(10,9)
// console.log (a,b,c)


// function fruVeg(){
//     var fruits:['mango','pineapple','apple']
//     var vegitables:['potato','peas','cauli']
//     return {fruits:fruits,
//             vegitables:vegitables            };
      
//         // it can bealso written as
//         // return {fruits,vegitables} //object short hand
// }

// var fg=fruVeg();
// console.log(fg)


// //object short hand

// function getNames(){
//     return{
//     name:['a'],
//     address:'tinkue',
//     email:'roshan10kandel@gmail.com'
// };
// }

// var a=getNames();
// console.log(a)
// var {name,address}=getNames();  // object destruct={name,addres} 
// console.log(name,address)

//array destruction

const alphabet=['A','B','C','D','E','F']
const numbers=[1,2,3,4,5,6,7,8]

// const [a,b]=alphabet
// const[a,,c]=alphabet
const[a,,c,...rest]=alphabet

console.log(a)
// console.log(b)
console.log(c)
console.log(rest)


// Array destruct in function

function sumSub(num1,num2){
    var sum=num1+num2;
    var sub=num1=num2;
    return [sum,sub,div="no divison"]
}

var [sum,sub]=sumSub(4,1)
console.log(sum,sub,div)


//Object destruct

function personOne(){
   return{
    name:'roshan',
    age:23,
    address:{city:'ktm',province:'bagmati'}
   };
}

var {name,age,address:{city}}=personOne();
console.log(name,age)
    

// object concatenation

const firstPerson={
    name:'harry',
    age:30,
    emai:'harry@gmail.com'
}

const secondPerson={
    city:'ktm',
    phone:9889898
}

var thirdPerson={...firstPerson,...secondPerson} //concatenate two objct and override objects if matches
console.log('concatenation of obejct in es6\n',thirdPerson)

console.log(firstPerson.age)


//using object destruct in function paramter
function printUsername(user){
    console.log(`Name is: ${firstPerson.name}.Age is ${firstPerson.age}`);
                            // or
    // console.log(`Name is: ${user.name}.Age is ${user.age}`);
}
printUsername(firstPerson);

//we can write above as
function printUsername2({name,age,emai}){
    console.log(`Name is:${firstPerson.name}.Age is ${age},Email is ${emai}`)


}
printUsername2(firstPerson);
