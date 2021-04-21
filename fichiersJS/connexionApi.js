//Connexion à l'API par le biais de la methode FETCH

connectApi = (id="") => {
    return fetch("http://localhost:3000/api/cameras/" + id)
    .then((response) => {
            console.log('Voici le status: ' + response.status);
            return response;
        })
    .then(response => response.json())
    .catch(error => alert("Erreur : " + error));
}


 

 
    
     