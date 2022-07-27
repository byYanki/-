document.querySelector("#btn").addEventListener("click", function(){
    myText();
})

function myText() {
    let errElement = document.getElementById("text")
    message = document.getElementById("err")
    text = document.getElementById("text").value
    try{
        if (text == ""){
            errElement.classList.remove("valid")
            errElement.classList.add("err")
            throw "Ubu narsa yozing"
        }
    } catch (e) {
        message.innerHTML = '' + e;
    }
    
}

document.querySelector("#btn").addEventListener("click", function(){
    myPassword();
})

function myPassword() {
    let errElement = document.getElementById("password")
    message = document.getElementById("err2")
    password = document.getElementById("password").value
    try{
        if (password == ""){
            errElement.classList.remove("valid")
            errElement.classList.add("err")
            throw "Ubu narsa yozing"
        }
    } catch (e) {
        message.innerHTML = '' + e;
    }
}