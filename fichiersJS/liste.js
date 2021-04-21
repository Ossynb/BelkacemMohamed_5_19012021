// Variable necessaire pour le fonctionnement des fonctions  
let cadre ;
let articleFiche ;
let articleImage ;
let articleNom ;
let articlePrix ;
let articleDetails ;

// Liaison index.html
let allArticles = document.getElementById("allArticles");

// Fonction creation des balises html necessaire a chaque card
function creationElementListe(){
    cadre = document.createElement("li");
    articleFiche = document.createElement("div");
    articleImage = document.createElement("img");
    articleNom = document.createElement("h2");
    articlePrix = document.createElement("p");
    articleDetails = document.createElement("a");
};

// Fonction qui gère l'agencement/la hierarchie des balises HTML
function positionHtml(){
    allArticles.appendChild(cadre);
    cadre.append(articleImage, articleFiche);
    articleFiche.append(articleNom, articlePrix, articleDetails);
};

// Ajout des attributs aux balises HTML créées par la fonction creationElementListe()
function ajoutAttributsCardListe(onlyThatCam){
    cadre.setAttribute("class", " card cadre list-group-item");
    cadre.setAttribute("style", "width: 18rem;");
    articleImage.setAttribute("src", onlyThatCam.imageUrl);
    articleImage.setAttribute("alt", "Photo de l'appareil");
    articleImage.setAttribute("class", "card-img-top");
    articleFiche.setAttribute("class", "card-body articleFiche text-center");
    articleNom.setAttribute("class", "card-title text-center articleNom");
    articlePrix.setAttribute("class", "text-center articlePrix");
    articleDetails.setAttribute("href", "produit.html?id="+ onlyThatCam._id);
    articleDetails.setAttribute("class", "btn btn-primary articleDetails text-center");
};
    
//Ajout du contenu de chacune des cards    
function ajoutContenuCardListe(onlyThatCam){
    articleNom.textContent = onlyThatCam.name;
    articlePrix.textContent = onlyThatCam.price/100 + " EUR";
    articleDetails.textContent = "Détails";
};
    
//Fonction qui appelle toutes les fonctions neccessaires pour afficher la liste montrant les produits de l'API
async function cams() {
    const cams = await connectApi();
    cams.forEach ((onlyThatCam) => {
        creationElementListe();
        ajoutAttributsCardListe(onlyThatCam);
        positionHtml();
        ajoutContenuCardListe(onlyThatCam);    
    });
};

cams();

