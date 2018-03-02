vw = window.innerWidth;

// **********************************************************
// Creacion de datos a mostrar
// **********************************************************

// End Point
// ********************************
function obtencion_datos_endpoint(){
    fetch('https://jackynet.eu-4.evennode.com/table')
    .then(function(response){if (!response.ok) {throw Error(response.statusText);} return response.json();})
    .then(function(resp) {
        respuesta = resp.dataTable;//Guadamos los datos
        intervalo_datos = setInterval(function(){manager(respuesta)}, 3000);//inicio de creacion de la tabla

        let num = Math.floor((Math.random() * 9) + 1);
        playGiro(num, num, num, false, false);

        mostrar_pote()
        intervalo_valorPote = setInterval(mostrar_pote, 300000);//cambiar el valor de ether a dolares cada 5min
        })
    .catch(function(error) {console.log('Looks like there was a problem: \n', error);});
}
obtencion_datos_endpoint();

var contador = 0;
var intervalo_datos, intervalo_giros, respuesta, ethDls, pote, intervalo_valorPote;

// Funcion mostrar valor del pote
// Correcto
var estado_pote = true;
function mostrar_pote(){
    if (estado_pote) {
        pote = respuesta[respuesta.length - 1].potValue;
        document.getElementById("pote").innerHTML = pote.toFixed(2) +" ETH";
        estado_pote = false;
    }else {
        let aux = pote * ethDls;
        document.getElementById("pote").innerHTML = aux.toFixed(2) +" USD";
        estado_pote = true;
    }
}

// Funcion obtener el valor ETH/USD y conversion
// Correcto - Usa Fetch externo [cryptocompare]
function getValorDLS() {
	var url = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';
	fetch(url)
	.then(function(response){if (!response.ok) {throw Error(response.statusText);} return response.json();})
	.then(function(data) {ethDls = data.USD;})
	.catch(function(error){console.log('Parece que hubo un error: ' + error);});
}

getValorDLS();
setInterval(getValorDLS, 1800000)//peticion de valor del ether 30min.

// Calcular Profit
// ********************************
function calcular_profit(a, b, c, bet){
    let cambioNum = ["", 1, 1, 1, 2, 2, 2, 3, 3, 3];
	let profit, color;
	bet = (bet / 1000000000000000000);
	if ((cambioNum[a] == cambioNum[b]) && (cambioNum[b] == cambioNum[c])) {
		if (cambioNum[a] == 1) {profit = "150%"; /*(bet * 1.5).toFixed(3);*/}
		if (cambioNum[a] == 2) {profit = "200%";/*(bet * 2).toFixed(3);*/}
		if (cambioNum[a] == 3) {profit = "300%"/*(bet * 3).toFixed(3);*/}
		color = 'verde';
	}else if ((cambioNum[a] == cambioNum[b]) || (cambioNum[b] == cambioNum[c])) {color = 'verde'; profit = "110%"/*(bet * 1.1).toFixed(3);*/}
	else {color = 'rojo'; profit = "0%" /*bet.toFixed(3);*/}

	return [profit, color];
}

var manager = (datos) => {
    if (contador < datos.length - 2) {
        contador ++
    }
    else {
        contador = 0;

    }

    let div_correspondiente;
    if (vw < 481) {div_correspondiente = "datos-m";}
    else {div_correspondiente = "datos";}


    let padre = document.getElementById(div_correspondiente);
    if ((padre.firstChild) && (padre.childNodes.length < 2)) {
        add(padre, true, datos);
    }
    else if (!padre.firstChild) {
        add(padre, true, datos);
    }
    else if ((padre.childNodes.length > 1) && (padre.childNodes.length < 10)) {
        add(padre, true, datos);
    }
    else if (padre.childNodes.length == 10) {
        less(padre);
        add(padre, true, datos);
    }
}

