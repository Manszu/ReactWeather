function getTempCallback (location, callback){
    callback(undefined, 78); //case for no error
    callback('City cannot be showed'); //case for error
}

getTempCallback('Philadelphia', function(err,temp) { //this is the start of the second parameter
    if(err){
        console.log('error', err);
    } else{
        console.log('success', temp);
    }
}); //this is the end of the second parameter