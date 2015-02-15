var Toggle = {

	box: 					document.querySelector('.box'),
	btn: 		 			document.querySelector('.show-hide'),
	duration: 		1000,
	steps: 				20,
	delay: 				5000,

	clickBtn: function(){

		var _this = this;

		this.btn.addEventListener('click', function(){
			Toggle.check();
		});

	},

	setOpacity: function(el){
		 this.box.style.opacity = el;
	},

	fadeIn: function(){
		for(var i = 0; i < 1; i += (1 / this.steps) ){
			setTimeout("Toggle.setOpacity(" + (  i  ) + ")" , i * Toggle.duration);
		}
	},

	fadeOn: function(){
		for(var i = 0; i < 1; i += (1 / this.steps) ){
			setTimeout("Toggle.setOpacity(" + ( 1 - i ) + ")" , i * Toggle.duration);
		}
	},

	check: function(){
		if(  this.box.style.opacity < 0.95  ){
	 		this.fadeIn();
		}else{
	 		this.fadeOn();
		}
	}

}	

Toggle.clickBtn();