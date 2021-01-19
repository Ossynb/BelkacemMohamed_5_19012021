var req = new XMLHttpRequest();
console.log("readyState après new : "+req.readyState);
req.onreadystatechange=function(){
    console.log("readyState a changé et vaut : "+req.readyState)
}

function getAllCam (){
    req.onload = function(){
        console.log("Appel AJAX terminé");
        console.log(" status : "+this.status);
        console.log(" response : "+this.response);
        if (this.status == 200) {
            var json=JSON.parse(this.response);
        }
    }
    var url ="http://localhost:3000/api/cameras";
    req.open("GET", "http://localhost:3000/api/cameras", true);
    req.send();
}

getAllCam()





    

