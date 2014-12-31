/*

  ---Criação de Nós---

  . CreateElement
  . createtextNode
  . createAttribute

  ---Atribuição de Nós---

  . appendChild
  . removeChild
  . replaceChil

  ---Navegando na Árvore DOM---

*/

  // createElement
  var hr = document.createElement("hr");
      div.appendChild(hr);
      var li = document.createElement("li");
      
  // createtextNode: cria nó do tipo texto
      li.appendChild(document.createTextNode("Teste de lista"));
      div.firstChild.appendChild(li);

  //------------------------------------------------

  // createAttribute

  var atributo = document.createAttribute("style");
      atributo.value = "color:pink";
      li.setAttributeNode(atributo);
      //outra forma
      li.setAttribute("style","color:yellow");
      //Utilizando DOM HTML API
      li.style.color = "green";
  //------------------------------------------------

  // criando um SELECT
  var select = document.createElement("select");
      select.setAttribute("id","estados");
  var option = document.createElement("option");
      option.setAttribute("value","PE");
  var option = document.createElement("option");
      option.setAttribute("value","RN");
      option.appendChild(document.createTextNode("Recife"));
      option.appendChild(document.createTextNode("Natal"));
      select.appendChild(option);
      select.appendChild(option2);
      div.appenChild(select);

  //------------------------------------------------
     
    // Remover Elementos

  var del = div.firstChild;
            div.removeChild(del);

  //------------------------------------------------

    // Clonar Elementos - true: é para clonar todos nós filhos
  var select2 = select.cloneNode(true);

  var select2 = select.cloneNode(true);
      div.appendChild(select2);

  var option3 = option.cloneNode(true);
      select.appendChild(option3);

  //------------------------------------------------

  // Navegando na Árvore DOM

  var div = document.getElementsByTagName("div").item(0);
      console.log(div);
      console.log(div.parentNode);//Acesso o pai do elemento
      console.log(div.childNodes);//Acesso o filho do elemento
  var ul = div.childNodes.item(0);// nodeList
      console.log(ul);//acessando primeiro filho = ul
      console.log(ul.nodeName); //nodeName = nome da tag
      console.log(ul.nodeType);// tipo de nós 1=Elemento; 2=Atributo; 3=Texto;
      console.log(ul.childNodes.length);// filhos de nós
      console.log(ul.childNodes.item(0));// acessa primeiro elemento de lista
      console.log(ul.firstChild);// acessar primeiro filho com firstChild
      console.log(ul.lastChild);// acessar último Filho
      console.log(ul.firstChild.firstChild);//Acessa primeiro filho UL e acessa primeiro filho do tipo TEXT
      console.log(ul.firstChild.firstChild.nodeValue);//Acessa primeiro filho UL e acessa primeiro filho do tipo TEXT recuperar o valor
      console.log(ul.firstChild.firstChild.nodeName);//acessa o nome do elemento: ex: #text







