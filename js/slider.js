class Slider{
	constructor(selector){
		this.move = this.move.bind(this);
		this.slider = document.querySelector(selector);
		this.interval = null;
		this.contador = 0;
		this.start();
	}

	start(){
		this.interval = window.setInterval(this.move, 3000);
	}

	move(){
		let itemCount = this.slider.querySelectorAll(".contenedor-slider > *").length;
		this.contador++;
		if(this.contador > itemCount - 1) this.contador = 0;
		this.moveTo(this.contador);
	}

	moveTo(index){
		let left = index * 100;
		this.slider.querySelector(".contenedor-slider").style.left = "-"+left+"%";
	}
}

(function(){
	new Slider(".free-bets-promocion");
})();
