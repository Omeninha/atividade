// Atividade 01

/* Faça um algorítimo que leia o ano de nascimento de uma pessoa, calcule

*/

const idadeDirigir = 18;
const idadeVotar = 16;


let idadeAtual;

let anoAtual = new Date();

let anoNascimento = parseInt(prompt('Digite o ano que você nasceu:'))

idadeAtual = anoAtual.getFullYear() - anoNascimento;

if(idadeAtual >= idadeVotar && idadeAtual < idadeDirigir){
    document.getElementById('info').innerHTML = `Você tem ${idadeAtual} anos, pode votar e não pode dirigir`;
} else if (idadeAtual >= 18) {
    document.getElementById('info').innerHTML = `Você tem ${idadeAtual} anos, pode votar e pode dirigir`;
} else {
    document.getElementById('info').innerHTML = `Você não tem idade para votar e nem dirigir`;
}