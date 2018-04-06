// _____________________________________________
// check promos
// _____________________________________________

window.onload = ()=>{
    let url = "https://jackynet.eu-4.evennode.com/Promo";
    return  fetch(url, {method:'get'})
    .then((x)=>x.json())
    .then(
        (y)=>
        {
            
            desplegartabla(y.resultado)
        }
    )

    .catch(
        (error)=>console.log(error)
    )};
var desplegartabla = (datos)=>{
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
tt.oninput =()=>{
    let tabla = document.querySelectorAll("#address")
    let z = document.querySelectorAll(".visible")
    for(let i in tabla)
    {   

        if(tabla[i].textContent){
            let valor1 = tabla[i].textContent.toLowerCase();
            let valor2 = tt.value.toLowerCase();
          valor1.includes(valor2)?
          vis(tabla[i].parentNode.classList):
          invis(tabla[i].parentNode.classList)
          
        }
    }
   
    if(document.querySelectorAll(".visible").length==0){
        vis(mensaje.classList);
    }else{
        if(z[0].id!="mensaje"){invis(mensaje.classList)}
    }

    }
var vis = (x)=>{

    x.remove("invisible")
    x.add("visible")}
var invis = (x)=>{
    x.remove("visible")
    x.add("invisible")}