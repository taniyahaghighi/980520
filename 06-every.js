let numbers=[1,12,18,-1];
let result=numbers.every(myfunction);
function myfunction(value){
    return value>0;
}
console.log(result);