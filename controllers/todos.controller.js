const Todo = require("../models/Todo.model");

module.exports.todosController = {
  getTodo: async (req, res) => {
    try {
      const todo = await Todo.find();
      res.json(todo);
    } catch (err) {
      res.json("Операция не удалась");
    }
  },
  addTodo: async (req, res) => {
    try {
      const todo = await Todo.create({
        text: req.body.text,
        completed: req.body.completed,
      });
      res.json(todo);
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteTodo: async (req, res) => {
    try {
      await Todo.findByIdAndDelete(req.params.id);
      res.json("Дело удалено!");
    } catch (err) {
      res.json("Произошла ошибка при удалении дело.");
    }
  },
  changeTodo: async (req, res) => {
    try {
      const todo = await Todo.findByIdAndUpdate(req.params.id, {
        completed: req.body.completed,
      }, {new: true});
      res.json(todo);
    } catch (err) {
      res.json("Произошла ошибка.");
    }
  },
};
