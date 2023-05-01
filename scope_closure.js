function welcome(name){
    function setPlace(place){
        var msg=`hi ${name}, welcome to ${place}`;
        return msg;
    }
    return setPlace;

}

var res=welcome('ram');;
// console.log(res('tinkune'))
res1=welcome('shyam')('baneshowr');
res2=welcome('hari')('thapathali');
console.log(res1);
console.log(res2);

// write a function to add three numbers
// you must call a function as below

// var result=addition(2)(3)(4);
// console.log('result>>>',result);
function add(num1){
    function secondNumber(num2){
        function thirdNumber(num3){
           var op=num1+num2+num3;
           return op;
        }
        return thirdNumber;
    
    }
    return secondNumber;
    

}

var output1=add(2)(3)(4);
console.log('addition>>>>>',output1);

// closure summary
// cosure=>combination of function itself and inner fun
// 1. only way to encapsulate in js is with the help of closure
// 2.we can make private by declaring variable in inner fucnction=>it is called encapsulation in js
// => 
a=20 /*global*/
function outer(){
    var b=20 
    function inner(){
      
        var c=30 /*private  for inner function and cannot acess by outer fun*/
        console.log('closure>>>'+a+' '+b)
        }
        inner()
    }

    outer()