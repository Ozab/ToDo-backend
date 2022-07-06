const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes/todos.route"));


const connectAndStartServer = async () => {
    try {
        await mongoose.connect("mongodb+srv://Ozab:999Bakar999@cluster0.3x3lk.mongodb.net/ToDo-backend?retryWrites=true&w=majority");

        app.listen(3030, () => console.log('Сервер запущен'))
    } catch (error) {
        console.log('Ошибка при подключении ${error.massage}');
    }
}

connectAndStartServer();
