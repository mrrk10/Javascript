var arr=["roshan",'kandel','kshetri'];

var add=function(name,callback){
    setTimeout(function(){
        arr.push(name);
        callback();
    },2000);
    
}

var show=function(){
    setTimeout(function(){
        console.log(arr);
    },1000);

}

add('roshani',show);
