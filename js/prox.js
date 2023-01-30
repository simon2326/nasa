(function(){
    const sliders = [...document.querySelectorAll('.series-body')];
    const buttonNext = document.querySelector('#siguiente');
    const buttonBefore = document.querySelector('#anterior');
    let value;

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    const changePosition = (add)=>{
        const currentSlider = document.querySelector('.series-body-show').dataset.id;
        value = Number(currentSlider);
        value += add;

        sliders[Number(currentSlider)-1].classList.remove('series-body-show');
        if(value === sliders.length+1 || value===0){
            value = value === 0 ? sliders.length : 1;
        }
        
        sliders[value-1].classList.add('series-body-show');
    }
})();

