//Element dans lequel va s'afficher le panier/

let contact = {};
let products = [];
let objetDeRequete = {};


let panier = document.getElementById("panier");


//Panier du client/

let panierClient = JSON.parse(localStorage.getItem("panierClient")); // JSON.parse convertit le JSON en javascript

// Vérifions si notre objet de stockage est présent, sinon le créer /

if(localStorage.getItem("panierClient")){
    console.log(panier);                                        
}else{
    let panierTab = [];
    localStorage.setItem("panierClient", JSON.stringify(panierTab));

    console.log("Creation de votre panier");   
}

//fonction

const removePanier =(i)=>{
   
   panierClient.splice(i,1);
   localStorage.clear();
   localStorage.setItem("panierClient", JSON.stringify(panierClient));
   window.location.reload();

}

const ajouterAuPanier = async()=>{
    
    const ajouter = await getAllCam();
    panierClient.push(ajouter);
    localStorage.setItem("panierClient", JSON.stringify(panierClient));    //JSON.stringify convertit le javascript en JSON
    window.location.reload();
    alert("ajouter au panier :)");

}

function panierTableau(){                                           //Fonction pour créer un tableau recapitulatif du contenu panier
    if(panierClient.length>0){
        // Construction de la structure HTML du tableau
        let tableauPanier = document.createElement("table");
        let captionTableau =document.createElement("caption");
        let colgroupTableau = document.createElement("colgroup");
        let col1Tableau = document.createElement("col");
        let col2Tableau = document.createElement("col");
    
        let têteTableau = document.createElement("thead");
        let ligneTableau =document.createElement("tr");
        let cellulePhoto = document.createElement("th");
        let celluleNom = document.createElement("th");
        let celluleLentille = document.createElement("th");
        let cellulePrix = document.createElement("th");
        let bodyTableau = document.createElement("tbody");
        let footerTableau = document.createElement("tfoot");
        let ligneFooterTableau = document.createElement("tr");
        let cellule1FooterTableau = document.createElement("td");
        let cellule2FooterTableau = document.createElement("td");
        let cellule3FooterTableau = document.createElement("td");
        let cellule4FooterTableau = document.createElement("td");
        
        
        // Position HTML
        panier.appendChild(tableauPanier);
        tableauPanier.appendChild(captionTableau);
        tableauPanier.appendChild(colgroupTableau);
        tableauPanier.appendChild(têteTableau);
        tableauPanier.appendChild(bodyTableau);
        tableauPanier.appendChild(footerTableau);

        colgroupTableau.appendChild(col1Tableau);
        colgroupTableau.appendChild(col2Tableau);

        têteTableau.appendChild(ligneTableau);
        ligneTableau.appendChild(cellulePhoto);
        ligneTableau.appendChild(celluleNom);
        ligneTableau.appendChild(celluleLentille);
        ligneTableau.appendChild(cellulePrix);

        footerTableau.appendChild(ligneFooterTableau);
        ligneFooterTableau.appendChild(cellule1FooterTableau);
        ligneFooterTableau.appendChild(cellule2FooterTableau);
        ligneFooterTableau.appendChild(cellule3FooterTableau);
        ligneFooterTableau.appendChild(cellule4FooterTableau);
        
        //Ajout des attributs 
        tableauPanier.setAttribute("class", "tableaurecapitulatif");
        col1Tableau.setAttribute("span","3");
        col1Tableau.setAttribute("class", "infoPanier");
        col2Tableau.setAttribute("class", "pricePanier");
        ligneFooterTableau.setAttribute("class","text-primary")
        
        //Ajout du contenu
        cellulePhoto.textContent = "Photo";
        celluleNom.textContent = "Nom";
        celluleLentille.textContent = "Lentille";
        cellulePrix.textContent = "Prix";
        cellule1FooterTableau.textContent = "Total";
    
        //Création d'une ligne tableau supplémentaire à chaque ajout au panier

        let total =0;
        for (i=0;i<panierClient.length;i++){
        // Ajout du prix de l'appareil photo sur le prix total du panier
            total += panierClient[i].price;                         
        // Construction de la structure HTML de la ligne 
            let ajoutLigneTableau = document.createElement("tr");
            let cellule1BodyPhoto = document.createElement("td");
            let imagePhoto = document.createElement("img");
            let cellule2BodyNom = document.createElement("td");
            let cellule3BodyLentille = document.createElement("td");
            let cellule4BodyPrix = document.createElement("td");
            let cellule5BodyRemove = document.createElement("td");
        //Position HTML
            bodyTableau.appendChild(ajoutLigneTableau);
            ajoutLigneTableau.appendChild(cellule1BodyPhoto);
            ajoutLigneTableau.appendChild(cellule2BodyNom);
            ajoutLigneTableau.appendChild(cellule3BodyLentille);
            ajoutLigneTableau.appendChild(cellule4BodyPrix);
            ajoutLigneTableau.appendChild(cellule5BodyRemove);
            cellule1BodyPhoto.appendChild(imagePhoto);
        //Ajout des attributs sur les balises
            imagePhoto.setAttribute("src",panierClient[i].imageUrl);
            imagePhoto.setAttribute("alt", "Photo de l'appareil");
            imagePhoto.setAttribute("class", "imagePhoto");
        //Ajout du contenu dans les cellules
            cellule2BodyNom.textContent = JSON.stringify(panierClient[i].name);
            cellule3BodyLentille.textContent = JSON.stringify(panierClient[i].lenses[0]);
            cellule4BodyPrix.textContent = (panierClient[i].price/100) + " EUR";
            cellule4FooterTableau.textContent = total/100 + " eur";  
            cellule5BodyRemove.innerHTML = "<button type='text' class='btn btn-secondary id='buttonRemove'>Supprimer</button>";    
        // 
            cellule5BodyRemove.addEventListener("click", removePanier);
        // Ajout du contenu panier dans l'objet produit
            products.push((panierClient[i]._id));
            sessionStorage.setItem("Total",total/100)
            
        
        }
                                                           
    }else{
        alert("aucun article dans votre panier");
        let panierVide =document.createElement("div");
        panierVide.setAttribute("class", "nothing text-center");
        panier.appendChild(panierVide);
        panierVide.textContent = ("Aucun article dans votre panier");
        paragrapheValidationCommande.style.visibility = "hidden";
        //Pour éviter un envoi de formulaire si le panier est vide, l'utilisateur ne peut pas y accéder
        formulaire.style.visibility = "hidden";
    }
    
 
};

