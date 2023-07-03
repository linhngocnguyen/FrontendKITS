console.log("DOM API Demo");

function effect(color){
    //Doi mau vien level-2
    let l2Nodes=document.querySelectorAll('.level-2');

    for(let n of l2Nodes) {
        n.style.borderColor='red';
    }
}

// const colors = ['#FF0000', '#FF00FF', '#FFFF00', '#00FF00'];
// let colorIdx = 0;
// setInterval(function() {
//     effect(colors[colorIdx]);
//     colorIdx = (colorIdx + 1) % colors.length;
// }, 50);

let elem=document.createElement('h3');
elem.innerText = 'Hello World';
document.querySelector('.level-1').appendChild(elem);