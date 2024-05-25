import express from "express"
import bodyParser from "body-parser";
import postgres from "postgres";
//para importar las variables del Entorno
import 'dotenv/config'
const App = express();
const Port = 3000;

// Configurar body parser para manejar JSON y URL-encoded bodies
App.use(bodyParser.urlencoded({ extended: true }));
App.use(bodyParser.json());

// Servir archivos estáticos desde la carpeta 'assets'
App.use(express.static('assets'));

// Conectar a PostgreSQL usando el paquete 'postgres'
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
console.log(PGDATABASE)

const sql = postgres({
    host: PGHOST,
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: 'require',
    connection: {
        options: `project=${ENDPOINT_ID}`,
    },
});



App.get('/api', (req, res) => {
    res.json({ message: "Hello from Express!" });
})


// Función para obtener la versión de PostgreSQL (ejemplo)
async function getPgVersion() {
    const result = await sql`select version()`;
    console.log(result);
}



// Función para obtener posts desde la base de datos
async function getPosts(req, res) {
    try {
        const response = await sql`SELECT * FROM posts`;
        res.send(response);  // Enviar los datos obtenidos como respuesta
        console.log(response);  // Mostrar los datos en la consola del servidor
    } catch (error) {
        console.error('Error al obtener posts desde la base de datos:', error);
        // Enviar un mensaje de error al cliente
    }
}


// Ruta para obtener posts, se envia la funcion
App.get("/api/posts", getPosts);

// Iniciar el servidor
App.listen(Port, () => {
    console.log(`Servidor Express en ejecución en el puerto ${Port}`);
});