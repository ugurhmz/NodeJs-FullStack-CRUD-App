const express = require('express')
const app = express()
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')
const routes = require('./server/routes/allRoutes')

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

//____________________ routes___________
app.use(routes)



app.listen(PORT,() => {
    console.log(`Server is runnig http://localhost:${PORT}`);
})