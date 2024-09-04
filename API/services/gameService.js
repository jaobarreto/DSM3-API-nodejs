import Game from "../models/Games.js";

class gameService {
  //Padrão Async/await
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }
  async Create(title, year, price, descriptions) {
    try {
      const newGame = new Game({
        title,
        year,
        price,
        descriptions,
      });
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }
  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com id: ${id} foi deletado com sucesso!`);
    } catch (error) {
      console.log(error);
    }
  }

  async Update(id, title, year, price, descriptions) {
    try {
      await Game.findByIdAndUpdate(id, {
        // title:title

        title,
        year,
        price,
        descriptions,
      });

      console.log(`Dados do game com id: ${id} alterado com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }
  //Método para listar um único jogo
  async getOne(id) {
    try {
      const game = await Game.findOne({ _id: id }); // No mongoDB a id do banco começa com underline
      return game;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new gameService();
