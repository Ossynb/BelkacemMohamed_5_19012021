//Variables nécessaire pour la suite 
let articleImageDetails = document.querySelector("#articleImageDetails");
let articleNomDetails = document.getElementById("articleNomDetails");
let articlePrixDetails = document.querySelector(".articlePrixDetails");
let articleChoixDetails2 = document.getElementById("articleChoixDetails2");
let articleChoixDetails3 = document.getElementById("articleChoixDetails3");
let articleChoixDetails4 = document.getElementById("articleChoixDetails4");
let articleAjout = document.getElementById("ajoutPanier");


//Ajout des attributs de la card pour l'appareil photo sélectionné
function attributCardProduit(infoCam){
    articleImageDetails.setAttribute("src", infoCam.imageUrl);
    articleChoixDetails2.setAttribute("value",infoCam.lenses[0]);
    articleChoixDetails3.setAttribute("value",infoCam.lenses[1]);
    articleChoixDetails4.setAttribute("value",infoCam.lenses[2]);
}
 //Ajout du contenu de la card pour l'appareil photo sélectionné
function ajoutContenuProduitCard(infoCam){  
    articleNomDetails.textContent = infoCam.name;
    articlePrixDetails.textContent = infoCam.price/100 + " EUR";
    articleDescriptionDetails.textContent = infoCam.description;
    articleChoixDetails2.textContent = infoCam.lenses[0];   
    articleChoixDetails3.textContent = infoCam.lenses[1];
    articleChoixDetails4.textContent = infoCam.lenses[2]; 
}

//function qui recupère les informations détaillés de l'appareil photo sélectionné
const detailsCam = async () =>{
    return new Promise((resolve)=>{
        id = location.search.substring(4);// passer en parametre
        const infoCam = connectApi(id);
        resolve (infoCam);
    })
}

//après avoir consommé la promesse on peut lancer les fonctions suivantes pour construire la card
detailsCam()
.then((infoCam)=>{
    attributCardProduit(infoCam);
    ajoutContenuProduitCard(infoCam);
    articleAjout.addEventListener("click", ajouterAuPanier); 
});