var contador=0;
var image1="img/teletubiesOpaco.jpg";
var image2="img/hemanOpaco.jpg";
var image3="img/ImagenOpaco1.jpg";
var circlesHeader=document.getElementsByClassName("circle-header");

var titulo1=document.getElementById("titulo-header").innerHTML;
var parrafo1=document.getElementById("parrafo-header").innerHTML;
var boton1=document.getElementById("valor-button").innerText;

var intervaloTime;
$(function(){
    intervaloTime=setInterval(fRotarImagen,10000);
});


$(document).ready(function(){
    $(circlesHeader[0]).click(function(){
        fRotarImagen(2);
        clearInterval(intervaloTime);
        intervaloTime=setInterval(fRotarImagen,10000);
    })
    $(circlesHeader[1]).click(function(){
        fRotarImagen(0);
        clearInterval(intervaloTime);
        intervaloTime=setInterval(fRotarImagen,10000);

    })
    $(circlesHeader[2]).click(function(){
        fRotarImagen(1);
        clearInterval(intervaloTime);
        intervaloTime=setInterval(fRotarImagen,10000);

    })

});


function fRotarImagen(contadorValor){
    if(contadorValor==0){
        contador=contadorValor;
    }
    if(contadorValor==1){
        contador=contadorValor;
    }
    if(contadorValor==2){
        contador=contadorValor;
    }

    switch(contador){
        case 0:
            $(".content-header").css("background-image","url("+image1+")");
            document.getElementById("titulo-header").innerHTML="Telebuies";
            document.getElementById("parrafo-header").innerHTML="Ya esta disponible la Tercera Temporada. !No te lo puedes perder¡";
            document.getElementById("valor-button").innerText="Ver Temporada";
            $(circlesHeader[1]).css("background-color","teal");
            $(circlesHeader[0]).css("background-color","white");
            $(circlesHeader[2]).css("background-color","white");

            contador=1;
            break;
        case 1:
            $(".content-header").css("background-image","url("+image2+")");
            document.getElementById("titulo-header").innerHTML="Heman";
            document.getElementById("parrafo-header").innerHTML="Es una serie dedicada para enseñar a jovenes y niños, intentado otorgar valores morales. \n\n Lamentablemente la serie dejo de producirse en el año 1999.";
            document.getElementById("valor-button").innerText="Mas informacion";
            $(circlesHeader[2]).css("background-color","teal");
            $(circlesHeader[0]).css("background-color","white");
            $(circlesHeader[1]).css("background-color","white");

            contador=2;
            break;
        case 2:
            $(".content-header").css("background-image","url("+image3+")");
            document.getElementById("titulo-header").innerHTML=titulo1;
            document.getElementById("parrafo-header").innerHTML=parrafo1;
            document.getElementById("valor-button").innerText=boton1;
            $(circlesHeader[0]).css("background-color","teal");
            $(circlesHeader[1]).css("background-color","white");
            $(circlesHeader[2]).css("background-color","white");

            contador=0;
            break;
    }
}
