// ############## task part #################

// function askForNote(topic,cb){
//     console.log('friend receives call and insist to callback after');
//     setTimeout(function(){
//         console.log('friend find a note');
//         cb(null,'pdf');

//     },3000);
  
// }
const askForNote=require('./askForNote');
function printNote(pdf,cb){
    console.log('note is in stationary and shopkeeeper told me not call when printing is completed');
    setTimeout(function(){
        console.log('printing completed');
        cb(null,'printedNote');

    },2000);
    
}

function entertainmnet(cb){
    setTimeout(function(){
        cb();
    },2000);
    
}
// ####### task part  ####################


// ######## execution part ##############

console.log('start  preparation for exam');
console.log('call a friend for note');
askForNote('database',function(err,done){
    console.log('I am result of askForNote');
    if(err){
        console.log('error in askForNote >>',err);
    }
    else{
        console.log('sucess in askForNote >>',done);
        console.log('note is in  >>',done);
        console.log('note is in pdf so I have to print noote');
        printNote('sskd',function(err,done){
            if(err){
                console.log('error in print',err);
            }
            else{
                console.log('sucess in printNote',done);
            }
            entertainmnet(function(){
                console.log("Entertainmnet completed");
                console.log("Now started studying");
            });
            console.log("Electricity cut off");
            console.log("mom called");
        });
        console.log('meet friends');
        console.log('have coffee');

        
    }
})
console.log('eat food');    



