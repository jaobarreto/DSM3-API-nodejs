// Importando mongoose
import mongoose, { mongo } from "mongoose";

const connect = () => {
  mongoose.connect(
    `mongodb+srv://jaobarreto:admin@cluster0.uvi1h.mongodb.net/api-thegames?retryWrites=true&w=majority&appName=Cluster0`
  );
};

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Erro ao conectar com o mongoDB.");
});

connection.on("open", () => {
  console.log("Conectado ao mongoDB com sucesso.");
});

connect()

export default mongoose;
