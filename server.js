const express = require('express')
const app = express()
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')


dotenv.config( { path:'config.env'} )
const PORT = process.env.PORT || 8080

// log request
app.use(morgan('tiny'))

// body-parser depracated therefore  express
app.use(express.urlencoded({ extended : true }))

// set view engine & EJS 
app.set("view engine","ejs")
//app.set("views", path.resolve(__dirname,"views/ejs"))

// ALL static files
app.use(express.static('public'))



app.get('/',(req,res) => {

    res.render('index')
})

app.get('/add-user',(req,res) => {

    res.render('add_user')
})

app.get('/update-user', (req,res) => {

    res.render('update_user')
    
})




app.listen(PORT,() => {
    console.log(`Server is runnig http://localhost:${PORT}`);
})