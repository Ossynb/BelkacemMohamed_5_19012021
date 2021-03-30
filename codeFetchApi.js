




fetch('http://localhost:3000/api/cameras')
.then(
    function(response) {
      if (response.status==200) {
        alert('Looks like there was a problem. Status Code: ' +  response.status);
        return response;}
      })
.then(reponse => reponse.json())
.then(data =>console.log(data))
.catch(error => alert("Attention Erreur : " + error))
  
