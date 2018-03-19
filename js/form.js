function datos_contactanos_m(){
    let name = document.getElementById("name-m").value;
    let email = document.getElementById("email-m").value;
    let comment = document.getElementById("comment-m").value;
    enviar_form (name, email, comment);
}

function datos_contactanos(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comment").value;
    enviar_form (name, email, comment);
}

function datos_newsletter(){
    let email = document.getElementById("subscribe-email").value;
    enviar_form ("subscribe", email, "subscribe");
}

function enviar_form (name, email, comment) {

    let url = "https://jackynet.eu-4.evennode.com/contacto";

    if(Boolean(name) && Boolean(email) && Boolean(comment)){
        fetch(url, {method: 'post', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "comment": comment
            })
        })
        .then(function(response){if (!response.ok) {throw Error(response.statusText);} return response.json();})
        .then(function(data) {
            alert('Send message');
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("comment").value = "";
        })
        .catch(function(error) {
            console.error('Parece que hubo un error: ' + error);
        });
    }else {
        alert('This field is empty');
    }
}
