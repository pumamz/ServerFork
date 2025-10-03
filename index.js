const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log("Servidor escuchando en el puerto " + process.env.PORT);
});
