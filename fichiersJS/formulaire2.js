// Creation des variables necessaires à la fonction validation de formulaire
let formulaire = document.getElementById("formulaire");
let paragrapheValidationCommande = document.getElementById("paragrapheValidationCommande")
let formulaireValidation = document.getElementById("buttonValider");
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let adresse = document.getElementById("adresse");
let mail = document.getElementById("email");
let ville = document.getElementById("ville");
let prenomManquant = document.getElementById("prenomManquant");
let nomManquant = document.getElementById("nomManquant");
let adresseManquant = document.getElementById("adresseManquante");
let villeManquant = document.getElementById("villeManquante");
let mailManquant = document.getElementById("emailManquant");
let prenomRegex = /^([a-z\d\.-]+)$/i;
let nomRegex = /^([a-z\d\.-]+)$/i;
let mailRegex =  /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
let adresseRegex = /^([a-z\d\s\.-]+)$/i;
let villeRegex = /^([a-z\d\s\.-]+)$/i;

function verifInput(name, nameRegex, nameManquant){
    if((name.validity.valueMissing)||(nameRegex.test(name.value)==false)){
        event.preventDefault();
        nameManquant.textContent = name.id +" manquant(e) et/ou Format incorrect";
        nameManquant.style.color ="red";
        name.style.backgroundColor = "red";
    }   else{
        name.style.backgroundColor = "green";
        nameManquant.textContent = "";   
    }
}

function enableButtonValidation(){
    if((nom.style.backgroundColor=="green")&&(mail.style.backgroundColor=="green")&&(prenom.style.backgroundColor == "green")&&(adresse.style.backgroundColor == "green")&&(ville.style.backgroundColor == "green")){
        formulaireValidation.disabled=0;
        //Creation de l'objet pour la requete API POST 
        contact.firstName = prenom.value;
        contact.lastName = nom.value;
        contact.address =adresse.value;
        contact.city = ville.value;
        contact.email = mail.value;
        return contact;  
    }   else{
        formulaireValidation.disabled=1;
    }
}

function verificationFormulaire(){
    verifInput(prenom, prenomRegex, prenomManquant);
    verifInput(nom, nomRegex, nomManquant);
    verifInput(adresse, adresseRegex, adresseManquant );
    verifInput(ville, villeRegex, villeManquant);
    verifInput(mail, mailRegex, mailManquant);
    enableButtonValidation();
}

//Evenement pour lancer la fonction "verificationFormulaire" lorsque l'utilisateur vient d'appuyer sur le clavier
formulaire.addEventListener("keyup", verificationFormulaire);
    