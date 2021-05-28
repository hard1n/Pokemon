//vidas y turno
var vidaPikachu = 100;
var vidaJigglypuff = 100;
var turno = Math.floor(Math.random() * 2) + 1 ;

//Orientacion de pantalla
/*getElementById(document).ready(function () {
    function reorient(e) {
      var portrait = (window.orientation % 180 == 0);
      $("body > div").css("-webkit-transform", !portrait ? "rotate(-90deg)" : "");
    }
    window.onorientationchange = reorient;
    window.setTimeout(reorient, 0);
  });*/

//Inicio de la batalla
function iniciarBatalla(){
    var textInfoJuego = document.getElementById('textInfoJuego');
    if (turno ==1){
        textInfoJuego.textContent = "Comienza pikachu";
        textInfoJuego.style.fontSize = "auto";
    }
    else{
        textInfoJuego.textContent = "Comienza jigglypuff";
        textInfoJuego.style.fontSize = "auto";
    }

    var botonAtacar = document.getElementById('botonAtacar');
    botonAtacar.style.display = "block";

    var botonIniciar = document.getElementById("iniciar");
    botonIniciar.textContent = "Reiniciar partida";
    botonIniciar.style.background = "#e74c3c";
    botonIniciar.onclick = "ReiniciarPartida()";
    return false;
}

//Boton de ataque
function atacar(){

    var textInfoJuego = document.getElementById('textInfoJuego');
    //poder de ataque
    var ataquePikachu = Math.floor(Math.random() * 55) + 1 ;
    var ataqueJigglypuff = Math.floor(Math.random() * 45) + 1 ;
    
    if (vidaPikachu && vidaJigglypuff > 0){
        if (turno == 1){
            var imgPikachu = document.getElementById("imgPikachu");
            imgPikachu.src="images/pikachu_attack.gif";
            textInfoJuego.textContent = "ataque de pikachu" + "-->" + ataquePikachu;
            textInfoJuego.style.fontSize = "50px";
            textInfoJuego.style.color = "red";
            vidaJigglypuff -= ataquePikachu;
            
            var hpJigglypuff = document.getElementById('hpJigglypuff');
            if (vidaJigglypuff >= 0){
                hpJigglypuff.style.width = vidaJigglypuff + "%";
            }
            else{
                hpJigglypuff.style.width = "0%";
            }
            turno = 0;
        }
        else{
            var imgJigglypuff = document.getElementById("imgJigglypuff");
            imgJigglypuff.src="images/jigglypuff_attack.gif";
            textInfoJuego.textContent = "ataque de jigglypuff" + "-->" + ataqueJigglypuff;
            textInfoJuego.style.fontSize = "50px";
            textInfoJuego.style.color = "red";
            
            var hpPikachu = document.getElementById('hpPikachu');
            vidaPikachu -= ataqueJigglypuff;
            if (vidaPikachu >= 0){
                hpPikachu.style.width = vidaPikachu + "%";
            }
            else{
                hpPikachu.style.width = "0%";
            }
            turno =1;
        }
    }
    else{
        if(vidaPikachu <= 0){
            jigglypuffWon();
        }
        else{
            pikachuWon();
        }
    }

    if(vidaPikachu <= 0){
        jigglypuffWon()
    }
    else if(vidaJigglypuff <= 0){
        pikachuWon();
    }

    return false;
}

function ReiniciarPartida(){
    location.reload();
}

function jigglypuffWon(){
    var textInfoJuego = document.getElementById('textInfoJuego');
    textInfoJuego.textContent = "El ganador es jigglypuff";
    textInfoJuego.style.fontSize = "50px";
    textInfoJuego.style.color = "green";
}

function pikachuWon(){
    var textInfoJuego = document.getElementById('textInfoJuego');
    textInfoJuego.textContent = "El ganador es pikachu";
    textInfoJuego.style.fontSize = "50px";
    textInfoJuego.style.color = "green";
}

//empieza la batalla
/*while (vidaPikachu > 0 && vidaJigglypuff > 0) {
    if (turno ==1){
        vidaJigglypuff -= ataquePikachu;
        turno = 0;
    }
    else {
        vidaPikachu -= ataqueJigglypuff;
        turno = 1;
    }
}

if (vidaPikachu <= 0){

}*/
