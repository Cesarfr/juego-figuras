var elementos = ["circulo", "cuadrado", "hexagono", "octagono", "pentagono", "rectangulo", "rombo", "trapecio", "triangulo"];
var elegido = "";

function eliminar(valor) {
    
    var error = document.getElementById("error");
    var bien = document.getElementById("bien");
    var fin = document.getElementById("fin");
    var presionar = document.getElementById("presionar");
    var restart = document.getElementById("restart");
    var figura = document.getElementById("figura");
    
    for(i=0; i<elementos.length; i++) {
        if(valor == elementos[i]) {
            if(valor == elegido) {
                bien.src = "src/"+valor+".mp3";
                elementos.splice(i,1);

                var id = document.getElementById(valor);
                id.removeAttribute("onclick");
                id.style.cursor = "not-allowed";
                
                var random = Math.floor(Math.random() * (elementos.length - 1));
                elegido = elementos[random];
                
                bien.play();
                
                if(elementos.length == 0) {
                    setTimeout(function(){
                        figura.setAttribute('class', elegido);
                        presionar.innerHTML = "Has ganado !!";
                        restart.setAttribute('class', 'ghost-button restart');
                        fin.play();
                    }, 1800);
                }else {
                    setTimeout(function(){
                        presionar.innerHTML = elegido;
                        figura.setAttribute('class', elegido);
                    },1000);
                }
                break;
            }else {
                error.play();
                break;
            }
        }else {
            continue;
        }
    }
}

function init() {
    var present = document.getElementById("presentacion");
    var contb = document.getElementById("containerb");
    var presionar = document.getElementById("presionar");
    var figura = document.getElementById("figura");
    
    var random = Math.floor(Math.random() * (elementos.length - 1));
    present.setAttribute('class', 'animated fadeOut');
    
    setTimeout(function(){
        present.setAttribute('class', 'ocultar');
        contb.setAttribute('class', 'containerb');
        elegido = elementos[random];
        figura.setAttribute('class', elegido);
        presionar.innerHTML = elegido;
    }, 1000);
}

function presentacion() {
    
    var audio = document.getElementById("present");
    var gif = document.getElementById("gif");
    var iniciar = document.getElementById("start");
    
    gif.setAttribute('class', 'gif animated fadeIn');
    iniciar.setAttribute('class', 'ghost-button');
    
    setTimeout(function(){
        gif.setAttribute('src', 'img/animado.gif');
        audio.play();
        audio.addEventListener("ended", function() {
            audio.currentTime = 0;
            gif.setAttribute('src', 'img/static.gif');
            iniciar.setAttribute('class', 'ghost-button animated bounce');
        });
    }, 1000); 
}

function hover(valor) {
    var id = document.getElementById(valor);
    id.setAttribute('class', 'animated shake');
    setTimeout(function(){id.removeAttribute('class');}, 1000)
}

function reiniciar() {
    location.reload();
}