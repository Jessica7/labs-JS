"use strict";

function Produto( cod, titulo, preco) {
  
  this.codigo     = cod;
  this.titulo  = titulo;
  this.preco      = preco || 0;
  this.qtd        = qtd;

}

var Carrinho = {

  sacola : [],
  total:0,
  subTotal : 0,
  viewsacola: document.querySelector('.viewSacola'),

  addi: function( cod, titulo , preco){

    this.sacola.push(new Produto(cod , titulo, preco));
    localStorage.setItem('sacola', JSON.stringify(this.sacola));

  },

  compraTotal: function( preco , itemTotal){
    this.subTotal = preco * 1; 
    this.total += this.subTotal;
    this.viewsacola.innerHTML = itemTotal + " | R$ " + this.total;

  }

 }