// envoi API avec FETCH 1





  

// envoi API avec FETCH 2      

// const envoiCommande = async (method, url, dataElt) => {
//     const response = await fetch(url, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       method,
//       body: JSON.stringify(dataElt),
//     })  
//     .then(
//       (response) => {
//         if (response.status !== 200) {
//           alert('Looks like there was a problem. Status Code: ' + response.status);
//           return response;
//         }
//       })
//         .then(response => response.json())
//         .then(response2 => console.table(response2))
//         .catch(error => alert("Attention Erreur : " + error))
        
//         return await response.json();

//   };
  
//   formulaireValidation.addEventListener("click", async (e) => {
//     e.preventDefault();
//      const response = await envoiCommande(
//         "POST",
//         "http://localhost:3000/api/cameras/order",
//         dataForm
//       ); 
//       window.location ="confirmationDeCommande.html";
     
//       localStorage.clear();
    
//  });