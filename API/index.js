import express from "express";
const app = express();
import mongoose from "mongoose";

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Iniciando a conexão com o MongoDB
mongoose.connect("mongodb://123.0.0.1:27017/api-thegames")

//Rota Principal
app.get("/", (req, res) => {
  //res.send("Vai Corinthians")
  const games = [
    {
      title: "League of Legends",
      year: 2009,
      platform: "PC (Windows)",
      price: 0,
    },
    {
      title: "CS-GO",
      year: 2012,
      platform: "PC (Windows)",
      price: 20,
    },
  ];
  res.json(games);
});
// Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}`);
});
