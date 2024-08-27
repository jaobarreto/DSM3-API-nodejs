import express from "express";
const app = express();
import mongoose from "mongoose";
//import Game from "./models/Games.js"
import gameRoutes from "./routes/gameRoutes.js";

//COnfigurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", gameRoutes);

//Iniciando  a conexão com MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-thegames");

app.get("/", (req, res) => {
  // res.send("Hello World!")
  const games = [
    {
      title: "CS-GO",
      year: 2012,
      platform: "PC (Windows)",
      price: 20,
    },
    {
      title: "GTA VI",
      year: 2024,
      platform: "PC (Windows)",
      price: 40,
    },
  ];
  res.json(games);
});

// Rodando  a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}.`);
});