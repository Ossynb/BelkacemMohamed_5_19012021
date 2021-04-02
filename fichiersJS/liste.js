//fonction pour afficher les differents produits de l'API 
async function cams() {
    const cams = await getAllCam();

//liaison index.html
let allArticles = document.getElementById("allArticles");
//construction HTML
cams.forEach((came) => {
    let cadre = document.createElement("section");
    let articleFiche = document.createElement("div");
    let articleImage = document.createElement("img");
    let articleNom = document.createElement("h2");
    let articlePrix = document.createElement("p");
    let articleDetails = document.createElement("a");

    /*Ajout des attributs au balise index HTML */
    cadre.setAttribute("class", " card cadre");
    cadre.setAttribute("style", "width: 18rem;")
    articleImage.setAttribute("src", came.imageUrl);
    articleImage.setAttribute("alt", "Photo de l'appareil");
    articleImage.setAttribute("class", "card-img-top")
    articleFiche.setAttribute("class", "card-body articleFiche text-center");
    articleNom.setAttribute("class", "card-title text-center articleNom");
    articlePrix.setAttribute("class", "text-center articlePrix");
    articleDetails.setAttribute("href", "produits.html?id="+ came._id);
    articleDetails.setAttribute("class", "btn btn-primary articleDetails text-center");
    //positionnement HTML
    allArticles.appendChild(cadre);
    cadre.appendChild(articleImage);
    cadre.appendChild(articleFiche);
    articleFiche.appendChild(articleNom);
    articleFiche.appendChild(articlePrix);
    articleFiche.appendChild(articleDetails);
    //contenu
    articleNom.textContent = came.name;
    articlePrix.textContent = came.price/100 + " EUR";
    articleDetails.textContent = "Détails";
  });
};

cams();