// **********************************************************
// Obtencion del tamaño de Viewport en relacion a Width
// **********************************************************
var vw;
vw = window.innerWidth;
window.addEventListener("resize", function(){ vw = window.innerWidth; });

// **********************************************************
// Creacion de datos a DOMContentLoadedmostrar
// **********************************************************
var intervalo_datos, intervalo_giros, respuesta, ethDls, pote, intervalo_valorPote, respuesta_pote;
var socket = io('https://jackynet.eu-4.evennode.com',{path: '/service1'});

//FUNCION: Get respuesta de EndPoint
function obtencion_datos_endpoint(){
    fetch('https://jackynet.eu-4.evennode.com/table')
    .then(function(response){if (!response.ok) {throw Error(response.statusText);} return response.json();})
    .then(function(resp) {

        //Guardamos la respuesta
        respuesta = resp.dataTable;
        respuesta_pote = respuesta[5];
        respuesta.pop();
        //INTERVALO: Mostrar datos en seccion "BETS"
        temporal();
        // intervalo_datos = setInterval(function(){manager(respuesta)}, 3000);
        //Numeros aleatorios con el cual representar el primer giro al inicio de la pagina
        let num = Math.floor((Math.random() * 9) + 1);
        //INIT FUNCION: Girar al entrar a la pag. con resultado de triples
        //Parametros Resultado, Resultado, Resultado, Profit, Clase
        setTimeout(function(){playGiro(num, num, num, false, false)}, 500);

        //INIT FUNCION: Mostrar valor del pote
        mostrar_pote();
        //INTERVALO: Mostrar el valor del pote Ethereum/USD
        intervalo_valorPote = setInterval(mostrar_pote, 300000);
    })
    .catch(function(error) {console.log('Looks like there was a problem: \n', error);});
}

//INIT FUNCION: EndPoint
obtencion_datos_endpoint();

// **********************************************************
// FUNCION: Web Socket
// **********************************************************

// Recepcion de datos del socket
socket.on('table', function(dato_actualizacion){agregar_nuevo_dato(dato_actualizacion)});

function agregar_nuevo_dato(nuevo_dato){
    if (!nuevo_dato) {
        respuesta.unshift(nuevo_dato);
        if (respuesta.length >=15) { respuesta.pop(); }
        temporal();
    }
}


var datos_existentes = false;
function temporal (){
    let div_correspondiente;
    if (vw < 481) {div_correspondiente = "datos-m";} //Ver. telefonos < 480px
    else {div_correspondiente = "datos";}//Ver. tablet o superior > 481px

    if (datos_existentes) {
        document.getElementById(div_correspondiente).innerHTML = "";
    }true
    for (var i = 0; i < respuesta.length; i++) {
        let agregar = document.getElementById(div_correspondiente);
        let contenedor = document.createElement("div");
        let contenedor_resultado = document.createElement("div");
        let contenedor_address = document.createElement("div");
        let address = document.createElement("div");
        let game = document.createElement("div");
        let bet = document.createElement("div");
        let profit = document.createElement("div");
        let blocki = document.createElement("div");

        let value_profit = calcular_profit(respuesta[i].Resultado.charAt(0), respuesta[i].Resultado.charAt(2), respuesta[i].Resultado.charAt(4), respuesta[i].Valor)

        let img = new Image();
        img.src = blockies.toDataUrl(respuesta[i].Cliente);
        address.innerHTML = respuesta[i].Cliente;

        game.innerHTML = "Game: "+respuesta[i].Resultado;
        bet.innerHTML = "Bet : "+(respuesta[i].Valor/ 1000000000000000000).toFixed(2);
        profit.innerHTML= "Profit: "+value_profit[0];
        profit.classList.add(value_profit[1]);
        blocki.appendChild(img);

        contenedor.classList.add("contenedor_datos");
        contenedor.setAttribute('id', i);
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

        agregar.appendChild(contenedor);

    }
    datos_existentes = true;
}



