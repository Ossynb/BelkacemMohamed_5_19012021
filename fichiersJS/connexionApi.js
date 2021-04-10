// APPEL DE L'API

let idCam="";

getAllCam = () => {
    return new Promise ((resolve)=>{
        var req = new XMLHttpRequest();
        req.onreadystatechange=function(){
            if(req.readyState==4){
                resolve(JSON.parse(this.responseText));
                console.log("la connexion est établi");
            }else{ 
                console.log("pas encore connecté")
            }
        };
        const url =" ";
    req.open("GET", "http://localhost:3000/api/cameras/" + idCam, true);
    req.send();
    });
};

