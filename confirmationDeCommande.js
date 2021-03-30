function ecriture () {
    let output = document.getElementById('output');
    let montantTotal =document.getElementById("montantTotal");
    let identifiantDeCommande = sessionStorage.getItem("identifiant");
    let total = sessionStorage.getItem("Total");
    output.textContent = identifiantDeCommande;
    montantTotal.textContent = total 
    localStorage.clear();
    sessionStorage.clear();
    

}
