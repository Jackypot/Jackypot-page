// **********************************************************
// Ajuste de tamaño de ventana o cambio de tamaño
// **********************************************************
function width_wrapper(){
    let w = window.innerWidth;
    let wrapper = document.getElementById("contenedor-global");

    if (w <= 1200) {wrapper.style.width = '100%'}
    if (w > 1200) {wrapper.style.width = '1200px'}
}
width_wrapper();

window.addEventListener("resize", function(){
    width_wrapper();
    vw = window.innerWidth;
    otro();
});
otro();

// **********************************************************
// Comportamiento de ventanas
// **********************************************************
var vista_activa;
var vw;
vw = window.innerWidth;

function otro(){
    if (vw > 480 && vw < 1023) {
        if(Boolean(vista_activa)) {
            let x = document.getElementById("chat");
            x.style.display = "none";
        }
    }else if (vw > 1023) {
        let r = document.getElementById("chat");
        r.style.display = "block";
    }
}

function getfocus() {
    let a = document.getElementById('chat');
    a.classList.add('luces');
    setTimeout(function(){a.classList.remove('luces')},5800);
}

function show_window(window_activate) {

    let new_window = document.getElementById(window_activate + "-window");
    let main_window1 = document.getElementById("intr");
    let main_window2 = document.getElementById("conte");
    let main_window3 = document.getElementById("chat");


    new_window.style.display = "block";
    main_window1.style.opacity = "0";
    main_window2.style.opacity = "0";
    main_window3.style.opacity = "0";

    console.log(vw);
    if (vw > 480 && vw < 1023) {
            let r = document.getElementById("chat");
            r.style.display = "none";
    }


    if ((Boolean(vista_activa)) && vista_activa !== window_activate + "-window") {
        let x = document.getElementById(vista_activa);
        x.style.display = "none";
    }else {

    }

    vista_activa = window_activate + "-window";
}

function closed_window(){
    let hide_window = document.getElementById(vista_activa);
    let main_window1 = document.getElementById("intr");
    let main_window2 = document.getElementById("conte");
    let main_window3 = document.getElementById("chat");

    if (!!vista_activa) {

        hide_window.style.display = "none";
        main_window1.style.opacity = "1";
        main_window2.style.opacity = "1";
        main_window3.style.opacity = "1";

        vista_activa = "";

        if (vw > 480 && vw < 1023) {
            let r = document.getElementById("chat");
            r.style.display = "block";
        }
    }
}

// **********************************************************
// Cambiar focus
// **********************************************************
function show_table() {
    let datos = document.getElementById("datos");
    let chat = document.getElementById("chat-con");

    datos.style.display = "block";
    chat.style.visibility = "hidden";
}

function show_chat() {
    let datos = document.getElementById("datos");
    let chat = document.getElementById("chat-con");

    datos.style.display = "none";
    chat.style.visibility = "visible";
}

var focus = false;
function change_focus(){
    let chat = document.getElementById("tittle-chat-span");
    let table = document.getElementById("tittle-table-span");

    if (focus == false) {
        chat.classList.add("activo");
        table.classList.remove("activo");
        show_chat();
        focus = true;
    }
    else{
        table.classList.add("activo");
        chat.classList.remove("activo");
        show_table();
        focus = false;
    }
}

// **********************************************************
// Funcion copy
// **********************************************************

var clipboard = new Clipboard('#address-game');
// funcion de copiado correcto
clipboard.on('success', function(e) {e.clearSelection(); alert("Address copied successfull!")});
// en caso de un error
clipboard.on('error', function(e) {console.error('Action:', e.action);console.error('Trigger:', e.trigger);});


// **********************************************************
// Funcion mostrar los premios
// **********************************************************
var mostrar = false;
var mostrar_premios = () => {
    if (mostrar) {
        document.getElementById("all-prizes").style.display = "none";
        mostrar = false;
    }else {
        document.getElementById("all-prizes").style.display = "block";
        mostrar = true;
    }
}

var mostrar_premios_m = () => {
    if (mostrar) {
        document.getElementById("all-prizes-m").style.display = "none";
        mostrar = false;
    }else {
        document.getElementById("all-prizes-m").style.display = "block";
        mostrar = true;
    }
}

// **********************************************************
// Funcion para free bets
// **********************************************************

function mostrarJugadores(){

    var nu = 60;

    for (var i = 0; i < 5; i++){
        let padre = document.getElementById("con-table");

        let contenedor_player = document.createElement("div");
        let cont_address = document.createElement("div");
        let img_player = document.createElement("div");
        let cont_bets = document.createElement("div");
        let posicion = document.createElement("div");
        let address_p = document.createElement("p");
        let bets_p = document.createElement("p");

        let img = new Image();
            img.src = blockies.toDataUrl("0xFeac34425a3Ba2FAfbbEEDB367aC5F4b4bB701D2");

        /*Imprimir datos*/
        posicion.innerHTML = "#"+(i+1);
        address_p.innerHTML = "0xFeac34425a3Ba2FAfbbEEDB367aC5F4b4bB701D2";
        bets_p.innerHTML = nu;
        nu = nu - 12;

        /*Agregar clases*/
        contenedor_player.classList.add("contenedor-player-bets")
        posicion.classList.add("posicion-player");
        img_player.classList.add("img-player");
        cont_address.classList.add("adr-bet");
        address_p.classList.add("adr-res");
        cont_bets.classList.add("total-bet");

        /*Uniendo todo*/
        img_player.appendChild(img);
        cont_address.appendChild(address_p);
        cont_bets.appendChild(bets_p);

        contenedor_player.appendChild(posicion);
        contenedor_player.appendChild(img_player);
        contenedor_player.appendChild(cont_address);
        contenedor_player.appendChild(cont_bets);

        padre.appendChild(contenedor_player);

    }
}

mostrarJugadores();
