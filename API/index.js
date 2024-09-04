import express from "express";
const app = express();
//import mongoose from "mongoose";
import { connections } from "mongoose";
import mongoose  from "./config/db-connection.js"
import Game from "./models/Games.js"
import gameRoutes from "./routes/gameRoutes.js";


//COnfigurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", gameRoutes);

//Iniciando  a conexão com MongoDB
//mongoose.connect("mongodb://127.0.0.1:27017/api-thegames");


// Rodando  a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}.`);
});