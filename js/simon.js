streaming = document.querySelector('.streaming');
menu = document.querySelector('.menu-navegacion');

console.log(streaming);
console.log(menu);

streaming.addEventListener('click', ()=> {
    document.querySelector('.menu-navegacion').classList.toggle("spread");
});
