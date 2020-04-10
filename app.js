const http = require('http');
const homePage=require('./homePage');
const enCartelera=require('./enCartelera');
const masVotadas=require('./masVotadas');
const sucursales=require('./sucursales');
const contacto=require('./contacto');
const preguntasFrecuentes=require('./preguntasFrecuentes');

// Servidor
http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

	// Route System
	switch (req.url) {

		// Home
		case '/':
            //const tabHome=contenidoTabHome();
            res.end(homePage);
            break;

		// En cartelera
		case '/en-cartelera':
            //const tabCartelera=contenidoTabEnCartelera();
			res.end(enCartelera);
            break;

        //Mas Votadas
		case '/mas-votadas':
            //const tabMasVotadas=contenidoTabMasVotadas();
			res.end(masVotadas);
            break;

        //Sucursales
		case '/sucursales':
            //let tabSucursales=contenidoTabSucurales();
			res.end(sucursales);
            break;

        //Contacto
		case '/contacto':
            //let tabContacto=contenidoTabContato();
			res.end(contacto);
            break;

        //Preguntas Frecuentes
		case '/preguntas-frecuentes':
            //let tabPreguntasFrecuentes=contenidoTabPreguntasFrecuentes();
			res.end(preguntasFrecuentes);
            break;

		default:
			res.end('404 not found')
	}
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));