let idCam="";


// APPEL DE L'API
getAllCam = () => {
    return new Promise ((resolve)=>{
        var req = new XMLHttpRequest();
        req.onreadystatechange=function(){
            if(req.readyState==4){
                resolve(JSON.parse(this.responseText));
                console.log("HEY HEY me voilà");
            }else{ 
                console.log("pas encore connecté")
            }
        };
        const url ="http://localhost:3000/api/cameras";
    req.open("GET", "http://localhost:3000/api/cameras/" + idCam, true);
    req.send();
    });
};

async function cams() {
    const cams = await getAllCam();

//liaison index.html
let allArticles = document.getElementsByClassName("allArticles");
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
    listeArticles.appendChild(cadre);
   
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


async function infoCam() {
    idCam = location.search.substring(4);
    const infoCam = await getAllCam();


//liaison produits.html
let articledetails = document.getElementsByClassName("articledetails");

//Construction HTML 
    let cadreDetails = document.createElement("section")
    let articleFicheDetails = document.createElement("div");
    let articleImageDetails = document.createElement("img");
    let articleNomDetails = document.createElement("h2");
    let articlePrixDetails = document.createElement("p");
    let articleDescriptionDetails = document.createElement("p");
    let articleChoixDetails = document.createElement("p");

//Ajout des attributs

    cadreDetails.setAttribute("class", " card cadre");
    cadreDetails.setAttribute("style", "width: 35rem;");

    articleImageDetails.setAttribute("src", infoCam.imageUrl);
    articleImageDetails.setAttribute("alt", "Photo de l'appareil");
    articleImageDetails.setAttribute("class", "card-img-top");

    articleFicheDetails.setAttribute("class", "card-body articleFicheDetails text-center");
    articleNomDetails.setAttribute("class", "card-title text-center articleNomDetails");
    articlePrixDetails.setAttribute("class", "text-center articlePrixDetails");
    articleDescriptionDetails.setAttribute("class", "card-text text-center articleDescriptionDetails");
    articleChoixDetails.setAttribute("class", "text-center articleChoixDetails");

//Positionnement HTML

    infoArticle.appendChild(cadreDetails);
   
    cadreDetails.appendChild(articleImageDetails);
    cadreDetails.appendChild(articleFicheDetails);
    articleFicheDetails.appendChild(articleNomDetails);
    articleFicheDetails.appendChild(articlePrixDetails);
    articleFicheDetails.appendChild(articleDescriptionDetails);
    articleFicheDetails.appendChild(articleChoixDetails);

 //contenu
    articleNomDetails.textContent = infoCam.name;
    articlePrixDetails.textContent = infoCam.price/100 + " EUR";
    articleDescriptionDetails.textContent = infoCam.description;
    articleChoixDetails.textContent = infoCam.lenses;   

};



  

  
    








