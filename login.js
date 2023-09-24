let users = [
    { id : 1 , UserName : "mehrzad_md", password : "585931"}
]
let fin = false


function subclick(){
    let loginstates = document.getElementById("UsText")
    let usname = document.querySelector("#UsIn")
    let uspass = document.querySelector("#PassIn")
    let usvalue = usname.value
    let passvalue = uspass.value
    users.forEach(function(item){
        if(item.UserName == usname && item.password == uspass){
            fin = true
            return fin
        }
    })
    console.log(usname.value)
    if(fin == true){
        loginstates.innerHTML = "ورود شما تایید شد"
        loginstates.style.color = "green"
        loginstates.style.display = "inline"
    }
    else{
        loginstates.innerHTML = "کاربری با این نام کاربری یا پسورد یافت نشد"
        loginstates.style.color = "red"
        loginstates.style.display = "inline"
    }
}

