
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

           
                var maquinaR= Math.random().toPrecision(1)*2+1;
                console.log(maquinaR)

                total=parseInt(total);

                moneda=prompt('Elige Cara o Sello \n 1.Cara\n 2.Sello');

                if(moneda==maquinaR){
                    total = total+apuesta;
                    window.alert('Ganasteee')
             }
            
    }else{
        window.alert('Tienes que apostar algo mayor a 0')
    }
    
})






