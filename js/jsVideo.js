
/*Por defecto
    Categoria = valor
    Serie = valor
    Temporada = number
    Episodio = number
*/
var columnaVideo=document.getElementsByClassName("columna-1");

$(document).ready(function(){
    var cadVariables = location.search.substring(1,location.search.length);
    var arrVariables = cadVariables.split("&");
    
    var variablesUrl = new Array;
    
    var categoriasUrl=new Array;
    var valoresUrl= new Array; 
    for(var j=0;j<arrVariables.length;j++){
        variablesUrl.push(arrVariables[j].split("="));
    }
    for(var j=0;j<variablesUrl.length;j++){
        for(var i=0;i<2;i++){
            if(i%2==0){
                categoriasUrl.push(variablesUrl[j][i]);
            }else{
                valoresUrl.push(variablesUrl[j][i]);
            }
        }
    }
    /*Titulo del video <h1>*/
    var tituloVideo=document.createElement("h1");
    tituloVideo.style.textAlign="center";
    if("-1"==valoresUrl[2]){
        tituloVideo.innerHTML=""+valoresUrl[1]+" : "+categoriasUrl[3]+" "+valoresUrl[3]+"";
    }else{
        tituloVideo.innerHTML=""+valoresUrl[1]+" : "+categoriasUrl[2]+" "+valoresUrl[2]+" - "+categoriasUrl[3]+" "+valoresUrl[3]+"";
    }
    columnaVideo[0].replaceChild(tituloVideo,columnaVideo[0].getElementsByTagName("h1")[0]);


    if(valoresUrl[1]=="Simpson"){
        if(valoresUrl[2]=="1"){
            
        }
        if(valoresUrl[2]=="2"){

        }
        if(valoresUrl[2]=="3"){
            
        }
        if(valoresUrl[2]=="4"){
            
        }
        if(valoresUrl[2]=="5"){
            
        }
        if(valoresUrl[2]=="6"){
            
        }

        if(valoresUrl[2]=="7"){
            
        }
        if(valoresUrl[2]=="8"){
            
        }
    }
    if(valoresUrl[1]=="Conan"){
        alert("entraste a conan");
    }
    if(valoresUrl[1]=="Heman"){
        alert("entraste a heman");

    }
    if(valoresUrl[1]=="Mafalda"){
        alert("entraste a mafalda");

    }

    if(valoresUrl[1]=="Naruto"){
        alert("entraste a naruto");

    }

    if(valoresUrl[1]=="LaBandaDelGato"){
        alert("entraste a banda del gato");

    }

});