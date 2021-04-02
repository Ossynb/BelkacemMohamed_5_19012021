//Element dans lequel va s'afficher le panier/
let panier = document.getElementById("panier");

//Panier du client/
let panierClient = JSON.parse(localStorage.getItem("panierClient")); // JSON.parse convertit le JSON en javascript

//Creation de l'objet de stockage pour le panier s'il n'existe pas
function stockagePanier(){
    if(localStorage.getItem("panierClient")){
        console.log(panier);                                        
    }else{
        let panierTab = [];
        localStorage.setItem("panierClient", JSON.stringify(panierTab));
        console.log("Creation de votre panier");   
    }
}

//Creation des fonctions compteur pour le Panier, ajouter et supprimer du panier
const compteurPanier =async()=>{
    let compteur = document.getElementById("compteurPanier");

        compteur.textContent = "Panier "+ "( " + (panierClient.length) +" )";         
}

const ajouterAuPanier = async()=>{
    const ajouter = await getAllCam();
    panierClient.push(ajouter);
    localStorage.setItem("panierClient", JSON.stringify(panierClient));    //JSON.stringify convertit le javascript en JSON
    window.location.reload();
    alert("ajouter au panier :)");
}

const supprimerDuPanier =(i)=>{
   panierClient.splice(i,1);
   localStorage.clear();
   localStorage.setItem("panierClient", JSON.stringify(panierClient));
   window.location.reload();
}

//Fonction pour créer un tableau recapitulatif du contenu panier

let products = [];  // Objets necessaire pour la fonction tableauRecapPanier

function tableauRecapPanier(){                                          
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
         
            cellule5BodyRemove.addEventListener("click", supprimerDuPanier);
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

// Vérifions si notre objet de stockage est présent, sinon le créer /
stockagePanier();
compteurPanier();
