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
    const { title, year, price, descriptions } = req.body; // Desestrutura os dados recebidos na requisição
    await gameService.Create(title, year, price, descriptions);
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
      const { title, year, price, descriptions } = req.body; // Desestrutura os dados recebidos na requisição

      gameService.Update(id, title, year, price, descriptions);
      res.sendStatus(200); // Retorna status 200 (OK) após a atualização bem-sucedida
    } else {
      res.sendStatus(400); // Retorna status 400 (Bad Request) se o ID for inválido
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor!" }); // Retorna erro com status 500 (Internal Server Error)
  }
};
//Listando um único jogo
const getOneGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const game = await gameService.getOne(id);
      if (!game) {
        //Se game retornar vazio
        res.sendStatus(404); //Código 404: Not Found
      } else {
        res.status(200).json({ game });
      }
    } else {
      res.sendStatus(400); // Código 400: Requisição mal formada.
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};
export default { getAllGames, createGame, deleteGame, UpdateGame, getOneGame };
