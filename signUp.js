
function ustype(){
    let usin = document.getElementById("sUsIn").value.length
    let usstate = document.getElementById("UsText")
    if(usin < 4 ){
        usstate.innerHTML = "نام کاربری وارد شده کوتاه تر از حد مجاز است  . \n باید حد اقل از 5 حرف تشکیل شده باشد. \n"
        usstate.style.color = "red"
        usstate.style.display = "inline"
    
    }else{
        usstate.innerHTML = "نام کاربری تایید شد ."
        usstate.style.color = "green"
        usstate.style.display = "inline"
    }
    setInterval(function(){
        usstate.style.display = "none"
        usstate.innerHTML = ""
    }, 10000)
}
function passtype(){
    let passin = document.getElementById("sPassIn").value
    let passstate = document.getElementById("PassText")
    if(passin.length < 7 ){
        passstate.innerHTML = "پسورد وارد شده کوتاه تر از حد مجاز است باید حد اقل از 8 کاراکنر تشکیل شده باشد ."
        passstate.style.color = "red"
        passstate.style.display = "inline"
    
    }else{
        passstate.innerHTML = "پسورد وارد شده مورد تایید است ."
        passstate.style.color = "green"
        passstate.style.display = "inline"
    }
    setInterval(function(){
        passstate.style.display = "none"
        passstate.innerHTML = ""
    }, 10000)
    
}
function conpasstype(){
    let passin = document.getElementById("sPassIn").value
    let passcon = document.getElementById("PassConIn").value
    let passconstate = document.getElementById("PassConText")
    
    if(passcon == passin){
        passconstate.innerHTML = "مقدار وارد شده با پسورد مطابقت دارد و مورد تایید است ."
        passconstate.style.color = "green"
        passconstate.style.display = "inline"
    }else{
        passconstate.innerHTML = "مقدار وارد شده با پسورد مطابقت ندارد ."
        passconstate.style.color = "red"
        passconstate.style.display = "inline"
    }
    setInterval(function(){
        passconstate.style.display = "none"
        passconstate.innerHTML = ""
    }, 10000)
}