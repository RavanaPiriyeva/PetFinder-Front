var breed = document.querySelector(".breeds")
var resource = document.querySelector(".resource")
var breedMenu = document.querySelector(".breed-menu")
var resourceMenu = document.querySelector(".resource-menu")
 function openBreedMenu (){
    if(breedMenu.style.display == "block")
    {
        breedMenu.style.display="none"
    }
    else{
        breedMenu.style.display="block"
        resourceMenu.style.display="none"
    }
 }
 function openResourceMenu(){
    if(resourceMenu.style.display == "block")
    {
        resourceMenu.style.display="none"
    }
    else{
        resourceMenu.style.display="block"
        breedMenu.style.display="none"    }
 }
 breed.onclick= function(){openBreedMenu()};
 resource.onclick=function(){openResourceMenu()}