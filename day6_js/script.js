const options ={
    name: 0,
    age: 1,
    gender: 2
}

let Name="";
let age="";
let gender="";

function onChange(value, index){
    let change=document.querySelector('.content');
    if (index==options.name){
        Name=value;
    }
    else if (index==options.age){
        age=value;
    }
    else if (index==options.gender){
        gender=value;
    }
    change.innerHTML=`
    <span>Name: ${Name}</span> <br>
    <span>Age: ${age}</span> <br>
    <span>Gender: ${gender}</span>`;
}
function clearContent(){
    let input=document.querySelectorAll('input, select');
    for (let i=0; i<input.length; i++) {
        input[i].value="";
    }
    let output=document.querySelectorAll('span');
    output[0].innerHTML='<span>Name: </span>';
    output[1].innerHTML='<span>Age: </span>';
    output[2].innerHTML='<span>Gender: </span>';
}