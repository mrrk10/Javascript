// Example-1
// var a=new Promise(function(resolve,reject){
//     const a=20;
//     if (a==10){
//         resolve();
        
// ;    }
//         else{
//             reject();
//         }
     
// })

// a.  then(function(){
//     console.log('sucess'),function(){
//         console.log(failure);
//     }
// })
//     .catch(function(){
//         console.log("error message");
//     })



// Example-2
// var p=new Promise(function(resolve,reject){
//     let a=2+3;
//     if (a==5){
//         resolve('sucess');
//     }
//     else{
//         reject('failes');
//     }
// });

// p   
//     .then(function(msg){console.log("It is " + msg);
//     })
//     .catch(function(msg){
//         console.log('It is '+msg);
//     });


// Example-3 ===> to do

// function videREcorder1(){
//     return new Promise(resolve,reject)
//     {
//         resolve('video record 1');
//     }
// }
// function videREcorder2(){
//     return new Promise(resolve,reject)
//     {
//         resolve('video record 2');
//     }
// }
// function videREcorder3(){
//     return new Promise(resolve,reject)
//     {
//         resolve('video record 3');
//     }
// }

// Promise
//             .all([videREcorder1(),videREcorder2(),videREcorder3()])
//             .then(function(msg){
//                 console.log(msg)
//             })

/////////////////////////////////////////////////////////////////////////////////////////////////


const videoReEcorder1(){
        return new Promise(resolve,reject)
        {
            resolve('video record 1');
        }
    }
    function videREcorder2(){
        return new Promise(resolve,reject)
        {
            resolve('video record 2');
        }
    }
    function videREcorder3(){
        return new Promise(resolve,reject)
        {
            resolve('video record 3');
        }
    }
    
    Promise
                .all([videREcorder1(),videREcorder2(),videREcorder3()])
                .then(function(msg){
                    console.log(msg)
                })