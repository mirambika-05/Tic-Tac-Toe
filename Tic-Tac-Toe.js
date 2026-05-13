let boxes=document.querySelectorAll('.box');
let turnX=true;
let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

boxDisabled=()=>{
    for(let b of boxes){
        b.disabled=true;
    }}
boxEnabled=()=>{
    for(let b of boxes){
        b.disabled=false;
    }}
boxes.forEach(box=>{
    box.addEventListener('click',()=> {
        console.log("Box clicked");

    function turns(){
        if(turnX && box.innerHTML===''){
        box.innerHTML='X';
        box.style.color='blue';
        turnX=false;
    }
    else if(!turnX && box.innerHTML===''){
        box.innerHTML='O';
        box.style.color='red';
        turnX=true;
    }
}
    turns();

    function checkWin(){
        for(let i=0;i<win.length;i++){
            let a=win[i][0];
            let b=win[i][1];
            let c=win[i][2];
        if(boxes[a].innerHTML!=='' && boxes[a].innerHTML===boxes[b].innerHTML && boxes[b].innerHTML===boxes[c].innerHTML){
            document.getElementById('result').classList.remove('hide');
            document.getElementById('result').innerHTML+=boxes[a].innerHTML;
            boxDisabled();
        }
    }
    
}
    checkWin();
})});

let resetBtn=document.getElementById('resetBtn');
resetBtn.addEventListener('click',function(){
    console.log("Resetting box");
    boxes.forEach(box=>{
        box.innerHTML='';
    });
    boxEnabled();
    document.getElementById('result').classList.add('hide');
    document.getElementById('result').innerHTML='';
    turnX=true;
});