//changes color of arrow img without changing the div
const arrow = document.querySelector(".arrow");
const myDiv = document.querySelector(".acerca__arrow");

myDiv.addEventListener('mouseover', ChangeColor); 
myDiv.addEventListener('mouseout', BackToOriginal); 

function ChangeColor(){
    arrow.classList.remove("normal");
    arrow.classList.add("inverter");
}

function BackToOriginal(){
    arrow.classList.remove("inverter");
    arrow.classList.add("normal");
}