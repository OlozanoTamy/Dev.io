import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
import postgres from "postgres";
import 'dotenv/config'

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const App = express();
const Port = 3000;

App.use(bodyParser.urlencoded({ extended: true }))
App.use(bodyParser.json())
App.use(express.static('assets'))

const db = postgres({
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

//funcian para solicitar datas
async function getPosts(req, res) {
    try {
        const response = await db`SELECT * FROM posts`
        res.json(response)
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
}

App.get("/api/posts", getPosts)

App.listen(Port, () => {
    console.log(`Servidor Express en ejecución en el puerto ${Port}`)
})