var add = (_padre, numero, datos) => {
    // let id => [arreglo]


    let contenedor = document.createElement("div");
    let contenedor_resultado = document.createElement("div");
    let contenedor_address = document.createElement("div");
    let address = document.createElement("div");
    let game = document.createElement("div");
    let bet = document.createElement("div");
    let profit = document.createElement("div");
    let blocki = document.createElement("div");

    if (numero == true) {
        let value_profit = calcular_profit(datos[contador].Resultado.charAt(0), datos[contador].Resultado.charAt(2), datos[contador].Resultado.charAt(4), datos[contador].Valor)

        let img = new Image();
        img.src = blockies.toDataUrl(datos[contador].Cliente);
        address.innerHTML = datos[contador].Cliente;

        game.innerHTML = "Game: "+datos[contador].Resultado;
        bet.innerHTML = "Bet : "+(datos[contador].Valor/ 1000000000000000000).toFixed(2);
        profit.innerHTML= "Profit: "+value_profit[0];
        profit.classList.add(value_profit[1]);
        blocki.appendChild(img);

        contenedor.classList.add("contenedor_datos");
        contenedor.setAttribute('id', contador);
        contenedor.onclick = function(){datos_girar_maquina(this.id);}
        contenedor_resultado.classList.add("contenedor_juego");
        contenedor_address.classList.add("contenedor_address");
        blocki.classList.add("blocki");
        address.classList.add("address");

        bet.classList.add("bet");

        contenedor_resultado.appendChild(bet);
        contenedor_resultado.appendChild(game);

        contenedor_resultado.appendChild(profit);
        contenedor_address.appendChild(blocki);
        contenedor_address.appendChild(address);

        contenedor.appendChild(contenedor_address);
        contenedor.appendChild(contenedor_resultado);
    }
    else {
        console.log(numero);
        let value_profit = calcular_profit(datos[numero].Resultado.charAt(0), datos[numero].Resultado.charAt(2), datos[numero].Resultado.charAt(4), datos[numero].Valor)
        let img = new Image();
        img.src = blockies.toDataUrl(datos[numero].Cliente);
        address.innerHTML = datos[numero].Cliente;

        game.innerHTML = "Game: "+datos[numero].Resultado;
        bet.innerHTML = "Bet: "+(datos[contador].Valor/ 1000000000000000000);
        profit.innerHTML= "Profit: "+value_profit[0];
        profit.classList.add(value_profit[1]);
        blocki.appendChild(img);

        contenedor.classList.add("contenedor_datos");
        contenedor.setAttribute('id', numero);
        contenedor.onclick = function(){datos_girar_maquina(this.id);}
        contenedor_resultado.classList.add("contenedor_juego");
        contenedor_address.classList.add("contenedor_address");
        blocki.classList.add("blocki");
        address.classList.add("address");
        bet.classList.add("bet");

        contenedor_resultado.appendChild(bet);
        contenedor_resultado.appendChild(game);
        contenedor_resultado.appendChild(profit);
        contenedor_address.appendChild(blocki);
        contenedor_address.appendChild(address);

        contenedor.appendChild(contenedor_address);
        contenedor.appendChild(contenedor_resultado);
    }
    _padre.insertBefore(contenedor, _padre.firstChild);
}

var less = (_padre) => {
    _padre.removeChild(_padre.lastChild);
}

var reordenar = (datos) => {
    let div_correspondiente;
    if (vw < 481) {div_correspondiente = "datos-m";}
    else {div_correspondiente = "datos";}

    let padre = document.getElementById(div_correspondiente);
    contador = 0;

    while (padre.firstChild) {
        padre.removeChild(padre.firstChild);
    }

    while (contador < 8) {
        if (contador > 4) {
            let aux = (contador - (respuesta.length-3))
            add(padre,aux, datos)
        }else {
            add(padre, contador, datos);
        }
        contador ++;
    }
}
// **********************************************************
// Maquina
// **********************************************************
var estado_remover_clase = true;
function datos_girar_maquina(ev){
    let a, b, c;
    let resultado, classe, valor_profit;

    a = respuesta[ev].Resultado.charAt(0);
    b = respuesta[ev].Resultado.charAt(2);
    c = respuesta[ev].Resultado.charAt(4);

    resultado = calcular_profit(a, b, c, respuesta[ev].Valor);
    valor_profit = resultado[0];
    classe = resultado[1];

    if (!maquina_girando) {
        document.getElementById("address-machine").innerHTML = respuesta[ev].Cliente;
        document.getElementById("bet-machine").innerHTML = "";
    }
    if (estado_remover_clase) {
        document.getElementById("address-machine").classList.remove("remove");
        estado_remover_clase = false;
    }


    playGiro(a, b, c, valor_profit, classe)
}

var vw;
window.addEventListener("resize", function(){
    vw = window.innerWidth;
});

