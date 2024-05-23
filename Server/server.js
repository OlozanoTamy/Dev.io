import express from "express";
import pg from "pg";

const App = express();


App.get("/", (req, res) => {
    res.send("<h1>Petro</h1>")
})

App.listen(3000, () => {
    console.log("Hola mundo desde server.js")
})