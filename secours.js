var idCam ="";

// APPEL DE L'API
var req = new XMLHttpRequest();
console.log("readyState après new : "+req.readyState);
req.onreadystatechange=function(){
    console.log("readyState a changé et vaut : "+req.readyState)
}

function getAllCam (){
    req.onload = function(){
        console.log("Appel AJAX terminé");
        console.log(" status : "+this.status);
        console.log(" response : "+this.response);
        if (this.status == 200) {
            var json=JSON.parse(this.response);
        }
    }
    var url ="http://localhost:3000/api/cameras";
    req.open("GET", "http://localhost:3000/api/cameras/" + idCam, true);
    req.send();
}

//bonne
getAllCam = () => {
    return new Promise ((resolve)=>{
        var req = new XMLHttpRequest();
        req.onreadystatechange=function(){
            if(req.readyState==4)
                {resolve(JSON.parse(this.responseText));
                console.log("Connecté");}
            else{ }
        };
        var url ="http://localhost:3000/api/cameras";
    req.open("GET", "http://localhost:3000/api/cameras/" + idCam, true);
    req.send();
    });
};






getAllCam = () => {
    return new Promise((resolve) => {
      let request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (
          this.readyState == XMLHttpRequest.DONE &&
          this.status >= 200 &&
          this.status < 400
        ) {
          resolve(JSON.parse(this.responseText));
          console.log("Connecté");
        } else {
        }
      };
      request.open("GET", "http://localhost:3000/api/cameras/" + idCam);
      request.send();
    });
  };


  getAllCam = () => {
    return new Promise ((resolve)=>{
        var req = new XMLHttpRequest();
        req.onreadystatechange=function(){
            if(req.readyState==4)
                {resolve(JSON.parse(this.responseText));
                console.log("Connecté");}
            else{ }
        };
        var url ="http://localhost:3000/api/cameras";
    req.open("GET", "http://localhost:3000/api/cameras/" + idCam, true);
    req.send();
    });
};

// balise option à faire sur infoArticle.js
// voir panier => localstorage : loacalstorage.getItem // setItem


idCam = location.search.substring(4);

const params = new URLSearchParams(window.location.search);
const id = params.get("");




if(localStorage.getItem("userPanier")){
	console.log("Administration : le panier de l'utilisateur existe dans le localStorage");
}else{
	console.log("Administration : Le panier n'existe pas, il va être créer et l'envoyer dans le localStorage");
  	//Le panier est un tableau de produits
  	let panierInit = [];
  	localStorage.setItem("userPanier", JSON.stringify(panierInit));
  };

  	//Tableau et objet demandé par l'API pour la commande
  	let contact;
  	let products = [];

	//L'user a maintenant un panier
    let userPanier = JSON.parse(localStorage.getItem("userPanier"));
    

// card info



// fin card info

/*-------------- tableau structure html 

<table>
              <caption>Informations panier</caption>
              <colgroup>
                <col span="3" class="infoPanier">
                <col class = "pricePanier">
              </colgroup>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Nom</th>
                  <th>Lentille</th>
                  <th>Prix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>image</td>
                  <td>name</td>
                  <td>lenses</td>
                  <td>Price</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td></td>
                  <td></td>
                  <td>Price</td>
                </tr>
              </tfoot>
            </table>

         ---------------------------------   */
           