const express = requiere("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.listen(process, env.PORT, () => {
  console.log("Servidor escuchando al pueblo" + process.env.PORT);
});
