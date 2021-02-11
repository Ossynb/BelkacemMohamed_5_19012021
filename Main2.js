
var idCam="";
// APPEL DE L'API
getAllCam = () => {
    return new Promise ((resolve)=>{
        var req = new XMLHttpRequest();
        req.onreadystatechange=function(){
            if(req.readyState==4)
                {resolve(JSON.parse(this.responseText));
                console.log("Connecté");}
            else{ }
        };
        var url ="http://localhost:3000/api/cameras";
    req.open("GET", "http://localhost:3000/api/cameras/" + idCam, true);
    req.send();
    });
};

var listeArticle = document.getElementsByClassName("allArticles");


fetch('http://localhost:3000/api/cameras')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("myData");
            for (var i = 0; i < String.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'Name: ' + String[0].lenses + ' ' + String[1].price;
                mainContainer.appendChild(div);
            }
        }

        appendData(String);
        