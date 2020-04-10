const fs =require('fs');
const moviesJSON=fs.readFileSync('./movies.json','utf-8');
const movies=JSON.parse(moviesJSON);


function contenidoTabMasVotadas(){
    const titulo="Las Mas Votadas";
    let masVotadas=0;

    const moviesFiltered=movies.movies.filter(function(elem){
        return elem.vote_average>=7;
    });

    const arregloRating=moviesFiltered.map(function(elem){
        return elem.vote_average;
    });
    arregloRating.forEach(function(elem){
        if(elem>=7){
            masVotadas=masVotadas+1;
        };
    });
    const totalPeliculas="Estas son las "+masVotadas+" peliculas mas votadas:";

    let sumaRating=arregloRating.reduce(function(acum,num){
        return acum+num;
    });
    let promedioRating="Rating promedio: "+sumaRating/masVotadas;

    let listaPeliculas='\n';
    for(let elem of moviesFiltered){
        listaPeliculas=listaPeliculas+"Titulo: "+elem.title+'\n'+'\n'+"Rating: "+elem.vote_average+'\n'+'\n'+"Reseña​: "+elem.overview+'\n'+"______________________________________________________________________________________________________________________"+'\n'+'\n'+'\n';
    };

    return titulo+'\n'+'\n'+totalPeliculas+'\n'+promedioRating+'\n'+'\n'+listaPeliculas+'\n';
};
module.exports=contenidoTabMasVotadas();