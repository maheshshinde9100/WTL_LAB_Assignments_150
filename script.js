function send(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mob = document.getElementById("mob").value;
    let desc = document.getElementById("desc").value;
    let status = document.getElementById("status");
    let btn = document.getElementById("submit-btn");
    if((name && email && mob && desc)!= ""){
        status.innerHTML = "Request Send successfully!!!"
        status.style.color = "green"
        alert("Your details sent succesfully.. we will try to contact you as soon as posssible")
        console.log("SENT..")
        btn.style.color = "green"

    }else{
        status.innerHTML = "Some fields are empty!!!"
        status.style.color = "red"
        console.error("BAD REQUEST")
        console.warn("Try to fill correct information")
        btn.style.color = "red"

    }

}

let img = document.getElementById("product-img");
let count = 0;
function slideShow(){
    count = count+1;
    console.log(count);
    // img.value = "image.png";
}