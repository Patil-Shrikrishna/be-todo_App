import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const todoSchema = new Schema({
    title: String,
    description: String,
    due_date: String,
    progress: String,
    priority: String
})

const Todo = model("Todos", todoSchema)
export default Todo