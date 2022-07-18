const express = require('express')
const router = express.Router()

const ThoughtController = require('../controllers/ThoughtController')

// helpers
const checkAuth = require('../helpers/auth').checkAuth

router.get('/', ThoughtController.showThoughts)
router.get('/dashboard', checkAuth, ThoughtController.dashboard)
router.get('/add', checkAuth, ThoughtController.createThought)
router.post('/add', checkAuth, ThoughtController.createThoughtSave)
router.post('/remove', checkAuth, ThoughtController.removeThoughtSave)
router.get('/edit/:id', checkAuth, ThoughtController.updateThought)
router.post('/edit', checkAuth, ThoughtController.updateThoughtSave)

module.exports = router