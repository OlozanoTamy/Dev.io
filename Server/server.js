import express from "express"
import bodyParser from "body-parser";
import authRoutes from './routes/authRoutes.js';
//Importar de utilits para usar la base de datos
import sql from "./utils/sql.js";
const App = express();
const Port = 3000;

//importar el ruteador
import postRoutes from "./routes/postRoutes.js"

// Configurar body parser para manejar JSON y URL-encoded bodies
App.use(bodyParser.urlencoded({ extended: true }));
App.use(bodyParser.json());

// Servir archivos estáticos desde la carpeta 'assets'
App.use(express.static('assets'));



//Conecion inicial
App.get('/api', (req, res) => {
    res.json({ message: "Hello from Express!" });
})


// Función para obtener la versión de PostgreSQL (ejemplo)
async function getPgVersion() {
    const result = await sql`select version()`;
    console.log(result);
}
// getPgVersion();


// Función para obtener posts desde la base de datos
// async function getPosts(req, res) {
//     try {
//         const response = await sql`SELECT * FROM posts`;
//         res.send(response);  // Enviar los datos obtenidos como respuesta
//         console.log(response);  // Mostrar los datos en la consola del servidor
//     } catch (error) {
//         console.error('Error al obtener posts desde la base de datos:', error);
//         // Enviar un mensaje de error al cliente
//     }
// }


// Ruta para obtener posts, se envia la funcion
// App.get("/api/posts", getPosts);

//Este codigo sirve para recibir los datos que ha sido enviados desde el formulario para registrar un usuario nuevo
//Envia la informacion de un req.body a register que hassea el password y se lo da a createUser para que lo almacene en la base de datos
// App.post('/api/data', register);

//use las solicitudes que se hacen en /api/auth y las redirige a authRutes
App.use('/api/auth', authRoutes);
//se redirige a la routa para obtener los posts
App.use('/api/posts', postRoutes);

// Iniciar el servidor
App.listen(Port, () => {
    console.log(`Servidor Express en ejecución en el puerto ${Port}`);
});