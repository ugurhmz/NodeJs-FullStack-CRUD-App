const express = require('express')
const router = express.Router()
const services = require('../services/render')
const personController = require('../controller/personController')


router.get('/',services.indexRoutes)
router.get('/add-user',services.add_user)
router.get('/update-user', services.update_user)



//API
router.post('/api/users', personController.create)
router.get('/api/users', personController.read)
router.put('/api/users/:id', personController.update)
router.delete('/api/users/:id', personController.delete)



module.exports = router