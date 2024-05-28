import postgres from "postgres";
//para importar las variables del Entorno
import 'dotenv/config'


// Conectar a PostgreSQL usando el paquete 'postgres'
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;


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


export default sql;