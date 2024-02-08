let pelota = document.getElementById("pelota");
let velocidad = 50;
let mtop = 0;
let mleft = 0;

document.addEventListener("keydown", function(e){
console.log(e.code)
    if (e.code == "KeyD"){
        derecha();
    }

    if (e.code == "KeyA"){
        izquierda();
    }

    if (e.code == "KeyS"){
        bajo();
    }

    if(e.code == "KeyW"){
        alto();
    }
})

function derecha(){
    mleft += velocidad;
    pelota.style.marginLeft = mleft + "px";

}

function izquierda(){
    mleft -= velocidad;
    pelota.style.marginLeft = mleft + "px";
}

function bajo (){
    mtop += velocidad;
    pelota.style.marginTop = mtop + "px";
}

function alto() {
    mtop -= velocidad;
    pelota.style.marginTop = mtop + "px";
    console.log("alto");
}