let numbers=[25,88,66,99];
let result=numbers.some(myfunction);
function myfunction(value){
return value==88 || value==99;
}
console.log(result);