// **********************************************************
// FUNCION: Mostrar valor del pote Ethereum/USD
// **********************************************************
//Checa el estado en la que se visualiza el valor del pote
//TRUE --> Ethereum
//FALSE --> USD
var estado_pote = true;

//FUNCION
function mostrar_pote(){
    if (estado_pote) {
        //Guardamos el valor del pote obtenido de la respuesta
        pote = respuesta_pote.potValue;
        //Mostramos el valor del pote
        document.getElementById("pote").innerHTML = pote.toFixed(2) +" ETH";
        //Cambiamos el estado a false
        estado_pote = false;
    }else {
        let aux = pote * ethDls;
        document.getElementById("pote").innerHTML = aux.toFixed(2) +" USD";
        estado_pote = true;
    }
}

// **********************************************************
// FUNCION: Obtener valor del Ethereum [Api CrytoCompare]
// **********************************************************
function obtener_valor_ethereum() {
	var url = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';
	fetch(url)
	.then(function(response){if (!response.ok) {throw Error(response.statusText);} return response.json();})
	.then(function(data) {ethDls = data.USD;})
	.catch(function(error){console.log('Parece que hubo un error: ' + error);});
}

//INIT FUNCION
obtener_valor_ethereum();
// INTERVALO: Obtener el valor del Ethereum cada 30min.
setInterval(obtener_valor_ethereum, 1800000);


// **********************************************************
// FUNCION: Calcular valor de profit y su clase
// **********************************************************
//Parametros: Resultado1, Resultado2, Resultado3, Apuesta
function calcular_profit(a, b, c, bet){
    let cambioNum = ["", 1, 1, 1, 2, 2, 2, 3, 3, 3];
	let profit, color;
	bet = (bet / 1000000000000000000);

    //Comprobacion de triples
	if ((cambioNum[a] == cambioNum[b]) && (cambioNum[b] == cambioNum[c])) {
		if (cambioNum[a] == 1) {profit = "150%"; /*(bet * 1.5).toFixed(3);*/}
		if (cambioNum[a] == 2) {profit = "200%";/*(bet * 2).toFixed(3);*/}
		if (cambioNum[a] == 3) {profit = "300%";/*(bet * 3).toFixed(3);*/}
		color = 'verde';
	}
    //Comprobacion de dobles
    else if ((cambioNum[a] == cambioNum[b]) || (cambioNum[b] == cambioNum[c])) {color = 'verde'; profit = "110%"/*(bet * 1.1).toFixed(3);*/}
    //Perdio
	else {color = 'rojo'; profit = "0%" /*bet.toFixed(3);*/}

	return [profit, color];
}

// **********************************************************
// FUNCION: Mostrar datos de almacenados en respuesta [Seccion "BETS"]
// **********************************************************
var contador = 0;
var manager = (datos) => {
    if (contador < datos.length - 1) { contador ++; }
    else { contador = 0; }

    //Dependiendo del vw, seleccionamos donde mostrar los datos
    let div_correspondiente;
    if (vw < 481) {div_correspondiente = "datos-m";} //Ver. telefonos < 480px
    else {div_correspondiente = "datos";}//Ver. tablet o superior > 481px


    let padre = document.getElementById(div_correspondiente);
    if ((padre.firstChild) && (padre.childNodes.length < 2)) { add(padre, true, datos); }
    else if (!padre.firstChild) { add(padre, true, datos); }
    else if ((padre.childNodes.length > 1) && (padre.childNodes.length < 10)) { add(padre, true, datos); }
    else if (padre.childNodes.length == 10) {
        less(padre);
        add(padre, true, datos);
    }
}

