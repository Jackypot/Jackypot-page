// _____________________________________________
// check promos
// _____________________________________________

var Datosfb;
//carga los datos del endpoint al cargar la ventana y llama a desplegar tabla
window.onload = ()=>{
    let url = "https://jackynet.eu-4.evennode.com/Promo";
    return  fetch(url, {method:'get'})
    .then((x)=>x.json())
    .then(
        (y)=>
        {
            Datosfb = y.resultado
            desplegartabla(Datosfb);
        }
    )

    .catch(
        (error)=>console.log(error)
    )
};

//metodo que ocurre cada vez que cambia el valor del input
tt.oninput =()=>{
    
    borrartabla()
    let nuevosDatos = Datosfb.filter(diferente)
    console.log(nuevosDatos)
    if(nuevosDatos.length>0){
        
        invis(mensaje.classList)
        desplegartabla(nuevosDatos)
    }  
    else{vis(mensaje.classList)}
        
   

}
var diferente=(set)=>{
    let valor1 = set.address.toLowerCase();
    let valor2 = tt.value.toLowerCase();
     return valor1.includes(valor2)
}
var vis = (x)=>{

    x.remove("invisible")
    x.add("visible")}
var invis = (x)=>{
    x.remove("visible")
    x.add("invisible")}
var borrartabla = () => {
    
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}
var desplegartabla = (datos)=>{// metodo que toma los datos de la tabla y los despliega hasta un maximo de 4 divs
    let tabla = document.querySelector("#lista");
        
             datos.map((set)=>
            {
                if(tabla.childNodes.length<4){
                let img = new Image();
                img.src = blockies.toDataUrl(set.address);

                let div = document.createElement("div");
                let blocki = document.createElement("div");
                let address = document.createElement("div");
                let tiros = document.createElement("div");

                blocki.appendChild(img);
                address.innerHTML = set.address;
                tiros.innerHTML = "Free Bets  :  "+set.tirosGratis;

                div.classList.add("box2");
                blocki.classList.add("blocki2");
                address.id="address";

                div.appendChild(blocki);
                div.appendChild(address);
                div.appendChild(tiros);

                tabla.appendChild(div);
            }})
        
}