function updatePanier(){
    let panierLastValeur = localStorage.getItem("panierClient");  //récupère la derniere valeur du panier client
                                                                    //modifier le panier sur cette ligne
}

function setPanier(){
    let panierTab = [];
    localStorage.setItem("panierClient", JSON.stringify(panierTab));
}

//Creation d'une fonction compteur pour le Panier
const compteurPanier =async()=>{
    let compteur = document.getElementById("compteurPanier");

        compteur.textContent = "Panier "+ "( " + (panierClient.length) +" )";         
};

compteurPanier();

//Creation d'une fonction validation de formulaire

let formulaire = document.getElementById("formulaire");
let paragrapheValidationCommande = document.getElementById("paragrapheValidationCommande")
let formulaireValidation = document.getElementById("buttonValider");
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let adresse = document.getElementById("adresse");
let mail = document.getElementById("email");
let ville = document.getElementById("ville");
let prenomManquant = document.getElementById("prenomManquant");
let nomManquant = document.getElementById("nomManquant");
let adresseManquante = document.getElementById("adresseManquante");
let villeManquante = document.getElementById("villeManquante");
let emailManquant = document.getElementById("emailManquant");



formulaire.addEventListener("keyup", validation);

let regexPrenom = /^([a-z\d\.-]+)$/i;
let regexNom = /^([a-z\d\.-]+)$/i;
let regexMail =  /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
let regexAdresse = /^([a-z\d\s\.-]+)$/i;
let regexVille = /^([a-z\d\s\.-]+)$/i;

