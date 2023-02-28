const { getManagers } = require("../controllers/Manager.controller")
const express = require('express')
const router = express.Router()


router.get('/', getManagers)


module.exports = router
