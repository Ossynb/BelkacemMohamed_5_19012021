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
    const ajouter = await getAllCam(id);
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
// Vérifions si notre objet de stockage est présent, sinon le créer /
stockagePanier();
compteurPanier();

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
// Objet necessaire pour la fonction tableauRecapPanier
let products = []; 
//Fonction pour créer un tableau recapitulatif du contenu panier 
function tableauRecapPanier(){                                          
    if(panierClient.length>0){
        
        //Création d'une ligne tableau supplémentaire à chaque ajout au panier
        let total =0;
        for (i=0;i<panierClient.length;i++){
            // Ajout du prix de l'appareil photo sur le prix total du panier
            total += panierClient[i].price;                         
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
            creationElementPanier();

            //Position HTML
            function positionHtmlPanier(){
                bodyTableau.appendChild(ajoutLigneTableau);
                ajoutLigneTableau.append(cellule1BodyPhoto, cellule2BodyNom, cellule3BodyLentille, cellule4BodyPrix, cellule5BodyRemove);
                cellule1BodyPhoto.appendChild(imagePhoto);
            }
            positionHtmlPanier();

            //Ajout des attributs sur les balises
            function ajoutAttributs (){
                imagePhoto.src = panierClient[i].imageUrl;
                imagePhoto.alt = "Photo de l'appareil";
                imagePhoto.className = "imagePhoto";
            };
            ajoutAttributs();

            //Ajout du contenu dans les cellules
            function ajoutContenuCellule (){
                cellule2BodyNom.textContent = JSON.stringify(panierClient[i].name);
                cellule3BodyLentille.textContent = JSON.stringify(panierClient[i].lenses[0]);
                cellule4BodyPrix.textContent = (panierClient[i].price/100) + " EUR";
                cellule4FooterTableau.textContent = total/100 + " eur";  
                cellule5BodyRemove.innerHTML = "<button type='text' class='btn btn-secondary id='buttonRemove'>Supprimer</button>";    
            };
            ajoutContenuCellule();

            cellule5BodyRemove.addEventListener("click", supprimerDuPanier);   

            // Ajout du contenu panier dans l'objet produit
            function ajoutContenuPanier(){
                products.push((panierClient[i]._id));
                sessionStorage.setItem("Total",total/100)
            };
            ajoutContenuPanier();
        }
                                                           
    }else{
        alert("aucun article dans votre panier");
        let panierVide =document.querySelector("#aucunArticle");
        panierVide.textContent = ("Aucun article dans votre panier");
        paragrapheValidationCommande.style.visibility = "hidden";
        //Pour éviter un envoi de formulaire si le panier est vide, l'utilisateur ne peut pas y accéder
        formulaire.style.visibility = "hidden";
        tableauVide.style.visibility = "hidden";
    }
};