var add = (_padre, numero, datos) => {

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

var less = (_padre) => { _padre.removeChild(_padre.lastChild); }

var reordenar = (datos) => {

    //Dependiendo del vw, seleccionamos donde mostrar los datos
    let div_correspondiente;
    if (vw < 481) {div_correspondiente = "datos-m";} //Ver. telefonos < 480px
    else {div_correspondiente = "datos";}//Ver. tablet o superior > 481px

    let padre = document.getElementById(div_correspondiente);
    contador = 0;

    while (padre.firstChild) { padre.removeChild(padre.firstChild); }

    while (contador < 8) {
        if (contador > 4) {
            let aux = (contador - (respuesta.length-3))
            add(padre,aux, datos)
        }
        else { add(padre, contador, datos); }
        contador ++;
    }
}

// **********************************************************
// FUNCION: Reproducir el resultado de un dato [Seccion "BETS"]
// **********************************************************

var estado_remover_clase = true;
//Parametros: Id del div
function datos_girar_maquina(ev){
    let a, b, c;
    let resultado, classe, valor_profit;
    let div_correspondiente;

    if (vw < 481) {div_correspondiente = "datos-m";} //Ver. telefonos < 480px
    else {div_correspondiente = "datos";}//Ver. tablet o superior > 481px

    if (maquina_girando === false) {
        document.querySelectorAll("#"+div_correspondiente+" div.active_btn")
        .forEach(item => item.classList.remove("active_btn"));

        document.getElementById(ev).classList.add("active_btn");
    }

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

    //INIT FUNCION: Animacion de giros
    //Parametros: resultado1, resultado2, resultado3, profit, clase
    playGiro(a, b, c, valor_profit, classe)
}

// **********************************************************
// FUNCION PRINCIPAL: Animacion de giros
// **********************************************************
//Estado de la maquina
//FALSE --> No esta girando
//TRUE --> Esta mostrando un resultado
var maquina_girando = false;
function playGiro(a, b, c, profit, classe){
    //Comprueba el estado de la maquina
    if (maquina_girando === false) {
        //Cambiamos su estado
        maquina_girando = true;

	    // Variables pantallas de ordenador
        let x, y, z;
	    var size = 80;
	    var posX = 25;
	    var posY = 140;
	    var posZ = 247;
        let translado = 60

        function imagenesRandom(){
            let imgOne = Math.floor((Math.random() * 3) + 1);
            let imgtwo = Math.floor((Math.random() * 3) + 1);
            let imgthree = Math.floor((Math.random() * 3) + 1);

            return [imgOne, imgtwo, imgthree];
        }

	    // Para las diferentes pantallas
        if (vw <= 480){size = 50; posX = 15; posY = 79; posZ = 140; translado = 26;}
        if (profit !== true && classe !== true) {
            if (vw > 480 && vw <= 768){size = 50; posX = 15; posY = 79; posZ = 140; translado = 26;}
            else if (vw > 768 && vw < 1023){size = 80; posX = 30; posY = 139; posZ = 250; translado = 50;}
            else if (vw >= 1023 && vw <= 1024){size = 80; posX = 18; posY = 112; posZ = 205; translado = 40;}
            else if (vw > 1024 && vw < 1176){posX = 29; posY = 138; posZ = 248; translado = 46;}
        }
	    // Obtencion de numeros randoms para tener imagenes aleatorias
	    // Representacion de los numeros y cambio de numeros del 1 - 9 ah 1 - 3

	    // Primer paso: cambio de numeros
        let cambioNum = ["", 1, 1, 1, 2, 2, 2, 3, 3, 3];
	    a = cambioNum[a];
	    b = cambioNum[b];
	    c = cambioNum[c];

        let idSVG = "#svg";
        if (profit === true && classe === true) {
            if (vw <= 480){idSVG = "#svg-juguete-m";}
            else { idSVG = "#svg-juguete"; }
        }else if (profit !== true && classe !== true) {
            idSVG = "#svg";
        }

	    // Declaramos el SVG
	    var s = Snap(idSVG);
	    // Limpiamos el campo
	    s.clear();

	    // Empezamos el primer recorrido
	    setTimeout(function(){
            let img_random = imagenesRandom();

	    	x = s.image("assets/game/slot/"+img_random[0]+".svg", posX, 10, size, size);
	    	x.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

	    	y = s.image("assets/game/slot/"+img_random[1]+".svg", posY, 10, size, size);
	    	y.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

	    	z = s.image("assets/game/slot/"+img_random[2]+".svg", posZ, 10, size, size);
	    	z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

	    }, 100);

        setTimeout(function(){
            s.clear();
            let img_random = imagenesRandom();

            x = s.image("assets/game/slot/"+img_random[0]+".svg", posX, 10, size, size);
            x.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            y = s.image("assets/game/slot/"+img_random[1]+".svg", posY, 10, size, size);
            y.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            z = s.image("assets/game/slot/"+img_random[2]+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

        }, 400);

        setTimeout(function(){
            s.clear();
            let img_random = imagenesRandom();

            x = s.image("assets/game/slot/"+img_random[0]+".svg", posX, 10, size, size);
            x.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            y = s.image("assets/game/slot/"+img_random[1]+".svg", posY, 10, size, size);
            y.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            z = s.image("assets/game/slot/"+img_random[2]+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

        }, 700);

        setTimeout(function(){
            s.clear();
            let img_random = imagenesRandom();

            x = s.image("assets/game/slot/"+img_random[0]+".svg", posX, 10, size, size);
            x.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            y = s.image("assets/game/slot/"+img_random[1]+".svg", posY, 10, size, size);
            y.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            z = s.image("assets/game/slot/"+img_random[2]+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

        }, 1000);

        setTimeout(function(){
            s.clear();
            let img_random = imagenesRandom();

            x = s.image("assets/game/slot/"+img_random[0]+".svg", posX, 10, size, size);
            x.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            y = s.image("assets/game/slot/"+img_random[1]+".svg", posY, 10, size, size);
            y.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            z = s.image("assets/game/slot/"+img_random[2]+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

        }, 1300);

        // Resultado uno
        setTimeout(function(){
            s.clear();
            addSonido();
            x = s.image("assets/game/slot/"+a+".svg", posX, 10, size, size);
            x.animate({ transform: 'translate(0 '+translado+')' }, 250, mina.linear )
        }, 1600);

        // Segunda vuelta
        setTimeout(function(){
            y.remove();
	    	z.remove();
            let img_random = imagenesRandom();

            y = s.image("assets/game/slot/"+img_random[1]+".svg", posY, 10, size, size);
            y.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            z = s.image("assets/game/slot/"+img_random[2]+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

        }, 1600);

        setTimeout(function(){
            y.remove();
	    	z.remove();
            let img_random = imagenesRandom();

            y = s.image("assets/game/slot/"+img_random[1]+".svg", posY, 10, size, size);
            y.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

            z = s.image("assets/game/slot/"+img_random[2]+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

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
            let img_random = imagenesRandom();

            z = s.image("assets/game/slot/"+img_random[2]+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

        }, 2200);

        setTimeout(function(){
            z.remove();
            let img_random = imagenesRandom();

            z = s.image("assets/game/slot/"+img_random[2]+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 250)' }, 250, mina.linear )

        }, 2500);

        // Tercer resultado
        setTimeout(function (){
            z.remove();
            z = s.image("assets/game/slot/"+c+".svg", posZ, 10, size, size);
            z.animate({ transform: 'translate(0 '+translado+')' }, 250, mina.linear )
        }, 2800);



        // Impresion de profit al finalizar giro
        setTimeout(function(){

            //Triples
            if( a === b && b === c){
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
            else if(b === c && a !== b){
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
            else if (a === b && b !== c){
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
            
            if (profit !== true && classe !== true) {
                clase_actual = profit_maquina.classList;
            }

            if (classe === 'rojo'){
                profit_maquina.classList.remove(clase_actual);
                profit_maquina.classList.add(classe);
                profit_maquina.innerHTML = profit;
            }
        	else if (classe === 'verde'){
                profit_maquina.classList.remove(clase_actual);
                profit_maquina.classList.add("flash");
                profit_maquina.innerHTML = "YOU WIN !!";

        		setTimeout(function(){
                    profit_maquina.classList.remove(clase_actual);
                    profit_maquina.classList.add(classe);
                    profit_maquina.innerHTML = profit;
                }, 5500);
        	}

            if (profit === true && classe === true) {
                gana_pierde_puntos(a, b, c);
            }

        }, 3300)
        setTimeout(()=> maquina_girando = false, 3400);


    }
}

// **********************************************************
// FUNCION: Sonido de resultado
// **********************************************************
function addSonido(){
    let a = document.getElementById("sonido_game");
    a.play();
}
// **********************************************************
// Contrato o comportamiento modal
// **********************************************************
var contract_window, modal;
var estado_modal_how = true;
var estadoNumBtnPlay = 0;
var temp = "";
function openModal(e){
    contract_window = document.getElementById(e+'-window');
    modal = document.getElementById(e+'-modal');

    // Get the button that opens the modal
    var btn = document.getElementById(e);
    // Get the <span> element that closes the modal
    var span = document.getElementById(e+'-close');
    if (temp !== e && temp !== "") {
        let a = document.getElementById(temp+'-window').style.display = "none";
        let b = document.getElementById(temp+'-modal').style.display = "none";
    }
    temp = e;

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
            if (maquina_girando === false) {

                datos_girar_maquina(estadoNumBtnPlay);
                if (estadoNumBtnPlay < respuesta.length - 1) estadoNumBtnPlay++;
                else estadoNumBtnPlay = 0;
                // reordenar(respuesta);

            }
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



// **********************************************************
// FUNCION: Jugar la maquina ficticia
// **********************************************************
//Parametros Resultado, Resultado, Resultado, Profit, Clase
var apuesta_puntos = 0;
var puntos_jugador = 1000;
var pote_puntos = 20000;
function jugar_por_puntos(){
    let num1 = Math.floor((Math.random() * 9) + 1);
    let num2 = Math.floor((Math.random() * 9) + 1);
    let num3 = Math.floor((Math.random() * 9) + 1);

    if (vw <= 480){apuesta_puntos = document.getElementById("apuesta_puntos-m").value;}
    else { apuesta_puntos = document.getElementById("apuesta_puntos").value; }

    if (puntos_jugador > 0 && apuesta_puntos <= 500){ playGiro(num1, num2, num3, true, true); }
    else { alert("No ahi puntos o apuesta 0"); }
}

function gana_pierde_puntos(num1, num2, num3){
    let temp, agregar_puntos, pote_juguete;

    if (vw <= 480){
        agregar_puntos = document.getElementById("puntos-jugador-m");
        pote_juguete = document.getElementById("pote-juguete-m");
    }
    else{
        agregar_puntos = document.getElementById("puntos-jugador");
        pote_juguete = document.getElementById("pote-juguete");
    }
    if (num1 == num2 && num2 == num3) {
        //premio
         temp = apuesta_puntos * 3;
         // puntos jugador + premio
         puntos_jugador = puntos_jugador + temp;
         agregar_puntos.value = puntos_jugador;
         //restamos el premio del pote
         pote_puntos = pote_puntos - temp;
         pote_juguete.innerHTML = pote_puntos +" POINTS";
    }
    else if(num1 == num2 || num2 == num3){
        temp = apuesta_puntos * 2;
        puntos_jugador = puntos_jugador + temp;
        agregar_puntos.value = puntos_jugador;
        pote_puntos = pote_puntos - temp;
        pote_juguete.innerHTML = pote_puntos +" POINTS";
    }
    else {
        // Sumamos la apuesta al pote
        pote_puntos = pote_puntos + parseInt(apuesta_puntos);
        //restamos apuesta a los puntos del jugador
        puntos_jugador = puntos_jugador - apuesta_puntos;
        agregar_puntos.value = puntos_jugador;
        pote_juguete.innerHTML = pote_puntos +" POINTS";
    }
}
