module.exports=function askForNote(topic,cb){
    console.log('friend receives call and insist to callback after');
    setTimeout(function(){
        console.log('friend find a note');
        cb(null,'pdf');

    },3000);
}