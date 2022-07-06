const { Router } = require("express");
const { todosController } = require("../controllers/todos.controller");

const router = Router();

router.get("/todos", todosController.getTodo);
router.patch("/todos/:id", todosController.changeTodo);
router.delete("/todo/:id", todosController.deleteTodo);
router.post("/todo", todosController.addTodo);


module.exports = router;