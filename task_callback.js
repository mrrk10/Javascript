/* Task==>Prepare as story to ask money with parent.Parent told to wait few days till they receive
salary. Perform som non-blocking task. Once they receive salary(once you receive callback).Now buy phone,
laptop,cycle.
*/

function askMoney(money,cb){
    console.log("Parent told to wait for money");
    setTimeout(function(){
        console.log("I receive some money");
        cb();
    },3000);
}
console.log("I ask for some money to my parents");
askMoney(1000,function(){
    console.log("I will buy laptop");
})
console.log("I will do coding");



/*Task:2==>Create as story fot buying laptop
*/

function buyLaptop(laptop,cb){
    console.log("Shopkeeper told to wiat me  for till evening");
    setTimeout(function(){
        console.log('Laptop recieved at shop');
        cb();
    },3000);
        
    }

console.log("I want to buy laptop");
buyLaptop('dell',function(){
    console.log("I received laptop");
    console.log("I will do coding");   
});

console.log("i will got to collge");
console.log("I will take a bath");