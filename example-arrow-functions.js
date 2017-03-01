// var names = ['Krzysiek', 'Julia', 'Marcin'];
//
// names.forEach(function(name){
//     console.log('forEach',name);
// });
//
// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe= (name) => name + '!';
// console.log(returnMe('Andrew'));

// var person= {
//     name: 'Andrew',
//     greet: function () { //anonymous function property
//         names.forEach((name) => {
//             console.log(this.name + 'says hi to' +name)
//         });
//     }
// };
//
// person.greet();

function add(a,b){
    return a+b;
}


//add Statement
var addStatement=(a,b)=> {
    return a+b;
}

//addExpression
var addExpression = (a,b) => a+b;
console.log()

console.log(addStatement(4,7));
console.log(add(1,3));
console.log(add(2,3));

