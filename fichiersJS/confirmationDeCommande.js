//Fonction qui recupère et fourni l'orderId à l'utilisateur avec un message de remerciement
function recupOrderId () {
    let output = document.getElementById('output');
    let montantTotal =document.getElementById("montantTotal");
    let identifiantDeCommande = sessionStorage.getItem("identifiant");
    let total = sessionStorage.getItem("Total");
    output.textContent = identifiantDeCommande;
    montantTotal.textContent = total ;
    localStorage.clear();
    sessionStorage.clear();
}
recupOrderId();