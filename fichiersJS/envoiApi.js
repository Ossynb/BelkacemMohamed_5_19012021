//Objets necessaire pour l'envoi à l'API 
let contact = {};
let products = [];
let objetDeRequete = {
    contact,
    products,
};

//Creation du contenu de l'objet contact pour la requete API POST
function objetContact(){
  if (formulaireValidation.disabled==0){
    contact.firstName = prenom.value;
    contact.lastName = nom.value;
    contact.address =adresse.value;
    contact.city = ville.value;
    contact.email = mail.value;
    console.log(contact);
    return contact;
  };
}

//Ajout le/les _id d'article(s) dans l'objet products pour la requete API POST
function ajoutContenuProducts(){
  for(var i= 0; i < panierClient.length; i++){
    products.push((panierClient[i]._id));
    console.log(products);
  };
}

//Envoi de l'objet de requete contenant l'objet contact et le tableau de produit à API avec FETCH      
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
//Evénement click sur le bouton "valider votre commande" 
formulaireValidation.addEventListener("click", async (e) => {
  e.preventDefault();
  objetContact();
  ajoutContenuProducts();
  await envoiCommande();          
});  