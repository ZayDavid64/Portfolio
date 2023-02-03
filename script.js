function myFunction() {
    let x = document.getElementById("myNavBar");
    if (x.className === "navBar") {
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
  }

function nav(link){
        window.location.href= "#"+link
     }

function contact(){
     let cont= document.getElementsByClassName("contacts")
     if(cont && cont.style.display == "flex"){
     cont.style.display= "none"
     }
     else{
        cont.style.display= "flex"
     }
}