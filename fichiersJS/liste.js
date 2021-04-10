// Variable necessaire pour le fonctionnement des fonctions  
let cadre ;
let articleFiche ;
let articleImage ;
let articleNom ;
let articlePrix ;
let articleDetails ;
//fonction pour afficher les differents produits de l'API 
async function cams() {
    const cams = await getAllCam();

//liaison index.html
let allArticles = document.getElementById("allArticles");
//construction HTML
cams.forEach((came) => {
    cadre = document.createElement("li");
    articleFiche = document.createElement("div");
    articleImage = document.createElement("img");
    articleNom = document.createElement("h2");
    articlePrix = document.createElement("p");
    articleDetails = document.createElement("a");
  /*Ajout des attributs au balise index HTML */
    cadre.setAttribute("class", " card cadre list-group-item");
    cadre.setAttribute("style", "width: 18rem;");
    articleImage.setAttribute("src", came.imageUrl);
    articleImage.setAttribute("alt", "Photo de l'appareil");
    articleImage.setAttribute("class", "card-img-top");
    articleFiche.setAttribute("class", "card-body articleFiche text-center");
    articleNom.setAttribute("class", "card-title text-center articleNom");
    articlePrix.setAttribute("class", "text-center articlePrix");
    articleDetails.setAttribute("href", "produitCard.html?id="+ came._id);
    articleDetails.setAttribute("class", "btn btn-primary articleDetails text-center");
  //positionnement HTML
    allArticles.appendChild(cadre);
    cadre.append(articleImage, articleFiche);
    articleFiche.append(articleNom, articlePrix, articleDetails);
  //contenu
    articleNom.textContent = came.name;
    articlePrix.textContent = came.price/100 + " EUR";
    articleDetails.textContent = "Détails";
  });
};

cams();

// diviser en plusieurs fonctions