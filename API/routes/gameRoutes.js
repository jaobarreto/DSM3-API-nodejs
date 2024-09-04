import express from "express";

const gameRoutes = express.Router();
import gameController from "../controllers/gameController.js";

// Rotas - Endpoints

// Endpoint para listar todos os jogos
gameRoutes.get("/games", gameController.getAllGames);

// Endpoint para cadastrar um novo jogo
gameRoutes.post("/game", gameController.createGame);

// Endpoint para deletar um jogo específico
gameRoutes.delete("/game/:id", gameController.deleteGame);

// Endpoint para atualizar as informações de um jogo específico
gameRoutes.put("/game/:id", gameController.UpdateGame);

// Endpoint para listar um único jogo
gameRoutes.get("/game/:id", gameController.getOneGame);

export default gameRoutes;
