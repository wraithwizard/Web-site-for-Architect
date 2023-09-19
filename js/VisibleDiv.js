const description = document.querySelector(".portofolio__residencias--description");
const descriptionDiv =  document.getElementById("description");

const depaDescription = document.querySelector(".portofolio__depas");
const depaDescriptionDiv =  document.getElementById("depas-description");

const shopDescription = document.querySelector(".portofolio__locales");
const shopDescriptionDiv =  document.getElementById("shop-description");

const restaurantDescription = document.querySelector(".portofolio__restaurantes");
const restaurantDescriptionDiv =  document.getElementById("restaurant-description");

const hotelDescription = document.querySelector(".portofolio__hoteles");
const hotelDescriptionDiv =  document.getElementById("hotels-description");

const lastHouse = document.querySelector(".final-photo");
const lastHouseDescriptionDiv =  document.getElementById("final-house-description");

const lastSketch = document.querySelector(".final-sketch");
const lastSketchDescriptionDiv =  document.getElementById("final-sketch-description");

// detecta si el el div es visible
function isInViewport(div) {
    const rect = div.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



function myfunction(){
    const messageText = isInViewport(description);
    if(messageText){
        //hace visible el div despues de  x segs 
        setTimeout(function(){
            descriptionDiv.style.visibility = "visible";
            descriptionDiv.classList.add("transition-opacity");
        }, 500);
    }else{
        descriptionDiv.style.visibility = "hidden";
        descriptionDiv.classList.remove("transition-opacity");
    }
}

function myfunction2(){
    const messageText = isInViewport(depaDescription);
    if(messageText){
        setTimeout(function(){
            depaDescriptionDiv.style.visibility = "visible";
            depaDescriptionDiv.classList.add("transition-opacity");
        }, 500);
    }else{
        depaDescriptionDiv.style.visibility = "hidden";
        depaDescriptionDiv.classList.remove("transition-opacity");
    }
}

function myfunction3(){
    const messageText = isInViewport(shopDescription);
    if(messageText){
        setTimeout(function(){
            shopDescriptionDiv.style.visibility = "visible";
            shopDescriptionDiv.classList.add("transition-opacity");
        }, 500);
    }else{
        shopDescriptionDiv.style.visibility = "hidden";
        shopDescriptionDiv.classList.remove("transition-opacity");
    }
}

function myfunction4(){
    const messageText = isInViewport(restaurantDescription);
    if(messageText){
        setTimeout(function(){
            restaurantDescriptionDiv.style.visibility = "visible";
            restaurantDescriptionDiv.classList.add("transition-opacity");
        }, 500);
    }else{
        restaurantDescriptionDiv.style.visibility = "hidden";
        restaurantDescriptionDiv.classList.remove("transition-opacity");
    }
}

function myfunction5(){
    const messageText = isInViewport(hotelDescription);
    // console.log("Residencia Div es: "+messageText);
    if(messageText){
        setTimeout(function(){
            hotelDescriptionDiv.style.visibility = "visible";
            hotelDescriptionDiv.classList.add("transition-opacity");
        }, 500);
    }else{
        hotelDescriptionDiv.style.visibility = "hidden";
        hotelDescriptionDiv.classList.remove("transition-opacity");
    }
}

function myfunction6(){
    const messageText = isInViewport(lastHouse);
    if(messageText){
        setTimeout(function(){
            lastHouseDescriptionDiv.style.visibility = "visible";
            lastHouseDescriptionDiv.classList.add("transition-opacity");
        }, 500);
    }else{
        lastHouseDescriptionDiv.style.visibility = "hidden";
        lastHouseDescriptionDiv.classList.remove("transition-opacity");
    }
}

function myfunction7(){
    const messageText = isInViewport(lastSketch);
    if(messageText){
        setTimeout(function(){
            lastSketchDescriptionDiv.style.visibility = "visible";
            lastSketchDescriptionDiv.classList.add("transition-opacity");
        }, 500);
    }else{
        lastSketchDescriptionDiv.style.visibility = "hidden";
        lastSketchDescriptionDiv.classList.remove("transition-opacity");
    }
}

//eventos que detectan si es visible en la clase css
//ref: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
document.addEventListener('scroll', myfunction); 
document.addEventListener('scroll', myfunction2); 
document.addEventListener('scroll', myfunction3); 
document.addEventListener('scroll', myfunction4); 
document.addEventListener('scroll', myfunction5); 
document.addEventListener('scroll', myfunction6()); 
document.addEventListener('scroll', myfunction7()); 