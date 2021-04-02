let objetContact ={
    firstname : prenom.value,
    lastName : nom.value,
    address : adresse.value,
    city : ville.value,
    email : mail.value,
}

let objetProduct = [];
let dataForm = {
    objetContact,
    objetProduct,
}

// création de la requete pour l'envoi à l'API avec FETCH

fetch("http://localhost:3000/api/cameras/order",{
    method : "POST",
    body : dataForm,
})
.then(response => response())
.then(response => alert(JSON.stringify(response)))
.catch(error => alert("Erreur : "+ error ));

// création de la requete pour l'envoi à l'API avec XMLHTTPrequest
EnvoiCommande = () =>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/api/cameras/order");
    xhr.responseType = "json";
    xhr.send(dataForm);
    xhr.onload = function(){
        //Si le statut HTTP n'est pas 200...
        if (xhr.status != 200){ 
            //...On affiche le statut et le message correspondant
            alert("Erreur " + xhr.status + " : " + xhr.statusText);
        //Si le statut HTTP est 200, on affiche le nombre d'octets téléchargés et la réponse
        }else{ 
            alert(xhr.response.length + " octets  téléchargés\n" + JSON.stringify(xhr.response));
        }
    };
    //Si la requête n'a pas pu aboutir...
    xhr.onerror = function(){
        alert("La requête a échoué");
    };
    //Pendant le téléchargement...
    xhr.onprogress = function(event){
        //lengthComputable = booléen; true si la requête a une length calculable
        if (event.lengthComputable){
            //loaded = contient le nombre d'octets téléchargés
            //total = contient le nombre total d'octets à télécharger
            alert(event.loaded + " octets reçus sur un total de " + event.total);
        }
    };
    };

//---------tableau de produit----------------
Json.parse(localStorage.getItem("panierClient")).forEach(panierClient[i]) =>{
    objetProduct.push(panierClient[i]._id);
}



