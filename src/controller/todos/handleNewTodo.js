import Todo from "../../model/schema.js";

async function handleNewTodo(req, res) {

    const { title, description, due_date, progress, priority } = req.body
    const todo = new Todo({ title, description, due_date, priority, progress })
    // const todo = new Todo(req.body)

    todo.save();
    console.log(req.body);
    res.send(todo)

}
export default handleNewTodo;