var sum = 0;

function aryFunc() {
    var numbers = [45, 28, 22, 10, 55];
    // numbers.forEach(function(val,idx,ary){
    //     console.log(val,idx,ary);
    //     sum+= val;

    // });
    numbers.forEach(callBackFunc);
    console.log(sum);
    document.getElementById("ary").innerHTML = sum;
}
function callBackFunc(v, i, a) {
    sum += v;
}
var num1 = 10;
var num1 = "hello";
console.log(num1);

let num2 = 10;
console.log(num2);

const num3 = 10;    //상수 바꿀수없음

let p1 = {
    name: "Hong",
    age: 20
}
let p2 = {
    name: "Park",
    age: 25
}
let p3 = {
    name: "Choi",
    age: 30
}
let persons = [p1, p2, p3];
persons.forEach(function (a, b, c) {
    console.log(a, b, c);
    console.log(a.name + "," + a.age);
});
persons.sort(function (a, b) {
    if (a.name < b.name) return -1;
    else return 1;
    // return a.name-b.name;
});
persons.forEach((a, b, c) => {
    console.log(`value: ${a.name}, index:${b}`);
});


numbers = [45, 38, 66, 92, 18, 100];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers[0]);
// numbers.sort(function(a,b){//-값 오름차순 
//     return a-b;
// });
// numbers.forEach(function(a){
// console.log(a);
// })
console.log("-----------");
let newNum = numbers.map(function (a,b,c) {
    console.log(`a:${a}, b:${b},c:${c}`);
    return a*b;
});
console.log(newNum);
console.log("---------------");
let theNew = newNum.filter(function(a,b,c){
    return a > 0;
});
console.log(theNew);
console.log("-----------");
let anotherNew = theNew.reduce((a,b,c)=>{
    console.log(`a:${a}, b:${b},c:${c}`);
    // return (a+b) /2;
    // if(a>b){
    //     return a;
    // }else{
    //     return b;
    // }
    return a > b? b:a;
});
console.log(anotherNew);