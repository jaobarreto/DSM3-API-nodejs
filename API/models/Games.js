import mongoose from "mongoose";

const descriptionsSchema = new mongoose.Schema({
  genre: String,
  platform: String,
  rating: String,
});

const gameSchema = new mongoose.Schema({
  title: String,
  year: Number,
  price: Number,
  descriptions: [descriptionsSchema], //Documento aninhado
});

const Game = mongoose.model("Game", gameSchema);

export default Game;
