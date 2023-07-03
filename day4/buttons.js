function addElement (){
    let a=document.createElement('h4');
    a.innerText="This a new line";
    document.body.appendChild(a);
}

function removeElement (){
    document.body.removeChild(document.body.lastChild);
}