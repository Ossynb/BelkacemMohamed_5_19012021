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

        //Ajout du contenu
        cellulePhoto.textContent = "Photo";
        celluleNom.textContent = "Nom";
        celluleLentille.textContent = "Lentille";
        cellulePrix.textContent = "Prix";
        cellule1FooterTableau.textContent = "Total";
    
        let total =0;
        //Création du ligne tableau supplémentaire à chaque ajout au panier

        for (i=0;i<panierClient.length;i++){

            total += panierClient[i].price;
            let ajoutLigneTableau = document.createElement("tr");
            let cellule1BodyPhoto = document.createElement("td");
            let imagePhoto = document.createElement("img");
            let cellule2BodyNom = document.createElement("td");
            let cellule3BodyLentille = document.createElement("td");
            let cellule4BodyPrix = document.createElement("td");

            bodyTableau.appendChild(ajoutLigneTableau);
            ajoutLigneTableau.appendChild(cellule1BodyPhoto);
            ajoutLigneTableau.appendChild(cellule2BodyNom);
            ajoutLigneTableau.appendChild(cellule3BodyLentille);
            ajoutLigneTableau.appendChild(cellule4BodyPrix);
            cellule1BodyPhoto.appendChild(imagePhoto);

            imagePhoto.setAttribute("src",panierClient[i].imageUrl);
            imagePhoto.setAttribute("alt", "Photo de l'appareil");
            imagePhoto.setAttribute("class", "imagePhoto");
            
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

//Creer une fonction compteur pour le Panier
    
const compteurPanier =async()=>{
    let compteur = document.getElementById("compteurPanier");

        compteur.textContent = "Panier "+ "( " + (panierClient.length) +" )";
    
          
};

compteurPanier();





