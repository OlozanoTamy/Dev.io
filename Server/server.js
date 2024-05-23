import express from "express";
import pg from "pg";
import bodyParser from "body-parser";

const App = express();
const Port = 3000;

App.use(bodyParser.urlencoded({ extended: true }))
App.use(express.static('assets')) //sirve para decirle a express que use arcihvos estaticos para enviar a las solicitudes


App.get("/saludo", (req, res) => {
    // res.send(`Holas ${req.query.name}`)
    res.sendFile('index.html')
})


App.get('/api', (req, res) => {
    res.send('Hello from Express!');
});


// App.post("/", (req, res) => {
//     res.send(`Hola ${req.body.name}`)
// })

App.listen(Port, () => {
    console.log("Hola mundo desde server.js")
})