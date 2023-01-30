streaming = document.querySelector('.streaming');
menu = document.querySelector('.menu-navegacion');

console.log(streaming);
console.log(menu);

streaming.addEventListener('click', ()=> {
    menu.classList.toggle("spread");
});

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != streaming){
    menu.classList.toggle("spread");
    }
});

function netflix(){
    location.href = "netflix.html";
}

function disney(){
    location.href = "disney.html";
}

function star(){
    location.href = "star.html";
}

function hbo(){
    location.href = "hbo.html";
}