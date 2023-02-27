// Atividade 02

/* 

Crie um script que faça a conversão 
da temperatura de graus Celsius para Fahrenheit

*/

let temperatura = parseInt(prompt('Dgite a temperatura'));

let tempo = parseInt((temperatura * 9 / 5) + 32);

document.getElementById('info').innerHTML = `Temperatura em graus Fahreheint ${tempo} °F`