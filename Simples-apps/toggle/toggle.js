var Toolbar = {

	box: 			document.querySelector('.box'),
	btn: 		 	document.querySelector('.show-hide'),
	efeitos:  document.querySelector('.one'),

	clickBtn: function(){

		var _this = this;
		this.btn.addEventListener('click', function(){
				_this.check();
		});
	},

	show: function(){
		this.box.className = 'show';
	},

	hide: function(){
		this.box.className = 'hide';
	},

	check: function(){

		if(  this.box.className == 'box' ){
		 		this.hide();
		}else if( this.box.className == 'hide' ){
			 	this.show();
		}else{
			 	this.hide();	
		}

	}
	
}

Toolbar.clickBtn();
