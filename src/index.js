import express from 'express'
import cors from 'cors'
// import connectToDB from './config/connectToDB'
import dotenv from 'dotenv'
import connectToDB from './config/connectToDB.js';
import router from './routes/todos.js'
dotenv.config();
//initialise server
const app = express();

//middlewares
app.use(cors());
app.use(express.json())

//routes
app.use('/todos', router)

//listen server
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
connectToDB();