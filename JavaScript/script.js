function funciona() {
    console.log("La página se cargó correctamente");
    console.log("La Música estará sonando en breve");
}

/* + + + + + + + SONODOS DEL TECLADO + + + + + + + + + + + + + + + + + + + + + + */
var context= new AudioContext();
 
function jsNota(frecuencia){
        var o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
        o.type="sawtooth";
        o.frequency.value=frecuencia;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
    }
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  FIN - SONIDOS DEL TECLADO */    