function validation(event){
    
    //si le champ est vide
    if((prenom.validity.valueMissing)||(regexPrenom.test(prenom.value)==false)){
        event.preventDefault();
        prenomManquant.textContent = "Prénom manquant et/ou Format incorrect";
        prenomManquant.style.color ="red";
        prenom.style.backgroundColor = "red";
       
    
    }   else{
        prenom.style.backgroundColor = "green";
        prenomManquant.textContent = "";
        
        
        
    }
    
    if ((adresse.validity.valueMissing)||(regexAdresse.test(nom.value)==false)){
        event.preventDefault();
        adresseManquante.textContent = "Adresse manquante et/ou Format incorrect";
        adresseManquante.style.color ="red";
        adresse.style.backgroundColor = "red";
        

    }   else{
        adresse.style.backgroundColor = "green";
        adresseManquante.textContent = "";
    }
    
    if((ville.validity.valueMissing)||(regexVille.test(ville.value)==false)){
        event.preventDefault();
        villeManquante.textContent = "Ville manquante et/ou Format incorrect";
        villeManquante.style.color ="red";
        ville.style.backgroundColor = "red";
        
    
    }   else{
        ville.style.backgroundColor = "green";
        villeManquante.textContent = "";
    }

    if ((mail.validity.valueMissing)||(regexMail.test(mail.value)==false)){
        event.preventDefault();
        emailManquant.textContent = "Email manquant et/ou format incorrect";
        emailManquant.style.color ="red";
        mail.style.backgroundColor = "red";
       

    }   else{
        mail.style.backgroundColor = "green";
        emailManquant.textContent = "";
    }
    
    if((nom.validity.valueMissing)||(regexNom.test(nom.value)==false)){
        event.preventDefault();
        nomManquant.textContent = "Nom manquant et/ou Format incorrect";
        nomManquant.style.color ="red";
        nom.style.backgroundColor = "red";
        

    }   else{
        nom.style.backgroundColor = "green";
        nomManquant.textContent = "";
        
    }
    if((nom.style.backgroundColor=="green")&&(mail.style.backgroundColor=="green")&&(prenom.style.backgroundColor == "green")&&(adresse.style.backgroundColor == "green")&&(ville.style.backgroundColor == "green")){
        
        formulaireValidation.disabled=0;
        //Creation de l'objet pour la requete API POST 
        contact.firstName = prenom.value;
        contact.lastName = nom.value;
        contact.address =adresse.value;
        contact.city = ville.value;
        contact.email = mail.value;
        return contact;
        
    }   else{
        formulaireValidation.disabled=1;
    }

};

// Objets necessaire pour l'envoi à l'API 
const urlFetchPost = "http://localhost:3000/api/cameras/order";

 objetDeRequete = {
    contact,
    products,
    };


        
// envoi API avec FETCH 2      

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
          alert('Looks like there was a problem. Status Code: ' + response.status);
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
 



  
      
     
      
  
  



















// validation avec Regex, nous definissons chaque regex pour chaque champ d'entrée à l'aide d'un objet
// const inputChamps = {
//     prenom: /^([a-z\d\.-]+)$/i,
//     nom:/^([a-z\d\.-]+)$/i,
//     email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
//     adresse: /^([a-z\d\s\.-]+)$/i,
//     ville: /^([a-z\d\s\.-]+)$/i,
// }




// création d'une fonction de validation qui gérera notre validation
// const validationRegex = (champ, regex) => {
//     regex.test(champ.value) ? champ.className = 'valid' : champ.className = 'invalid';
//   }





//   let keys = document.querySelectorAll('input');
//   keys.forEach(item => item.addEventListener(
//     'keyup', e => {
//       validationRegex(e.target, inputChamps[e.target.attributes.name.value])
//     }
//   ));
















  

















