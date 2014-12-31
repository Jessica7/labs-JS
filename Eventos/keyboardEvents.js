/***********************
	Keyboard events
************************/
/*
{keydown}: é disparado quando uma tecla é pressionada
{keypress}: é disparado quando um caractere real
está a ser inserido exemplo: digitar um texto no input.
{keyup}: dispara quando usuário solta a tecla

-keypress: é chamado duas vezes:ao pressionar e ao soltar a tecla.
É um evento que será disparado duas vezes ao pressionar a tecla.

-keydown vs keyup 

keydown:dispara qualquer tecla pressionada
keypress:dispara após keydown e dá charCode,
mas é garantido para teclas de caracteres.

Exemplos:

*/

//keydown
var a = document.getElementById('digite');
a.addEventListener('keydown',function(){
  console.log('ok');
});

//keypress
var a = document.getElementById('digite');
a.addEventListener('keypress',function(){
  console.log('ok');
});  

//keyup
var a = document.getElementById('digite');
a.addEventListener('keyup',function(){
  console.log('ok');
});

//------------------------------------------------------
/*
. Key event properties:

-KeyCode: recupera o valor integral da tecla pressionada,
 trata-se de um número. 
caso pressione tecla "a" a tecla pode ser "a" ou "A"
(ou outro idioma) o keyCode será o mesmo. Veja  o Exemplo:
*/
var a = document.getElementById('digite');
a.addEventListener('keydown',function(evt){
  console.log(evt.keyCode);
}); 
//------------------------------------------------------
/*
. charCode:retorna o valor Unicode de uma tecla
pressionada durante o evento keypress.

*/
var a = document.getElementById('digite');
a.addEventListener('keypress',function(evt){
  console.log(evt.charCode);
}); 

/*
-Lembrete:
keypress está absoleta, mas na especificação 
DOM 3 o keypress substituido por textInput.
o Safari e chrome apoiam o textInput, porém o apoio
é incompleto.Ainda é inviável utilizar o textInput.

Todos os navegadores, execeto o IE a propriedade
charCode é definida por keypress, onde contém
o código de caracteres.No opera segue este principio,
mas tem erros de teclas como por exemplo
ao pressionar backspace é acionada sem charCode.
*/
//------------------------------------------------------
/*
-shiftKey, crtlKey, altKey, metaKey: 
propriedades boolean , indica se as teclas ALT,
CRTL, SHIFT estão ativas ou não.
*/
var a = document.getElementById('digite');
a.addEventListener('keypress',function(evt){
  console.log(evt.shiftKey);
}); 

/*
 .Cancelling user input

-Em todos os navegadores, exeção do Opera
podemos cancelar a ação do teclado:
KeyDown e KeyPress, o opera cancela character key
somente com preventDefault.
*/

<input onkeydown="return false" type="text" size="30">
<input onkeypress="return false" type="text" size="30">





