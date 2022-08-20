var breed = document.querySelector(".breeds")
var resource = document.querySelector(".resource")
var breedMenu = document.querySelector(".breed-menu")
var resourceMenu = document.querySelector(".resource-menu")
var list = document.querySelector("datalist")
var passwordIcon = document.querySelectorAll("#password-icon")
var password = document.querySelectorAll("#password")

// var heroCards = document.querySelector(".hero-cards")
// let x= heroCards.scrollHeight
// console.log(x)
function openBreedMenu() {
    if (breedMenu.style.display == "block") {
        breedMenu.style.display = "none"
        breed.querySelector('i').classList.remove("fa-angle-up")
        breed.querySelector('i').classList.add("fa-angle-down")

    }
    else {
        breedMenu.style.display = "block"
        if (resourceMenu.style.display == "block") {
            resource.querySelector('i').classList.remove("fa-angle-up")
            resource.querySelector('i').classList.add("fa-angle-down")
            resourceMenu.style.display = "none"
        }
        breed.querySelector('i').classList.remove("fa-angle-down")
        breed.querySelector('i').classList.add("fa-angle-up")

    }
}


function openResourceMenu() {
    if (resourceMenu.style.display == "block") {
        resourceMenu.style.display = "none"
        resource.querySelector('i').classList.remove("fa-angle-up")
        resource.querySelector('i').classList.add("fa-angle-down")
    }
    else {
        resourceMenu.style.display = "block"
        if (breedMenu.style.display == "block") {
            breed.querySelector('i').classList.remove("fa-angle-up")
            breed.querySelector('i').classList.add("fa-angle-down")
            breedMenu.style.display = "none"
        }
        resource.querySelector('i').classList.remove("fa-angle-down")
        resource.querySelector('i').classList.add("fa-angle-up")
    }
}


      
   passwordIcon.forEach(element => {
    element.addEventListener('click',()=>{
        element.querySelector("i").classList.toggle("fa-eye");
        if (element.previousSibling.type === "password") {
            element.previousSibling.type = "text";
          } else {
            element.previousSibling.type = "password";
          }
        element.querySelector("i").classList.toggle("fa-eye-slash");
       
    })
    
   });

breed.onclick = function () { openBreedMenu() };
resource.onclick = function () { openResourceMenu() }