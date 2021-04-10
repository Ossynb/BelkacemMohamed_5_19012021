//mettre FETCH
let idCam= "";
const url ="http://localhost:3000/api/cameras";

getAllCam = () =>{
fetch(url+ idCam)
.then(response => response.text())
.then(response => response(JSON.parse(this.responseText)))
.catch(error => alert("Erreur : " + error))
}
// getAllCam = () => {
// fetch("http://localhost:3000/api/cameras/" + idCam)
// .then(response => response.json())
// .catch(error => alert("Erreur : " + error));
// }

// fetch(url+ idCam).then(function(response) {
//     response.text().then(function() {
//         console.log("la connexion est établi");;
//     });
//   });


//  getAllCam = async () => {
//     const response = await fetch("http://localhost:3000/api/cameras" + idCam, {
//       method : "GET",
      
//     })  
//     .then(
//       (response) => {
//         if (response.readyState==4) {
//           alert('la connexion est établi');
//           return response;
//         }
//       })
//         .then(response => response.json())
//         .catch(error => alert("Attention Erreur : " + error))
       
//         return await response.json();
//   };
  
 
 
    
     