


const express = require('express')
const app = express()


app.get('/',(req,res) => {

    res.send('CRUD Application Hello ....')
})

app.listen(3000,() => {
    console.log(`Server is runnig http://localhost:${3000}`);
})