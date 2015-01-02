/*
. shift()
  - o shift remove o primeiro item do array
  - faz ao inverso do pop, porém o shift é 
  bem mais lento.
*/

var bolsa = ['chocolate','celular','RG','dinheiro'],
    a = bolsa.shift(); 
  
console.log(a);// removeu: chocolate
