var students = [];

students.push("김현동");
students.push("김현동");//뒤에추가
students[1]="김도은"; //주소값으로 추가
students.unshift("김다희");//젤앞에 넣음
//김다희,김현동,김도은
// students.pop();//뒤에서 제거
// students.shift();//앞에서 제거
// console.log(students[0]);
// console.log(students[1]);
students.splice(1,0,"이광호","동광희");//아무값을 안넣으면 삭제
for(student of students){
    console.log(student);
}
console.log("------------------")
var newstud = students.slice(1,3);//새로운 배열 만들어줌//첫번쨰index,두번째index
for(student of newstud){
    console.log(student);
}
console.log("-----------");
students.sort();
for(student of students){
    console.log(student);
}
console.log("----------");
var numbers=[4,6,2,9,1,10,100];
numbers.sort(function(a,b){
    console.log(a,b);
    return a-b;// -값 오름차순 
});
for(number of numbers){
    console.log(number);
}
