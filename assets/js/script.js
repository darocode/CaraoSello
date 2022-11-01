
const jugar = document.getElementById('jugar');

var moneda= 0;

var i=0;



jugar.addEventListener('click',()=>{

    const apuesta = document.getElementById('apuesta').value;

    if(apuesta>0){
        
            var ciclo = true;

            var total=apuesta;

            const animacion = document.getElementById('animacion');
            animacion.classList.toggle('active')

            console.log(apuesta)

            while(ciclo==true){
                i++
                var maquina= Math.random()*2+1;

                total=parseInt(total);
                apuesta=parseInt(apuesta);

                moneda=prompt('Elige Cara o Sello \n 1.Cara\n 2.Sello');

                if(moneda==maquina){
                    total = total+apuesta;
                    window.alert('Ganasteee')
                }
            }
    }else{
        window.alert('Tienes que apostar algo mayor a 0')
    }
    
})






