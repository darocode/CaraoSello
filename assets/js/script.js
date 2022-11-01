
const jugar = document.getElementById('jugar')

var moneda= 0;

var i=0;

jugar.addEventListener('click',()=>{

    

    const apuesta = document.getElementById('apuesta').value;
    var total=apuesta;

    const animacion = document.getElementById('animacion');
    animacion.classList.toggle('active')

    console.log(apuesta)
})






