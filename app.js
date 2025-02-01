// El principal objetivo de este desafío es
// fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function AnadirAmigo() {
    let valorDeUsuario = document.getElementById('valorUsuario').value;
    if (valorDeUsuario == '') {
       alert('Por favor, inserte un nombre');
    } else {
        document.getElementById('valorUsuario').value = '';
        amigos.push(valorDeUsuario);
        AmigosLista();
    }
}

function AmigosLista() {
    let lista = document.getElementById('AmigosLista');
    let nuevaLista = '';
    for(let i = 0; i <= amigos.length - 1; i++){
        nuevaLista = '<li>' + amigos[i] + '</li>';
    }
    return lista.innerHTML += nuevaLista;
}
function AmigoSorteado() {
    let indiceAleatorio = 0;
    if (amigos == ''){
        alert('Inserte un nombre');
    } else {
        document.getElementById('AmigosLista').innerHTML = "";
        indiceAleatorio = Math.floor(Math.random()* amigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `Tú amigo secreto es ${amigos[indiceAleatorio]}`;
    } return;
}