let username = document.getElementById('username')
let password = document.getElementById('password')
let email = document.getElementById('email')
let tel = document.getElementById('tel')
let x = 1

function validform(){

    if(username.value == ""){
        document.getElementById('nameerror').innerHTML = 'enter your username'
        x = 0
    }
    else{
        document.getElementById('nameerror').innerHTML = ''
        x = 1
    }
    if(email.value == ""){
        document.getElementById('emailerror').innerHTML = 'enter your mail id'
        x = 0
    }
    else{
        document.getElementById('emailerror').innerHTML = ''
        x = 1
    }
    if(password.value == ""){
        document.getElementById('passerror').innerHTML = 'enter your password'
        x = 0
    }
    else{
        document.getElementById('passerror').innerHTML = ''
        x = 1
    }

    if(password.value == ""){
        document.getElementById('telerror').innerHTML = 'enter your number'
        x = 0
    }
    else{
        document.getElementById('telerror').innerHTML = ''
        x = 1
    }
    if(x){
        return true
    }
    else{
        return false
    }
}
