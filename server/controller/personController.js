
const Person = require('../model/personModel')


// create and save() USER
exports.create = (req,res) => {

    // validate request
    if(!req.body){
        res.status(400).send( { message : 'Content can not be empty!'} )
        return;
    }

    //+New User
    const user = new  Person({
        name :  req.body.name,
        email:  req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    // save user in DB

    user.save(user)
        .then(data => {
            console.log(data)
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error!"
            })
        })


}


// Get all Users
exports.read = ( req,res) => {

}


// update User with ID
exports.update = (req,res) => {

}

// delete User with ID
exports.delete = (req,res) => {

}