//Element dans lequel va s'afficher le panier/

let panier = document.getElementById("panier");


//Panier du client/

let panierClient = JSON.parse(localStorage.getItem("panierClient")); // JSON.parse convertit le JSON en javascript

// Vérifions si notre objet de stockage est présent, sinon le créer /

if(localStorage.getItem("panierClient")){
    console.log(panier);                                        //   updatePanier() ou simplement afficher le panier/
}else{
    let panierTab = [];
    localStorage.setItem("panierClient", JSON.stringify(panierTab));

    console.log("Creation de votre panier");   
}

//fonction

   const ajouterAuPanier = async()=>{
    
    const ajouter = await getAllCam();
    panierClient.push(ajouter);
    localStorage.setItem("panierClient", JSON.stringify(panierClient));    //JSON.stringify convertit le javascript en JSON
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
    
        //Création du ligne tableau supplémentaire à chaque ajout au panier

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
        //Position HTML
            bodyTableau.appendChild(ajoutLigneTableau);
            ajoutLigneTableau.appendChild(cellule1BodyPhoto);
            ajoutLigneTableau.appendChild(cellule2BodyNom);
            ajoutLigneTableau.appendChild(cellule3BodyLentille);
            ajoutLigneTableau.appendChild(cellule4BodyPrix);
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
        }
                                                           
    }else{
        alert("aucun article dans votre panier");
        let panierVide =document.createElement("div");
        panierVide.setAttribute("class", "nothing text-center");
        panier.appendChild(panierVide);
        panierVide.textContent = ("Aucun article dans votre panier");
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

var formulaireValidation = document.getElementById("buttonValider");
var prenom = document.getElementById("prenom");
var nom = document.getElementById("nom");
var adresse = document.getElementById("adresse");
var email = document.getElementById("email");
var ville = document.getElementById("ville");
var prenomManquant = document.getElementById("prenomManquant");
var nomManquant = document.getElementById("nomManquant");
var adresseManquante = document.getElementById("adresseManquante");
var villeManquante = document.getElementById("villeManquante");
var emailManquant = document.getElementById("emailManquant");

formulaireValidation.addEventListener("click",validation);

function validation(event){
    //si le champ est vide
    if(prenom.validity.valueMissing){
        event.preventDefault();
        prenomManquant.textContent = "N'oubliez pas votre prénom";
        prenomManquant.style.color ="red";
    
    }  if (adresse.validity.valueMissing){
        event.preventDefault();
        adresseManquante.textContent = "N'oubliez pas votre adresse";
        adresseManquante.style.color ="red";
    }  if (ville.validity.valueMissing){
        event.preventDefault();
        villeManquante.textContent = "N'oubliez pas votre ville";
        villeManquante.style.color ="red";
    }  if (email.validity.valueMissing){
        event.preventDefault();
        emailManquant.textContent = "N'oubliez pas votre email";
        emailManquant.style.color ="red";

    }  if(nom.validity.valueMissing){
        event.preventDefault();
        nomManquant.textContent = "N'oubliez pas votre nom";
        nomManquant.style.color ="red";
    }

}











