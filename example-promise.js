// function getTempCallback (location, callback){
//     callback(undefined, 78); //case for no error
//     callback('City cannot be showed'); //case for error
// }
//
// getTempCallback('Philadelphia', function(err,temp) { //this is the start of the second parameter
//     if(err){
//         console.log('error', err);
//     } else{
//         console.log('success', temp);
//     }
// }); //this is the end of the second parameter
//
// function getTempPromise(location){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve(79);
//             reject('City not found');
//         },1000)
//
//     });
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//     console.log('promise success', temp);
// }, function (err){
//     console.log('promise',err);
// });

//challenge area


function addPromise (a,b){
    return new Promise(function(resolve,reject){
      if (typeof a ==='number' && typeof b==='number'){
          resolve(a+b);
      } else {
          reject('a and b need to be numbers');
      }
    });
}

addPromise(2,3).then(function(sum){
    console.log('success',sum);
}, function(err){
    console.log('error', err);
});

addPromise('andrew',9).then(function(sum){
    console.log('this should not show up');
}, function(err){
    console.log('This should appear',err);
});
