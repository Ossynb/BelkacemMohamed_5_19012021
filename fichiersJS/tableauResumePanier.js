//variable neccessaire pour le tableau recapitulatif
let ajoutLigneTableau ;
let cellule1BodyPhoto ;
let imagePhoto;
let cellule2BodyNom ;
let cellule3BodyLentille ;
let cellule4BodyPrix ;
let cellule5BodyRemove ;
let bodyTableau = document.querySelector("tbody");
let cellule4FooterTableau = document.querySelector("#cellule4FooterTableau");
let total =0;

// Construction de la structure HTML de la ligne
function creationElementPanier(){ 
    ajoutLigneTableau = document.createElement("tr");
    cellule1BodyPhoto = document.createElement("td");
    imagePhoto = document.createElement("img");
    cellule2BodyNom = document.createElement("td");
    cellule3BodyLentille = document.createElement("td");
    cellule4BodyPrix = document.createElement("td");
    cellule5BodyRemove = document.createElement("td");
}

//fonction qui gère l'agencement/la hierarchie des balises HTML
function positionHtmlPanier(){
    bodyTableau.appendChild(ajoutLigneTableau);
    ajoutLigneTableau.append(cellule1BodyPhoto, cellule2BodyNom, cellule3BodyLentille, cellule4BodyPrix, cellule5BodyRemove);
    cellule1BodyPhoto.appendChild(imagePhoto);
}

//Ajout des attributs sur les balises
function ajoutAttributs (){
    imagePhoto.src = panierClient[i].imageUrl;
    imagePhoto.alt = "Photo de l'appareil";
    imagePhoto.className = "imagePhoto";
    cellule1BodyPhoto.setAttribute("data-Label", "");
    cellule2BodyNom.setAttribute("data-label", "");
    cellule3BodyLentille.setAttribute("data-Label", "");
    cellule4BodyPrix.setAttribute("data-Label", "");
    cellule5BodyRemove.setAttribute("data-Label", "");
};

//Ajout du contenu dans les cellules
function ajoutContenuCellule (){
    let numLigne = panierClient.indexOf(panierClient[i]);
    cellule2BodyNom.textContent = JSON.stringify(panierClient[i].name);
    cellule3BodyLentille.textContent = JSON.stringify(panierClient[i].lenses[0]);
    cellule4BodyPrix.textContent = (panierClient[i].price/100) + " EUR";
    cellule4FooterTableau.textContent = total/100 + " eur";  
    cellule5BodyRemove.innerHTML = "<button type='text' class='btn btn-secondary id='buttonRemove'>Supprimer</button>";    
    console.log(typeof(numLigne));
    cellule5BodyRemove.addEventListener("click", () =>{
        supprimerDuPanier(numLigne);
    })
   
};

// Ajout du contenu panier dans l'objet produit dans le session storage
function ajoutTotalPanierStorage(){
    sessionStorage.setItem("Total",total/100)
};

//Fonction pour créer un tableau recapitulatif du contenu panier 
function tableauRecapPanier(){                                          
    if(panierClient.length>0){
        //Création d'une ligne tableau supplémentaire à chaque ajout au panier
        for (i=0;i<panierClient.length;i++){
            // Ajout du prix de l'appareil photo sur le prix total du panier
            total += panierClient[i].price;                         
            creationElementPanier();
            positionHtmlPanier();
            ajoutAttributs();
            ajoutContenuCellule();
            ajoutTotalPanierStorage();  
        }
                                                           
    }else{
        let panierVide =document.querySelector("#aucunArticle");
        panierVide.textContent = ("Aucun article dans votre panier");
        panierVide.style.color = "red";
        panierVide.style.background = "blanchedalmond";
        paragrapheValidationCommande.style.visibility = "hidden";
        //Pour éviter un envoi de formulaire si le panier est vide, l'utilisateur ne peut pas y accéder
        formulaire.style.visibility = "hidden";
        tableauVide.style.visibility = "hidden";
    }  
};

//fonction qui permet la suppression de l'article du panier de l'utilisateur
async function supprimerDuPanier(i){
    panierClient.splice(i,1);
    localStorage.clear();
    localStorage.setItem("panierClient", JSON.stringify(panierClient));
    window.location.reload();
};

tableauRecapPanier();



 

