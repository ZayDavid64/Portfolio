function myFunction() {
    let x = document.getElementById("myNavBar");
    if (x.className === "navBar") {
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
  }

function nav(){
        window.location.hash= "#me"
     }
