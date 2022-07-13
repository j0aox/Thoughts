const express = require('express')
const router = express.Router()

const { Router } = require('express')
const ThoughtController = require('../controllers/ThoughtController')

router.get('/', ThoughtController.showThoughts)

module.exports = router