


getAllCam = (id="") => {
    
return fetch("http://localhost:3000/api/cameras/" + id)
.then(response => response.json())
.catch(error => alert("Erreur : " + error));

}


  
 
 
    
     