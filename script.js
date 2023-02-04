let bars= document.getElementsByClassName("icon")[0]
console.log(bars)
let x = document.getElementById("myNavBar");
bars.addEventListener("click",()=> {
    if (x.className === "navBar") {
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
  })

function nav(link){
        window.location.href= "#"+link
     }

function contact(){
     let cont= document.getElementsByClassName("contacts")[0]
     if(cont && cont.style.display == "flex"){
     cont.style.display= "none"
     }
     else{
        cont.style.display= "flex"
     }
}

const body= document.body;
let lastScroll= 0

/*window.addEventListener("scroll", ()=>{
  const currentScroll= window.scrollY
  let myNav= document.getElementById("myNavBar")
  if(currentScroll > 20 ){
   myNav.style.opacity= 100
  }
  else{
    myNav.style.opacity= 0
  }
  console.log(currentScroll)
})*/
