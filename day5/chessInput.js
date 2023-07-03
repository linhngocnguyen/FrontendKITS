function generate(){
    var n=document.querySelector('input').value;
    var chessBoard = document.querySelector('.chessBoard');
    chessBoard.innerHTML='';
    for (var i = 0; i < n; i++) {
        var row = chessBoard.appendChild(document.createElement("div"));
        row.style.height = 30 + "px";
        for (var j = 0; j < n; j++) {
            var cell = document.createElement('span');
            if((i+j)%2!=0){
                cell.style.backgroundColor = 'black';
            }
            row.appendChild(cell);
        }
    }
    chessBoard.style.width=(31.33*n+2*(n+1)) + "px";
    chessBoard.style.height=(31.33*n+2*(n+1)) + "px";
    
    document.body.appendChild(chessBoard);
}
