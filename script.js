const li = document.querySelectorAll(".heading>img");
for(let divSec of li){
     divSec.addEventListener("click", showDiv)
}


function showDiv(event){
    const clickImg = event.target;
    const sibling = clickImg.closest("div").nextElementSibling;
    
    if(clickImg.getAttribute("src")=="icon-plus.svg"){
        sibling.style.display = "block";
        clickImg.setAttribute("src", "icon-minus.svg")
    }
    else{
        sibling.style.display = "";
        clickImg.setAttribute("src", "icon-plus.svg")
    }
}

