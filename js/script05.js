/*

5. Uma empresa decide dar um aumento de 30% aos funcionários com
salários inferiores a R$500,00. Faça um programa que receba o salário
do funcionário e mostre o valor do salário reajustado ou uma mensagem
caso ele não tenha direito ao aumento. 

*/

const salarioInicial = parseInt(prompt('Digite seu salário'));

const calculoReajuste = salarioInicial + ((salarioInicial * 30 )/ 100);

const salario = salarioInicial;

const salarioReajuste = salarioInicial < 500 == calculoReajuste;
const salarioNormal = salarioInicial > 500 == salarioInicial;


if(salarioReajuste || salarioNormal){
    document.getElementById('info').innerHTML=`seu novo salário é: ${calculoReajuste}`;
} else {
    document.getElementById('info').innerHTML=`Você não tem direito a reajuste.`;
}

