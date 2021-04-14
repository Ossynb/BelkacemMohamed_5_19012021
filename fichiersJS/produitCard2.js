
//Variables nécessaire pour la suite 
let articleImageDetails = document.querySelector("#articleImageDetails");
let articleNomDetails = document.getElementById("articleNomDetails");
let articlePrixDetails = document.querySelector(".articlePrixDetails");
let articleChoixDetails2 = document.getElementById("articleChoixDetails2");
let articleChoixDetails3 = document.getElementById("articleChoixDetails3");
let articleChoixDetails4 = document.getElementById("articleChoixDetails4");
let articleAjout = document.getElementById("ajoutPanier");


//fonction qui affiche le détail de chaque article dans une card bootstrap
async function detailsCam() {
    id = location.search.substring(4);// passer en parametre
    const infoCam = await getAllCam(id);
    attributCardProduit();
    ajoutContenuProduitCard();

//Ajout des attributs
function attributCardProduit(){
    articleImageDetails.setAttribute("src", infoCam.imageUrl);
    articleChoixDetails2.setAttribute("value",infoCam.lenses[0]);
    articleChoixDetails3.setAttribute("value",infoCam.lenses[1]);
    articleChoixDetails4.setAttribute("value",infoCam.lenses[2]);
}
 //Ajout du contenu
function ajoutContenuProduitCard(){  
    articleNomDetails.textContent = infoCam.name;
    articlePrixDetails.textContent = infoCam.price/100 + " EUR";
    articleDescriptionDetails.textContent = infoCam.description;
    articleChoixDetails2.textContent = infoCam.lenses[0];   
    articleChoixDetails3.textContent = infoCam.lenses[1];
    articleChoixDetails4.textContent = infoCam.lenses[2]; 
}

articleAjout.addEventListener("click", ajouterAuPanier);     // une seule action
/* articleAjout.addEventListener("click", function(){                
  ajouterAuPanier();
}); */

};

detailsCam();