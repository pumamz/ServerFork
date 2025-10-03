const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("Primer commit");
});

app.listen(process.env.PORT, () => {
    console.log("Servidor en branch daniel escuchando en el puerto " + process.env.PORT);
    });

app.get("/", (req, res) => {
    res.send("Hola, este es el servidor en la branch de daniel");
});

app.get("/daniel", (req, res) => {
    res.send("Hola, este es el endpoint de daniel");
});
