/*RECORDAR :
Para agregar a una categoria :
-Debemos poner el <h3 class="h3-pointer" id="3">Contenido extra</h3>
    y el id="4" porque debe sumar 1

Para agregar una temporada
-Debemos poner en el menu cambiando en value="7" osea sumando
    <li class="lista-temporada" value="6">Temporada 7</li>
    <hr>

 Y en la lista de episodios

    <ul class="ul-lista-episodios" style="display: none;">
                    <li><a href="muestraVideo.html">T2 - Episodio 1 : la fuga</a></li>
                    <li><a href="muestraVideo.html">T2 - Episodio 2 : la fuga</a></li>
                    <li><a href="muestraVideo.html">T2 - Episodio 3 : la fuga</a></li>
                    <li><a href="muestraVideo.html">T2 - Episodio 4 : la fuga</a></li>
                    <li><a href="muestraVideo.html">T2 - Episodio 5 : la fuga</a></li>
                    <li><a href="muestraVideo.html">T2 - Episodio 6 : la fuga</a></li>
                    <l1><img src="../img/publicidadIlicita.png" alt="publicidad" style="width: 50%; "></l1>
                    <li><a href="muestraVideo.html">T2 - Episodio 7 : la fuga</a></li>
                    <li><a href="muestraVideo.html">T2 - Episodio 8 : la fuga</a></li>
                    <li><a href="muestraVideo.html">T2 - Episodio 9 : la fuga</a></li>
                    <li><a href="muestraVideo.html">T2 - Episodio 10 : la fuga</a></li>
                    <li><a href="muestraVideo.html">T2 - Episodio 11 : la fuga</a></li>
                    <li><a href="muestraVideo.html">T2 - Episodio 12 : la fuga</a></li>
    </ul>

*/  

var categoriasMenu=document.getElementsByClassName("h3-pointer");

var temporadasMenu=document.getElementsByClassName("lista-temporada");
var temporadaEpisodios=document.getElementsByClassName("ul-lista-episodios");

var seccionMenu=document.getElementsByClassName("section-1-temp");
var seccionEpisodios=document.getElementsByClassName("section-2-capi");

$(document).ready(function(){
    var categoriasMenuString=new Array;

    var tituloEpisodios=seccionEpisodios[0].getElementsByTagName("h4");


    for(var a=0;a<categoriasMenu.length;a++){
        categoriasMenuString.push(categoriasMenu[a].innerHTML);
    }
    /*Controla el menu de la Temporadas, peliculas , Otros */
    $(categoriasMenu).click(function(){

        tituloEpisodios[0].innerHTML=this.innerHTML;
        for(var m=0;m<temporadaEpisodios.length;m++){
            temporadaEpisodios[m].style.display="none";
        }

        for(var n=0;n<categoriasMenu.length;n++){
            if(this.id==n){

                if(this.id==0){
                    temporadaEpisodios[0].style.display="inline";
                    break;
                }
                temporadaEpisodios[temporadaEpisodios.length-categoriasMenu.length+n].style.display="inline";
                break;
            }                
        }

    });

    /*Comprola los click en las temporadas */

    $(temporadasMenu).click(function(){

        for(var m=0;m<temporadasMenu.length;m++){
            if(this.value==m){
                for(var i=0;i<temporadaEpisodios.length;i++){
                    temporadaEpisodios[i].style.display="none";
                    if(this.value==i){
                        temporadaEpisodios[i].style.display="inline";
                        tituloEpisodios[0].innerHTML=this.innerHTML;
                    }
                }
                break;
            }
        }

    });
    
});