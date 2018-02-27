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
vw = window.innerWidth;
var vw;


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
