//hw1


const gmailInput=document.querySelector('#gmail_input')
const gmailButton=document.querySelector('#gmail_button')
const gmailResult=document.querySelector('#gmail_result')

const regEx=/^[.]\w+@gmail.com$/

gmailButton.addEventListener('click', ()=>{
    if (regEx.test(gmailInput.volume)){
        gmailResult.innerHTML='Welcome!'
    }else {
        gmailResult.innerHTML='Try one more time'
    }
})

const childBlock = document.querySelector('.child_block')

let pos1 = 0
let pos2=0
const move=()=>{
    if (pos1<449 && pos2===0){
        pos1+=2
        childBlock.style.left = pos1 + 'px'
        setTimeout(move,10)
    }else if (pos1>=449 && pos2<449){
        pos2+=2
        childBlock.style.top = pos2 + 'px'
        setTimeout(move,10)
    }else if (pos1>0 && pos2>0){
        pos1-=2
        childBlock.style.left = pos1 + 'px'
        setTimeout(move,10)
    }else if (pos1===0 && pos2>0){
        pos2-=2
        childBlock.style.top = pos2 + 'px'
        setTimeout(move,10)
    }
}
move()


// const moveRight=()=>{
//     childBlock.style.left = pos+'px';



