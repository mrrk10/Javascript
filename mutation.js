// mutation

var obj={
    name:'roshan',
    address:'imadol',
    phone:237827
}

console.log('Object above >>>',obj);

function sendMail(details){
    console.log(details);
    details.name='Kadel';

}

sendMail(obj);
console.log('Object below>>',obj);