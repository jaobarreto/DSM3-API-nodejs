import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

// Busca todos os jogos no banco de dados
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    res.status(200).json({ games: games }); // Retorna os jogos com status 200 (OK)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." }); // Retorna erro com status 500 (Internal Server Error)
  }
};

// Cadastra um novo jogo no banco de dados
const createGame = async (req, res) => {
  try {
    const { tittle, platform, year, price } = req.body; // Desestrutura os dados recebidos na requisição
    await gameService.Create(tittle, platform, year, price);
    res.sendStatus(201); // Retorna status 201 (Created) após a criação do jogo
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." }); // Retorna erro com status 500 (Internal Server Error)
  }
};

// Deleta um jogo específico no banco de dados
const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      // Verifica se o ID fornecido é válido
      const id = req.params.id;
      gameService.Delete(id);
      res.sendStatus(204); // Retorna status 204 (No Content) após a exclusão bem-sucedida
    } else {
      res.sendStatus(400); // Retorna status 400 (Bad Request) se o ID for inválido
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor!" }); // Retorna erro com status 500 (Internal Server Error)
  }
};

// Atualiza as informações de um jogo específico
const UpdateGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      // Verifica se o ID fornecido é válido
      const id = req.params.id;
      const { title, platform, year, price } = req.body; // Desestrutura os dados recebidos na requisição

      gameService.Update(id, title, platform, year, price);
      res.sendStatus(200); // Retorna status 200 (OK) após a atualização bem-sucedida
    } else {
      res.sendStatus(400); // Retorna status 400 (Bad Request) se o ID for inválido
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor!" }); // Retorna erro com status 500 (Internal Server Error)
  }
};

export default { getAllGames, createGame, deleteGame, UpdateGame };
