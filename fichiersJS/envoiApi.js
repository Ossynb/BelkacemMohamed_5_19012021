// Objets necessaire pour l'envoi à l'API 
let contact = {};
let objetDeRequete = {};

 objetDeRequete = {
    contact,
    products,
    };

// envoi API avec FETCH      
const envoiCommande = async () => {
    const response = await fetch("http://localhost:3000/api/cameras/order", {
      headers: {
        "Content-Type": "application/json",
      },
      method : "POST",
      body: JSON.stringify(objetDeRequete),
    })  
    .then(
      (response) => {
        if (response.status !== 200) {
          alert('Voici le status: ' + response.status);
          return response;
        }
      })
        .then(response => response.json())
        .then(response => sessionStorage.setItem("identifiant",response.orderId))
        .catch(error => alert("Attention Erreur : " + error))
        window.location ="confirmationDeCommande.html";
        return await response.json();
  };
  
  formulaireValidation.addEventListener("click", async (e) => {
    e.preventDefault();
    
     const response = await envoiCommande();          
 });  