async function infoCam() {
    idCam = location.search.substring(4);
    const infoCam = await getAllCam();


//liaison produits.html
let infoArticle = document.getElementById("infoArticle");

//Construction HTML 
    let cadreDetails = document.createElement("section") // document = ID
    let articleFicheDetails = document.createElement("div");
    let articleImageDetails = document.createElement("img");
    let articleNomDetails = document.createElement("h2");
    let articlePrixDetails = document.createElement("p");
    let articleDescriptionDetails = document.createElement("p");
    let articleChoixDetailsLabel = document.createElement("label");
    let articleChoixDetails = document.createElement("select");
    let articleChoixDetails1 = document.createElement("option");
    let articleChoixDetails2 = document.createElement("option");
    let articleChoixDetails3 = document.createElement("option");
    let articleChoixDetails4 = document.createElement("option");
    let articleAjout = document.createElement("button");
//Ajout des attributs

    cadreDetails.setAttribute("class", " card cadre cadreDetails");
    cadreDetails.setAttribute("style", "width: 35rem;");

    articleImageDetails.setAttribute("src", infoCam.imageUrl);
    articleImageDetails.setAttribute("alt", "Photo de l'appareil");
    articleImageDetails.setAttribute("class", "card-img-top");

    articleFicheDetails.setAttribute("class", "card-body articleFicheDetails text-center");
    articleNomDetails.setAttribute("class", "card-title text-center articleNomDetails");
    articlePrixDetails.setAttribute("class", "text-center articlePrixDetails");
    articleDescriptionDetails.setAttribute("class", "card-text text-center articleDescriptionDetails");
    articleChoixDetailsLabel.setAttribute("for","choixLentille")
    articleChoixDetails.setAttribute("class", "text-center articleChoixDetails");
    articleChoixDetails.setAttribute("id","choixLentille");
    articleChoixDetails.setAttribute("name","lentille");
    articleChoixDetails1.setAttribute("value","");
    articleChoixDetails2.setAttribute("value",infoCam.lenses[0]);
    articleChoixDetails3.setAttribute("value",infoCam.lenses[1]);
    articleChoixDetails4.setAttribute("value",infoCam.lenses[2]);
    articleAjout.setAttribute("type","button");
    articleAjout.setAttribute("class","btn btn-dark ajoutPanier");
    articleAjout.setAttribute("id","ajoutPanier");
    

    articleAjout.addEventListener("click", ajouterAuPanier);     // une seule action
   // articleAjout.addEventListener("click", function(){                
    //ajouterAuPanier();
   // });

//Positionnement HTML

    infoArticle.appendChild(cadreDetails);
   
    cadreDetails.appendChild(articleImageDetails);
    cadreDetails.appendChild(articleFicheDetails);
    articleFicheDetails.appendChild(articleNomDetails);
    articleFicheDetails.appendChild(articlePrixDetails);
    articleFicheDetails.appendChild(articleDescriptionDetails);
    articleFicheDetails.appendChild(articleChoixDetailsLabel);
    articleFicheDetails.appendChild(articleChoixDetails);
  
    articleChoixDetails.appendChild(articleChoixDetails1);
    articleChoixDetails.appendChild(articleChoixDetails2);
    articleChoixDetails.appendChild(articleChoixDetails3);
    articleChoixDetails.appendChild(articleChoixDetails4);
    cadreDetails.appendChild(articleAjout);

 //contenu
    articleNomDetails.textContent = infoCam.name;
    articlePrixDetails.textContent = infoCam.price/100 + " EUR";
    articleDescriptionDetails.textContent = infoCam.description;
   
    articleChoixDetails1.textContent = "--Taille de la lentille--";
    articleChoixDetails2.textContent = infoCam.lenses[1];   
    articleChoixDetails3.textContent = infoCam.lenses[0];
    articleChoixDetails4.textContent = infoCam.lenses[2]; 
    articleAjout.textContent = "Ajouter au Panier";
};