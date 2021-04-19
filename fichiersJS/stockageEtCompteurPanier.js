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
    let compteur2 = document.getElementById("compteurPanier2");
    compteur.textContent = "Panier "+ "( " + (panierClient.length) +" )"; 
    compteur2.textContent =  " " + (panierClient.length) + " ";   
}

stockagePanier();
compteurPanier();