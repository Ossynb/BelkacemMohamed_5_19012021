let idCam="";


// APPEL DE L'API
getAllCam = () => {
    return new Promise ((resolve)=>{
        var req = new XMLHttpRequest();
        req.onreadystatechange=function(){
            if(req.readyState==4){
                resolve(JSON.parse(this.responseText));
                console.log("HEY HEY me voilà");
            }else{ 
                console.log("pas encore connecté")
            }
        };
        const url ="http://localhost:3000/api/cameras";
    req.open("GET", "http://localhost:3000/api/cameras/" + idCam, true);
    req.send();
    });
};