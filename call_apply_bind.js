// call()==> using call(), we can acess another object property in another object's method.

var personalDetails={
    fname:'roshan',
    lname:'kandel',
    address:'ktm',
    phone:12345,
    details:function(){
        console.log('Person name:' +this.name);
    }
}

var personalDetails2={
    fname:'himal',
    lname:'kshetri',
    address:'lalitpur',
    details1:function(){
        console.log('Person name:' +this.phone);
    }
}
personalDetails2.details1.call(personalDetails);


// if we want to access the property of an object by outer function.It can be written as

var inst={
    name:'ncit',
    add:'balkumari',
    faculty:'BEIT',
    year:2017

}

var info=function(){
    console.log('Details of student>>>>',this.name+" "+this.add+" "+" "+this.faculty+" "+this.year);
}

info.call(inst);

// passing argument 
var intro={
    name:'ncit',
    add:'balkumari',
    faculty:'BEIT',
    year:2017

}

var info=function(prgm_language,developer){
    console.log('Details of student>>>>',this.name+" "+this.add+" "+" "+this.faculty+" "+this.year+" "+prgm_language+" "+developer);
}
// call() ==>The call() method takes arguments separately.
info.call(intro,"Javascript","Full-stack");

// apply() ==>The call() method takes arguments in an array
info.call(intro,["python","backend"]);

// bind()==> The bind()method takes argument 