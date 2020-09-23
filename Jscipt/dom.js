let days=['일요일','월요일','화요일','수요일','목요일','금요일','토요일']

let dates =[];//배열 선언
for(let i = 1; i<=31; i++){
    dates.push(i);//배열에 추가 1~31
}
function loadPage(){
   let $table = document.createElement("table");
   $table.setAttribute('border','1');
   let $tr = document.createElement("tr");
   for(let day of days){
       let $th = document.createElement("th");
       let text = document.createTextNode(day);
       $th.appendChild(text);
       $tr.appendChild($th); 
   }
   $table.appendChild($tr);
let $td, text;

dates.forEach(function(a,b){
    if(b%7==0){
        $tr =document.createElement("tr");
        $table.appendChild($tr);
    }
    $td =document.createElement("td");
    text = document.createTextNode(a);
    $td.appendChild(text);
    $tr.append($td);
});
   document.getElementById("bdy").appendChild($table);
}
// function loadPage(){
//     let $table =document.createElement("table");
//     let $tr=document.createElement("tr");
//     $table.setAttribute('border', '1');
//     for(day of days){
//         let $th = document.createElement("th");
//         let text =document.createTextNode(day);
//         $tr.appendChild($th);
//         $th.appendChild(text);
//     }
//     $table.appendChild($tr);
//     .forEach(function(a,b){
//         if(b)
//     });

//     document.getElementById("bdy").appendChild($table);


// }