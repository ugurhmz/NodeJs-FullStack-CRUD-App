const axios = require('axios')






//_________________ / _____________________
exports.indexRoutes = (req,res) => {

    axios.get('http://localhost:3000/api/users')
        .then(alluser => {
            console.log(alluser)
            res.render('index', {
                alluser:alluser.data
            })
        })
        .catch(err => {
            res.send(err)
        })

   
}

//_________________ /add_user _____________________
exports.add_user = (req,res) => {
    res.render('add_user')
}


//_________________ /update_user_____________________
exports.update_user = (req,res) => {
    res.render('update_user')
}