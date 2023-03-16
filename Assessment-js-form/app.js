let username = document.getElementById('username')
let tel = document.getElementById('tel')
let password = document.getElementById('password')
let x = 1

function validform() {
    if(username.value == ""){
        document.getElementById('usererror').innerHTML = 'enter your name'
         x = 0
        event.preventDefault()
    }
    else if(username.value.length<6){
        document.getElementById('usererror').innerHTML = 'max 6 digit'
         x = 0
        event.preventDefault()
    }
    else{
        document.getElementById('usererror').innerHTML = ''
         x = 1
    }
    if (tel.value == ""){
        document.getElementById('telerror').innerHTML = 'enter your mobile number'
         x = 0
        event.preventDefault()
    }
    else if(tel.value.length<10){
        document.getElementById('telerror').innerHTML = 'enter your 10 digit'
         x = 0
        event.preventDefault()
    }
    else{
        document.getElementById('telerror').innerHTML = ''
         x = 1
    }
    if (password.value == ""){
        document.getElementById('passerror').innerHTML = 'enter your password'
         x = 0
        event.preventDefault()
    }
    else if(password.value.length<8){
        document.getElementById('passerror').innerHTML = 'enter your 8 digit'
         x = 0
        event.preventDefault()
    }
    else{
        document.getElementById('passerror').innerHTML = ''
         x = 1
    }
    if(x){
        return true
    }
    else{
        return false
    }
}