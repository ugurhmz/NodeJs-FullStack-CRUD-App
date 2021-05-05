const express = require('express')
const router = express.Router()
const services = require('../services/render')



router.get('/',services.indexRoutes)
router.get('/add-user',services.add_user)
router.get('/update-user', services.update_user)



module.exports = router