/*Series */
(function(){
    const sliders = [...document.querySelectorAll('.series-body')];
    const slidersp = [...document.querySelectorAll('.pel-body')];
    const buttonNext = document.querySelector('#siguiente');
    const buttonBefore = document.querySelector('#anterior');
    const buttonNextp = document.querySelector('#siguientep');
    const buttonBeforep = document.querySelector('#anteriorp');
    let value;

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBeforep.addEventListener('click', ()=>{
        changePositionp(-1);
    });

    buttonNextp.addEventListener('click', ()=>{
        changePositionp(1);
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

    const changePositionp = (add)=>{
        const currentSliderp = document.querySelector('.pel-body-show').dataset.id;
        value = Number(currentSliderp);
        value += add;

        slidersp[Number(currentSliderp)-1].classList.remove('pel-body-show');
        if(value === slidersp.length+1 || value===0){
            value = value === 0 ? slidersp.length : 1;
        }
        
        slidersp[value-1].classList.add('pel-body-show');
    }
})();


