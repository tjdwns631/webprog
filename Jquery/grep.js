let members = [];
members.push({name:"hong",point:80});
members.push({name:"hwang",point:100});
members.push({name:"park",point:95});
members.push({name:"choi",point:50});
members.push({name:"ryu",point:30});

$(members).each((a,b)=>{
    console.log(a,b);
});

let grepmem=$.grep(members, (a,b)=>{
    console.log(a,b);
    return(a.point>50? a:null);
});
let sum =$(grepmem).map((a,b)=>{
    return b.point;
}).get();
console.clear();
console.log("전체point 값: " + sum);

let memName=$(members).map((a,b)=>{
    return b.name;
});
let ind = $.inArray('ryu',memName);
for(let i=0; i<memName.length; i++){
    if(memName[i]== 'ryu'){
        ind=i;
    }
}