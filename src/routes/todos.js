import express from "express";
const router = express.Router()
import todoController from "../controller/todos/todoController.js"

router.post('/newtodo', todoController.handleNewTodo)

export default router