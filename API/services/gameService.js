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
  async Create(title, platform, year, price) {
    try {
      const newGame = new Game({
        title,
        platform,
        year,
        price,
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

  async Update(id, title, platform, year, price) {
    try {
      await Game.findByIdAndUpdate(id, {
        // title:title

        title,
        platform,
        year,
        price,
      });

      console.log(`Dados do game com id: ${id} alterado com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }
}
export default new gameService();