// Giramos la maquina
var maquina_girando = false;
function playGiro(a, b, c, profit, classe){
    if (maquina_girando == false) {
        maquina_girando = true;

	    // Variables pantallas de ordenador
        let x, y, z;
	    var size = 80;
	    var posX = 25;
	    var posY = 140;
	    var posZ = 247;
        let translado = 60

        let imgOne = Math.floor((Math.random() * 3) + 1);
        let imgtwo = Math.floor((Math.random() * 3) + 1);
        let imgthree = Math.floor((Math.random() * 3) + 1);

	    // Para las diferentes pantallas
	    if (vw <= 480){size = 50; posX = 15; posY = 79; posZ = 140; translado = 26;    }
	    else if (vw > 480 && vw <= 768){size = 50; posX = 15; posY = 79; posZ = 140; translado = 26;}
	    else if (vw > 768 && vw < 1023){size = 80; posX = 30; posY = 139; posZ = 250; translado = 50;}
        else if (vw >= 1023 && vw <= 1024){size = 80; posX = 18; posY = 112; posZ = 205; translado = 40;}
        else if (vw > 1024 && vw < 1176){posX = 29; posY = 138; posZ = 248; translado = 46;}
	    // Obtencion de numeros randoms para tener imagenes aleatorias
	    // Representacion de los numeros y cambio de numeros del 1 - 9 ah 1 - 3

	    // Primer paso: cambio de numeros
        let cambioNum = ["", 1, 1, 1, 2, 2, 2, 3, 3, 3];
	    a = cambioNum[a];
	    b = cambioNum[b];
	    c = cambioNum[c];

	    // Declaramos el SVG
	    var s = Snap("#svg");
	    // Limpiamos el campo
	    s.clear();

	    // Empezamos el primer recorrido
	    setTimeout(function(){
	    	x = s.image("assets/game/slot/"+imgOne+".svg", posX, 10, size, size);
	    	x.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

	    	y = s.image("assets/game/slot/"+imgtwo+".svg", posY, 10, size, size);
	    	y.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

	    	z = s.image("assets/game/slot/"+imgthree+".svg", posZ, 10, size, size);
	    	z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

	    	imgOne = Math.floor((Math.random() * 3) + 1);
	    	imgtwo = Math.floor((Math.random() * 3) + 1);
	    	imgthree = Math.floor((Math.random() * 3) + 1);
	    }, 100);

        setTimeout(function(){
            s.clear();
            x = s.image("assets/game/slot/"+imgOne+".svg", posX, 10, size, size);
            x.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            y = s.image("assets/game/slot/"+imgtwo+".svg", posY, 10, size, size);
            y.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            z = s.image("assets/game/slot/"+imgthree+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            imgOne = Math.floor((Math.random() * 3) + 1);
            imgtwo = Math.floor((Math.random() * 3) + 1);
            imgthree = Math.floor((Math.random() * 3) + 1);
        }, 400);datos_girar_maquina

        setTimeout(function(){
            s.clear();
            x = s.image("assets/game/slot/"+imgOne+".svg", posX, 10, size, size);
            x.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            y = s.image("assets/game/slot/"+imgtwo+".svg", posY, 10, size, size);
            y.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            z = s.image("assets/game/slot/"+imgthree+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            imgOne = Math.floor((Math.random() * 3) + 1);
            imgtwo = Math.floor((Math.random() * 3) + 1);
            imgthree = Math.floor((Math.random() * 3) + 1);
        }, 700);

        setTimeout(function(){
            s.clear();
            x = s.image("assets/game/slot/"+imgOne+".svg", posX, 10, size, size);
            x.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            y = s.image("assets/game/slot/"+imgtwo+".svg", posY, 10, size, size);
            y.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            z = s.image("assets/game/slot/"+imgthree+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            imgOne = Math.floor((Math.random() * 3) + 1);
            imgtwo = Math.floor((Math.random() * 3) + 1);
            imgthree = Math.floor((Math.random() * 3) + 1);
        }, 1000);

        setTimeout(function(){
            s.clear();
            x = s.image("assets/game/slot/"+imgOne+".svg", posX, 10, size, size);
            x.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            y = s.image("assets/game/slot/"+imgtwo+".svg", posY, 10, size, size);
            y.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            z = s.image("assets/game/slot/"+imgthree+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            imgOne = Math.floor((Math.random() * 3) + 1);
            imgtwo = Math.floor((Math.random() * 3) + 1);
            imgthree = Math.floor((Math.random() * 3) + 1);
        }, 1300);

        // Resultado uno
        setTimeout(function(){
            s.clear();
            x = s.image("assets/game/slot/"+a+".svg", posX, 10, size, size);
            x.animate({ transform: 'translate(0 '+translado+')' }, 250, mina.linear )
        }, 1600);

        // Segunda vuelta
        setTimeout(function(){
            y.remove();
	    	z.remove();
            y = s.image("assets/game/slot/"+imgtwo+".svg", posY, 10, size, size);
            y.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            z = s.image("assets/game/slot/"+imgthree+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            imgtwo = Math.floor((Math.random() * 3) + 1);
            imgthree = Math.floor((Math.random() * 3) + 1);
        }, 1600);

        setTimeout(function(){
            y.remove();
	    	z.remove();
            y = s.image("assets/game/slot/"+imgtwo+".svg", posY, 10, size, size);
            y.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            z = s.image("assets/game/slot/"+imgthree+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            imgtwo = Math.floor((Math.random() * 3) + 1);
            imgthree = Math.floor((Math.random() * 3) + 1);
        }, 1900);

        // Segundo resultado
        setTimeout(function(){
            y.remove();
	    	z.remove();
            y = s.image("assets/game/slot/"+b+".svg", posY, 10, size, size);
            y.animate({ transform: 'translate(0 '+translado+')' }, 250, mina.linear )
        }, 2200);

        // Tercera Vuelta
        setTimeout(function(){
            z.remove();
            z = s.image("assets/game/slot/"+imgthree+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            imgthree = Math.floor((Math.random() * 3) + 1);
        }, 2200);

        setTimeout(function(){
            z.remove();
            z = s.image("assets/game/slot/"+imgthree+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            imgthree = Math.floor((Math.random() * 3) + 1);
        }, 2500);

        // Tercer resultado
        setTimeout(function (){
            z.remove();
            z = s.image("assets/game/slot/"+c+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 '+translado+')' }, 250, mina.linear )
            maquina_girando = false;
        }, 2800);

        // Impresion de profit al finalizar giro
        setTimeout(function(){

            //Triples
            if( a == b && b == c){
                s.clear();
                function unoX(){x.animate({opacity : 0},1000, dosX);}
                function dosX (){x.animate({opacity : 1},1000, unoX);}
                x = s.image("assets/game/slot/"+a+".svg", posX, (10+translado), size, size);
                unoX();

                function unoY(){y.animate({opacity : 0},1000, dosY);}
                function dosY (){y.animate({opacity : 1},1000, unoY);}
                y = s.image("assets/game/slot/"+b+".svg", posY, (10+translado), size, size);
                unoY();

                function unoZ(){z.animate({opacity : 0},1000, dosZ);}
                function dosZ (){z.animate({opacity : 1},1000, unoZ);}
                z = s.image("assets/game/slot/"+c+".svg", posZ, (10+translado), size, size);
                unoZ();
            }
            // Doble derecha
            else if(b == c && a !== b){
                s.clear();
                x = s.image("assets/game/slot/"+a+".svg", posX, (10+translado), size, size);

                function unoY(){y.animate({opacity : 0},1000, dosY);}
                function dosY (){y.animate({opacity : 1},1000, unoY);}
                y = s.image("assets/game/slot/"+b+".svg", posY, (10+translado), size, size);
                unoY();

                function unoZ(){z.animate({opacity : 0},1000, dosZ);}
                function dosZ (){z.animate({opacity : 1},1000, unoZ);}
                z = s.image("assets/game/slot/"+c+".svg", posZ, (10+translado), size, size);
                unoZ();
            }
            // Doble izquierda
            else if (a == b && b !== c){
                s.clear();
                function unoX(){x.animate({opacity : 0},1000, dosX);}
                function dosX (){x.animate({opacity : 1},1000, unoX);}
                x = s.image("assets/game/slot/"+a+".svg", posX, (10+translado), size, size);
                unoX();

                function unoY(){y.animate({opacity : 0},1000, dosY);}
                function dosY (){y.animate({opacity : 1},1000, unoY);}
                y = s.image("assets/game/slot/"+b+".svg", posY, (10+translado), size, size);
                unoY();

                z = s.image("assets/game/slot/"+c+".svg", posZ, (10+translado), size, size);
            }

            let profit_maquina, clase_actual;
            profit_maquina = document.getElementById("bet-machine");
            clase_actual = profit_maquina.classList;

            if (classe == 'rojo'){
                profit_maquina.classList.remove(clase_actual);
                profit_maquina.classList.add(classe);
                profit_maquina.innerHTML = profit;
            }
        	else if (classe == 'verde'){
                profit_maquina.classList.remove(clase_actual);
                profit_maquina.classList.add("flash");
                profit_maquina.innerHTML = "YOU WIN !!";

        		setTimeout(function(){
                    profit_maquina.classList.remove(clase_actual);
                    profit_maquina.classList.add(classe);
                    profit_maquina.innerHTML = profit;
                }, 5500);
        	}
        }, 3300)

    }
}


// **********************************************************
// Contrato o comportamiento modal
// **********************************************************
var contract_window, modal;
var estado_modal_how = true;
function openModal(e){
    contract_window = document.getElementById(e+'-window');
    modal = document.getElementById(e+'-modal');

    // Get the button that opens the modal
    var btn = document.getElementById(e);

    // Get the <span> element that closes the modal
    var span = document.getElementById(e+'-close');

    // When the user clicks on the button, open the modal
    if (e !== 'how-play') {
        modal.style.display = "block";
        contract_window.style.display = "block";
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
            contract_window.style.display = "none";
        }
    }
    if (e == "how-play") {
        if (estado_modal_how) {
            modal.style.display = "block";
            contract_window.style.display = "block";

            span.onclick = function() {
                modal.style.display = "none";
                contract_window.style.display = "none";
            }
            estado_modal_how = false;
        }
        else {
            datos_girar_maquina(0); reordenar(respuesta);
        }
    }
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == contract_window) {
        modal.style.display = "none";
        contract_window.style.display = "none";
    }
}
