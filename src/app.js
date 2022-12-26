const p1btn=document.querySelector('#p1btn')
const p2btn=document.querySelector('#p2btn')
const player1=document.querySelector('#player1')
const player2=document.querySelector('#player2')
const resetBtn=document.querySelector('#resetBtn')
const winScoreSelect=document.querySelector('#winScoreSelect')
let winningScore=3
let p1score=0
let gameOver=false
p1btn.addEventListener('click',(e)=>{
    if (!gameOver){
        p1score+=1
        if(p1score===winningScore){
            gameOver=true 
            player1.classList.add('has-text-success')
            player2.classList.add('has-text-danger')
            p1btn.disabled=true
            p2btn.disabled=true
        }
        player1.textContent=p1score
    }
})

let p2score=0
p2btn.addEventListener('click',(e)=>{
    if (!gameOver){
        p2score+=1
        if(p2score===winningScore){
            gameOver=true  
            player2.classList.add('has-text-success')
            player1.classList.add('has-text-danger') 
            p1btn.disabled=true
            p2btn.disabled=true
        }
        player2.textContent=p2score
    } 
})

resetBtn.addEventListener('click',reset)

winScoreSelect.addEventListener('change',()=>{
    winningScore=parseInt(winScoreSelect.value)
    reset()
})

function reset(){
    gameOver=false
    p1score=0
    p2score=0
    player1.textContent=p1score
    player2.textContent=p2score
    player1.classList.remove('has-text-success','has-text-danger')
    player2.classList.remove('has-text-success','has-text-danger')
    p1btn.disabled=false
    p2btn.disabled=false
}