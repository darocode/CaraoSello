const option = document.querySelectorAll('input__juego');
const apuesta = document.querySelectorAll('.input__juego');


option.forEach((cadaOption, i) => {

    option[i].addEventListener('click',()=>{
        
        option.forEach((cadaOption, i)=>{
            option[i].classList.remove('activo')
            console.log('clcik')
        })

    })
});

