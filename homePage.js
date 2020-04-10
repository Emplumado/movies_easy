const fs =require('fs');
const moviesJSON=fs.readFileSync('./movies.json','utf-8');
const movies=JSON.parse(moviesJSON);

function contenidoTabHome(){
    const titulo="Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​"
    const totalPeliculas="Tenemos "+movies.movies.length+" peliculas:";
    const arregloPeliculas=movies.movies.map(function(elem){
        return elem.title;
    });
    arregloPeliculas.sort();
    let listaPeliculas='\n';
    arregloPeliculas.forEach((function(elem,index){
        listaPeliculas=listaPeliculas+'['+(index+1)+'] '+elem+'\n'
    }));
    const pie=["En Cartelera","Mas Votadas","Sucursales","Contacto","Preguntas Frecuentes"];
    let piePagina="Recordá que podés visitar las secciones:"+'\n';
    for(let elem of pie){
        piePagina=piePagina+ elem+'\n';
        }
    return titulo+'\n'+'\n'+totalPeliculas+'\n'+listaPeliculas+'\n'+piePagina;
};
module.exports=contenidoTabHome();