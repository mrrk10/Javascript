// function name(){
//     console.log('This is a function');
// }

// console.log('This is a non-function');
// name();

// a={
//     a:'apple',
//     b:'ball',
//     ab:function(){
//         return 'This is a method';
//     }
// }

// console.log(a.ab());



// a={
//     name:'roshan',
//     address:'lalitpur',
//     phone:1234,
//     ftn:function(){
//         console.log(this.name);
//     }
// }

// a.ftn();



// a=[[1,2,3],[4,5,6],[7,8,9]];
// var sum=0;
// for(var i in a){
//     for(var j in a){
//         sum=sum+a[i][j];

//     }
// }
// console.log("the sum of 2D array is,",sum);

// a=[1,2,3,4,5,6,7,8,9],[1,3,4,5,6,7,8,9];
// var sum=0;
// a.forEach(function(value){
//     sum=sum+value;
// });

// console.log(sum);



// Sum of 2D array using forEach loop
// twoDArr=[[1,2,3],[4,5,6],[7,8,9]];
// console.log(arr[0]);
// var sumTwoD=0;
// var arrSum=function(){
//     for(let i=0;i<twoDArr.length;i++){
//         twoDArr[i].forEach(value => {
//             console.log(value);
//             sumTwoD=sumTwoD+value;
            
//         });;
//     }
// console.log('sum of 2D array>>',sumTwoD);

    // arr.forEach(function(value,index){
        // console.log(value[0][1]);
        

    // console.log(sum1+sum2+sum3);
    // sum=sum+value[index];

// var result=arrSum();
// console.log(result);

// Sum of 3D array

// threeDArr=[[[1,2,3]],[[4,5,6]],[[7,8,9]]];
// // console.log(arr[0]);
// var sumthreeD=0;
// // var arrSum=function(){
//     for(let i=0;i<threeDArr.length;i++){
//         threeDArr[i].forEach(value => {
//             console.log(value);
//             for(let j=0;j<value.length;j++){
//                 sumthreeD=sumthreeD+value[j];
//         }
        

//         });
//     }
    
// console.log('sum of 3D array>>',sumthreeD);



// const outerfun=(a)=>{
//     let b=10;
//     const innerfun=()=>{
//         let sum=a+b;
//         console.log('Sum is>>>',sum);
//     }
//    return innerfun;
// }

// var fun=outerfun(10);
// fun();


// const arr=[3,4,5,6,7];

// arr.map((item,index)=>{
//     return ++item;
// })



// console.log(myFunction());

// task 1: calculate absolute sum of an array

// const arr=[12,322,43,3232,-2,-3232];

// let sum=0
// arr.map((item,index)=>{
//     if(item <0){
//         num=Math.abs(item);
//         // item=-(item);
//         return sum=sum+num
//     }
//     else{
//         return sum=sum+item;
//     }
// })

// console.log(sum);


// task 2:

// const arr=[12,322,43,3232,-2,-3232];

// arr.filter((item,index)=>{
//     if(item<0 && item>0) {
//         return -item
//     }
    
// console.log(item)    

// })

// arr.filter((item,index)=>{
//     if(item>0){
//         return item
//     }
// console.log(item)   
// })

// const arr=[12,322,43,3232,-2,-3232];

// arr.reduce((totaVal,currentValue,currentIndex,currentArr,initialValue)=>{
//     console.log(totalVal)
//     console.log(currentVal)
//     console.log(currentIndex)
//     console.log(totalVal)
//     console.log(initialValue)
// })

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }
// console.log(i)  




