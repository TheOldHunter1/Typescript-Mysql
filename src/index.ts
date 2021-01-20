import router from './router/router';
import Server from './server/server';
import MySQL from './mysql/mysql';

const server = Server.init(3000);

server.app.use( router );

// no es necesario por el patron singleton
// MySQL.instance;

server.start( () =>{
    console.log('servidor corriendo en el puerto 3000');
});