const fs =require('fs');
const moviesJSON=fs.readFileSync('./movies.json','utf-8');
const movies=JSON.parse(moviesJSON);


function contenidoTabEnCartelera(){
    const titulo="En Cartelera​";
    const totalPeliculas="Tenemos "+movies.movies.length+" peliculas:";
    const arregloContenido=movies.movies.map(function(elem){
        return "Titulo: "+elem.title+ '\n'+'\n' +"Reseña​: "+elem.overview+'\n'+"____________________________________________________________________________________"+'\n';
    });
    let listaContenido='\n';
    arregloContenido.forEach(elem=>{
        return listaContenido=listaContenido+elem+'\n';
    })
    return titulo+'\n'+'\n'+totalPeliculas+'\n'+listaContenido+'\n';
};
module.exports=contenidoTabEnCartelera();