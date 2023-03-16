let username = document.getElementById('username')
let password = document.getElementById('password')
let email = document.getElementById('email')
let tel = document.getElementById('tel')
let x = 1


function validform(){

    if(username.value == ""){
        document.getElementById('nameerror').innerHTML = 'please write name'
        x = 0
        event.preventDefault
    }

    else{
        document.getElementById('nameerror').innerHTML = ''
        x = 1
    }
    if(email.value == ""){
        document.getElementById('emailerror').innerHTML = 'enter your mail id'
        x = 0
        event.preventDefault()

    }
    else{
        document.getElementById('emailerror').innerHTML = ''
        x = 1
    }
    if(password.value == ""){
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

    if(tel.value == ""){
        document.getElementById('telerror').innerHTML = 'enter your number'
        x = 0
        event.preventDefault()

    }
    else if(!tel.value.startsWith('+91')){
        document.getElementById('telerror').innerHTML = 'enter your + country number'
        x = 0
        event.preventDefault()

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