
const jugar = document.getElementById('jugar');

var moneda= 0;

var i=0;



jugar.addEventListener('click',()=>{

    var apuesta = document.getElementById('apuesta').value;

    if(apuesta>0){

            var perder=false

            var total=apuesta;

            const animacion = document.getElementById('animacion');
            animacion.classList.toggle('active')

            console.log(apuesta)

           
                var maquinaR= Math.floor((Math.random() *2)+1);
                console.log(maquinaR)

                total=parseInt(total);

                apuesta = parseInt(apuesta);

                moneda=prompt('Elige Cara o Sello \n 1.Cara\n 2.Sello');

                if(moneda==maquinaR){
                    total = total+apuesta;
                    window.alert('Ganasteee')
                    perder=false
                    i++

                }else if(moneda != maquinaR){

                    total= total-apuesta;
                    window.alert('Perdiste')
                    perder = true
                    i++
                    
                }

                if(total>0 && perder==false){

                     window.alert('Has Ganado')
                    window.alert(`Usted ha jugado ${i} veces y le tiene ${total} pesos`)
                    window.alert('Gracias por jugar')

                }else if(perder==true){

                    window.alert('Has perdido')
                    window.alert(`Usted ha jugado ${i} veces y tiene ${total} pesos`)
                    window.alert('Gracias por jugar')
                    
                }
            
    }else{
        window.alert('Tienes que apostar algo mayor a 0')
    }
    
})






