document.addEventListener('DOMContentLoaded', nav);

function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}

// //position
// const burger = document.getElementById("burger");

// function Move(){
//     burger.classList.toggle('burger-position');   
// }

// burger.addEventListener("click", Move);

//hightlight visited current link
function highlightCurrent() {
    const curPage = document.URL;
    const links = document.getElementsByClassName('link');
    for (let link of links) {
      if (link.href == curPage) {
        link.classList.add("current");
      }
    }
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      highlightCurrent()
    }
};
