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
            console.log(y.resultado)
            desplegartabla(y.resultado)
        }
    )

    .catch(
        (error)=>console.log(error)
    )};
var desplegartabla = (datos)=>{
    let tabla = document.querySelector("#lista");
    let lista = datos.map((set)=>{
        console.log(set)
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
    })}
tt.oninput =()=>{
   console.log(tt.value)
    let tabla = document.querySelectorAll("#address")
    for(let i in tabla)
    {   

        if(tabla[i].textContent){
          tabla[i].textContent.includes(tt.value)?
          vis(tabla[i].parentNode.classList):
          invis(tabla[i].parentNode.classList)
          
        }
    }
    }
var vis = (x)=>{
    x.remove("invisible")
    x.add("visible")}
var invis = (x)=>{
    x.remove("visible")
    x.add("invisible")}