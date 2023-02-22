let nam=document.getElementById('name')
let pass=document.getElementById('password')
let tele=document.getElementById('telephone')
let mail=document.getElementById('email')
let one=document.getElementById('first')
let two=document.getElementById('second')
let three=document.getElementById('third')
let four=document.getElementById('fourth')

function lakshya(){
    event.preventDefault()
    if(nam.value==''){
        one.innerHTML='enter your username'
    }
    else{
        one.innerHTML=''
    }
    // return false

    if(pass.value==''){
        two.innerHTML='must required'
    }
    else if(pass.value.length<8){
        two.innerHTML='enter atleast 8 digits'
    }
    else{
        two.innerHTML=''
    }

    // ----
    if(tele.value==''){
        three.innerHTML='must required'
    }
    else if(isNaN(tele)){
        three.innerHTML='enter only numeric value'
    }
    else if(tele.value.length > 10){
        three.innerHTML='enter 10 values'
    }
    else{
        three.innerHTML=''
    }
    return false
}