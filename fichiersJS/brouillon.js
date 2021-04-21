let contact = {
  firstName: prenom.value,
  lastName: nom.value,
  address: adresse.value,
  city: ville.value,
  email: mail.value,
};
let products = [];
for (var i = 0; i < panierClient.length; i++) {
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
    method: "POST",
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
    .then(response => sessionStorage.setItem("identifiant", response.orderId))
    .catch(error => alert("Attention Erreur : " + error))
  window.location = "confirmationDeCommande.html";

};

formulaireValidation.addEventListener("click", async (e) => {
  e.preventDefault();

  await envoiCommande();
});


/*input:-webkit-autofill {
 -webkit-box-shadow:0 0 0 35px #4169E1 inset;
 -webkit-text-fill-color: #000080;
}*/

let prenomRegex = /^([^0-9][a-z\d\.-]+)[^0-9]$/i;  //REGEX : Regular Expression/Exprssion Regulière (ensemble de chaine de caractère possible)

//Cela devrait faire l'affaire pour la plupart des choses:
/^[a-z ,.'-]+$/i;