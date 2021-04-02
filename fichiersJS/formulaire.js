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
let adresseManquante = document.getElementById("adresseManquante");
let villeManquante = document.getElementById("villeManquante");
let emailManquant = document.getElementById("emailManquant");

let regexPrenom = /^([a-z\d\.-]+)$/i;
let regexNom = /^([a-z\d\.-]+)$/i;
let regexMail =  /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
let regexAdresse = /^([a-z\d\s\.-]+)$/i;
let regexVille = /^([a-z\d\s\.-]+)$/i;

//Creation d'une fonction validation de formulaire
function verificationFormulaire(event){
    
    //si le champ est vide
    if((prenom.validity.valueMissing)||(regexPrenom.test(prenom.value)==false)){
        event.preventDefault();
        prenomManquant.textContent = "Prénom manquant et/ou Format incorrect";
        prenomManquant.style.color ="red";
        prenom.style.backgroundColor = "red";
    }   else{
        prenom.style.backgroundColor = "green";
        prenomManquant.textContent = "";   
    }
    
    if ((adresse.validity.valueMissing)||(regexAdresse.test(nom.value)==false)){
        event.preventDefault();
        adresseManquante.textContent = "Adresse manquante et/ou Format incorrect";
        adresseManquante.style.color ="red";
        adresse.style.backgroundColor = "red";
    }   else{
        adresse.style.backgroundColor = "green";
        adresseManquante.textContent = "";
    }
    
    if((ville.validity.valueMissing)||(regexVille.test(ville.value)==false)){
        event.preventDefault();
        villeManquante.textContent = "Ville manquante et/ou Format incorrect";
        villeManquante.style.color ="red";
        ville.style.backgroundColor = "red";
    }   else{
        ville.style.backgroundColor = "green";
        villeManquante.textContent = "";
    }

    if ((mail.validity.valueMissing)||(regexMail.test(mail.value)==false)){
        event.preventDefault();
        emailManquant.textContent = "Email manquant et/ou format incorrect";
        emailManquant.style.color ="red";
        mail.style.backgroundColor = "red";
    }   else{
        mail.style.backgroundColor = "green";
        emailManquant.textContent = "";
    }
    
    if((nom.validity.valueMissing)||(regexNom.test(nom.value)==false)){
        event.preventDefault();
        nomManquant.textContent = "Nom manquant et/ou Format incorrect";
        nomManquant.style.color ="red";
        nom.style.backgroundColor = "red";
    }   else{
        nom.style.backgroundColor = "green";
        nomManquant.textContent = "";
    }

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
};
//Evenement pour lancer la fonction "verificationFormulaire" lorsque l'utilisateur vient d'appuyer sur le clavier
formulaire.addEventListener("keyup", verificationFormulaire);