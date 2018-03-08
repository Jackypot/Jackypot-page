class IndexForSiblings_m{
	static get(el){
		let children = el.parentNode.children;

		for (var i = 0; i < children.length; i++) {
			let child = children[i];
			if (child == el) return i;
		}
	}
}


class Slider_m{
	constructor(selector){
		this.move = this.move.bind(this);
		this.moveByButton = this.moveByButton.bind(this);
		this.slider = document.querySelector(selector);
		this.itemCount = this.slider.querySelectorAll(".contenedor-slider-m > *").length;
		this.interval = null;
		this.contador = 0;

		this.start();
		this.buildControls();
		this.bindEvents();

	}

	start(){
		this.interval = window.setInterval(this.move, 6000);
	}

	restart(){
		if(this.interval) window.clearInterval(this.interval);
		this.start();
	}

	bindEvents(){
		this.slider.querySelectorAll(".controls-m li")
			.forEach(item => {
				item.addEventListener("click", this.moveByButton)
			});
	}

	moveByButton(ev){
		let index = IndexForSiblings_m.get(ev.currentTarget);
		this.contador = index;
		this.moveTo(index);
		this.restart();
	}

	buildControls(){
		for (var i = 0; i < this.itemCount; i++) {
			let control = document.createElement("li");

			if(i == 0) control.classList.add("active");

			this.slider.querySelector(".controls-m ul").appendChild(control);
		}
	}

	move(){
		this.contador++;
		if(this.contador > this.itemCount - 1) this.contador = 0;
		this.moveTo(this.contador);
	}

	resetIndicador(){
		this.slider.querySelectorAll(".controls-m li.active")
			.forEach(item => item.classList.remove("active"));
	}

	moveTo(index){
		let left = index * 100;

		this.resetIndicador();
		this.slider.querySelector(".controls-m li:nth-child("+(index+1)+")").classList.add("active");
		this.slider.querySelector(".contenedor-slider-m").style.left = "-"+left+"%";
	}
}

(function(){
	new Slider_m(".contenedor-promocion");
})();
