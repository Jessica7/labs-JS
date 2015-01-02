/**************************
      Eventos
**************************/
/* 
. Eventos :

| Mouse Events |  Keyboard Events |  Forms events |  

  onclick           onkeydown           onblur
  onmousemove       onkeypress          onchange
  onmouseup         onkeyup             onsubmit
  ondblclick

//----------------------------------------------------------------
 . Event handlers: é m método utilizado para anexar um manipulador
 de eventos a um elemento.

-São funções que "reagem" a eventos
-São single-threaded:são executadas sequencialmente.
Os eventos são executados simultâneamente, ex: mouseover
e mousemove ,seus manipuladores serão executados um após o outro.

-Formas de atribuir manipuladores de eventos:

. DOM nível 0: usa-se prefixo "on"(Event handler) | exemplos: onclick, onload    
*/

/*
-Em linha: Compatível com todos navegadores,
 mas não é recomendado seu uso.
 */
  <a href="sobre.html" onload="doSomething()">Click here</a> 

/*
-Função(atribuição tradicional):
desvantagem:naõ será possível registrar vários Event handler
para um evento.
*/
function labs(){
  alert('Hi!');
}
window.onload = labs;

/*
- DOM nível 2: addEventListener 
-addEventListener: captura um evento em um elemento, não é suportado pelo IE 6 7 8
-sintaxe: objeto.addEventListener('Evento', 'função', true ou false);
1º parâmetro: o evento , 2º função que irá tratar o evento, 3º define o modo de captura
*/
document.getElementById('btn').addEventListener('click', myProduto, false);

// Caso de uso removendo post:
var box   = document.getElementById('box');
var btn = document.querySelectorAll(".x");

for(var i = 0; i < btn.length; i++){

  btn[i].addEventListener('click', function(){
    var el = this.parentNode;
    if(el.tagName.toLowerCase() === 'li') el.parentNode.removeChild(el);    
  });

}  

//- Versões inferiores ao IE9 - attachEvent:
document.attachEvent('onclick', alerta);

//- Solução Cross-Browser:
if( elem.addEventListener ) elem.addEventListener( evnt, handle, false );
else elem.attachEvent( 'on' + evnt , handle );
//ps: a ordem de atribuição não garanti a ordem de execução event handler. 
      
/*
. Event Object:  
-O objeto de evento contém informações valiosas sobre os detalhes do evento.
Ele é passado como primeiro argumento para a rotina de tratamento para a
maioria dos navegadores e via window.event para o IE. 
*/

function doSomething(event) {
}

/*
  .Algumas Propriedades de Evento:
*/
  //-target: referência ao elemento clicado
  event.target 
  event.srcElement//no IE

  //-clientX,clientY: coordenadas do ponteiro no momento do clique.
  event.clientX / event.clientY

/*  
. Evento anexado como propriedade do objeto no IE

-versoes inferiores ao IE9 o evento é anexado 
como proriedade do objeto já em outros navegadores
o evento é como parâmetro de uma função.  
*/

// Captura do evento click no IE
document.onclick = labs;

  function labs( event ) {
    var alerta = 'Posição X é: ';
    alerta += window.event.screenX;//em outros navegadores: evento.screenX
    alert(alerta);//mostra a Posição X do clique
  } 

//-Solução Cross-Browser
  element.onclick = function(event) {
      event = event || window.event
  }
//-----------------------------------------------
/*
  .Capturing and Bubbling
*/
/*
Se um elemento e um de seus ancestrais tiver
um manipulador de evento para o mesmo evento,
qual será disparado primeiro?
-Exemplo:
temos 3 divs(#um, #dois, três) uma dentro da outra,
caso clique na div #tres , qual elemento
será disparado primeiro: div #tres ou div #um ?

- Capturing(Netscape): de forma simplista a fase
de captura sempre inicia no topo da árvore
DOM. Clicando na div #tres será disparado
primeiro a div #um -> #dois -> #três.

- Bubbling(Microsoft):"borbulha" até o topo da árvore DOM
caso clique na div #dois será disparado da seguinte
forma: #dois -> #um.

- Nós desenvolvedores escolheremos como
queremos registrar na fase de Capturing ou
Bubbling. Como ?

true: Capturing
false: Bubbling 

- esse parâmetro é opcional, porém por padrão
o valor será false.
*/
element1.addEventListener ('click', doSomething2, true)
element2.addEventListener ('click', doSomething, false)

/*
-Cancelar a propagação de eventos
*/
  stopPropagation()
/*
-interrompe a propagaçaõ de evento Cross-browser
*/
function doSomething(e)
{
  if (!e) var e = window.event;
  e.cancelBubble = true; // IE
  if (e.stopPropagation) e.stopPropagation();
}

/*
  .Cancelar Ação padrão do Navegador
*/
/*
- o navagador tem suas próprias ações
sobre alguns eventos.Podemos cancelar essas ações
- preventDefault(): impede que um evento
padrão do navegador acorra.
- versões inferiores ao IE9 utiliza-se: return false
*/
//Cross browser:
event.preventDefault ? event.preventDefault() : (event.returnValue=false)

/*
-preventDefault vs. return false:
o return false faz o "papel"
do preventDefault e do stopPropagation, impede
a propagação de evento e a ação padrão do navegador.
*/

//-------------------------------------------------------
/*
  . Delegação de Eventos
*/
/*
*  . Conceito: É uma técnica que consiste
*    em adicionar um manipulador de evento(event handler) 
*    ao elemento pai, ao invés de adicionar 
*    um manipulador de eventos em cada elemento filho.
*
*   -Caso de uso:  
*    temos vários botões em uma página, 
*    imagine adicionar um event handler em cada
*    um deles? #chato :( , com a delegação de eventos 
*    adicionaremos o event handle apenas no elemento pai    
*    no caso a div container(onde contém todos os botões) 
*    que receberá o event handle. 
*
*/  

//Caso de uso: remover botões 
var box = document.getElementById('box');

box.onclick = function(event) {
  event = event || window.event
  var target = event.target || event.srcElement
  if(target.tagName.toLowerCase() === 'button') getTarget(target);
}

function getTarget(target) {
   target.parentNode.removeChild(target);
}