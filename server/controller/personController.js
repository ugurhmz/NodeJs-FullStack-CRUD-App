
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
    
    if(req.query.id){
        const id = req.query.id
        console.log(id);
        
        Person.findById(id)
        .then(user => {
            if(!user){
                res.status(404).send({message:"Not found USER"})
            }else {
                res.send(user)
            }
        })
        .catch(err => {
            res.status(500).send({message :"ERROR!"})
        })


    }else {
        Person.find()
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            res.status(500).send( {
                message : err.message || "Users not found..."
            })
        })
    }




}


// update User with ID
exports.update = (req,res) => {

    if(!req.body){
        res.status(400)
            .send({message:"Form can not be empty!"})
    }

    const id = req.params.id

    Person.findByIdAndUpdate(id, req.body, { useFindAndModify : false})
        .then(user => {

            if(!user) {
                res.status(400).send({ 
                    message :`Can not update the user id :${id} not found`
                })
            }else {
                res.send(user)
            }


        })
        .catch(err => {
            res.status(500).send({
                message : err.message || "ERROR UPDATE"
            })
        })
       

}

// delete User with ID
exports.delete = (req,res) => {

    const id = req.params.id
    console.log(id)

    Person.findByIdAndDelete(id)
        .then(user => {
            if(!user) {
                res.status(404).send({
                    message:"User  not found therefore deleted."
                })
            }else {
                console.log("User was deleted")
                res.send({
                    message:"User was deleted..."
                })
            }

        })
        .catch(err => {
            res.status(500).send({
                message:"ERROR!"
            })
        })

}