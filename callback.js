/*callback: A callback is a function is a function (it can be anonymous function,arrow function)passed
into another function as argument which is then invoked inside the outer function to complete 
some kind of routine or action*/

/*There are two types of function is call back==>>1.Synchrous function
 2.Asynchronous function  */

 /*1.Synchromus function:Execute task in one after another or wait for another tassk to execute.*/
 /*1.Asynchromus function:Do not wait another tassk to execute.*/

//  eg
// console.log('step 1');
// console.log('step 2');

// setTimeout(function(){
//     console.log('step 3');


// },3000);
// console.log('step 4');
// console.log('step 5')




/* from above we see that 'step3' execute after 3 sec.Step 4 do not wait for step3 to execute 
which is called asynchronous*/


//wAP to buy phone

// task part
function buyPhone(model,cb){ //cb==> cb is callback function
    // buyphone=>higher order function
    // higher order function==>function ma function as argument pass gareko
    console.log("Shopkeeper wait to until evening till phone aarive");

    setTimeout(function(){
        console.log("Phone arrives at shop");
        cb();
        },3000);
        
}
// execution part
// to be remember==>callback vaneko exection part bata task part ma jane ho
console.log("I want to buy phone");

buyPhone('iphone',function(){
    //blocking block==> kei task vaisake paxi ball run hunxa
    console.log("I got phone");
    console.log("I takse selfies");
});

//non blocking block==> task hunxa ko lagi kuraina.run vai halxa
console.log("I do coding");
console.log("I take a shower");


/* summary:1.callback is  machanism to handle resilt of async call
           2.callback vaneko result nakurne handle garen mechamism ho
           3.kei time paxi hune task handle vaneko callback ho

/*

/* Task==>Prepare as story to ask money with parent.Parent told to wait few days till they receive
salary. Perform som non-blocking task. Once they receive salary(once you receive callback).Now buy phone,
laptop,cycle.
*/