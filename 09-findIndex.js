let numbers=[7,3,22,5,44];
// let result=numbers.findIndex(function(value){
// return value>5
// });
let result=numbers.findIndex(myfunction);
function myfunction(value){
return value>5
}
console.log(result, numbers[result]);