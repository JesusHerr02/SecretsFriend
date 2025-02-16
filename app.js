// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//alert("Hola mundo")
let amigos = [];
let lista = document.querySelector("#listaAmigos");

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;

    if (amigo == ""){
        alert("Por favor, inserte un nombre.");
    } else{
        amigos.push(amigo);
        //alert(`Mi amigo ${amigo}`);
        //console.log(amigos)
        clean();
        actualizarAmigo();
    }

    
    return;
}

function clean(){
    document.querySelector("#amigo").value = "";
    return; 
}

function actualizarAmigo(){
    
    lista.innerHTML = "";

    for (let i=0; i<amigos.length; i++){
        let lista_li = document.createElement("li");
        lista_li.innerHTML = amigos[i];
        lista.appendChild(lista_li); 
    }
    return;
}

function sortearAmigo(){
    if (amigos.length == 0){
        alert("No hay participantes en la lista.");
    }else{
        let posicion = indiceRandom();
        let sorteo = document.querySelector("#resultado");
        let amigo_secreto = amigos[posicion];
        lista.innerHTML = "";
        sorteo.innerHTML = `El amigo secreto sorteado le corresponde a ${amigo_secreto}`;
    }
    return;
}

function indiceRandom(){
    return Math.floor(Math.random()*amigos.length)
}

