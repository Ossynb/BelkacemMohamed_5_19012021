let contact = {
    firstName : prenom.value,
    lastName : nom.value,
    address :adresse.value,
    city : ville.value,
    email : mail.value,
  };
  let products = []; 
  for(var i= 0; i < panierClient.length; i++){
    products.push((panierClient[i]._id));
  }
  
  let objetDeRequete = {
      contact,
      products,
  };

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
          console.log('Voici le status: ' + response.status);
          return response;
        }
      })
      .then(response => response.json())
      .then(response => sessionStorage.setItem("identifiant",response.orderId))
      .catch(error => alert("Attention Erreur : " + error))
      window.location ="confirmationDeCommande.html";
      
};
  
  formulaireValidation.addEventListener("click", async (e) => {
    e.preventDefault();
    
     await envoiCommande();          
 });  