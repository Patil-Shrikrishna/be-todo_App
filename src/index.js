const express = require ('express')
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())

//listen server
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

//routes
app.get('/', (req, res) => {
    res.send('Hello World')
})