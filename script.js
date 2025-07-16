  function send(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mob = document.getElementById("mob").value.trim();
    let desc = document.getElementById("desc").value.trim();
    let status = document.getElementById("status");
    let btn = document.getElementById("submit-btn");

    if (name && email && mob && desc) {
      status.innerHTML = "Request sent successfully!";
      status.style.color = "green";
      alert("Your details were sent successfully. We willl contact you soon.");
      console.log("SENT...");
      btn.style.borderColor = "green";

    } 
    else {
      status.innerHTML = "Some fields are empty!";
    //   status.style.color = "green";
      status.style.color = "red";
      console.error("BAD REQUEST");
      console.warn("Fill all required fields.");
      btn.style.borderColor = "red";

    }
  }
