const express = require ('express')
const router = express.Router()
const apiController = require('../controllers/apiController')

router.get('/info',apiController.apiGet)
router.post('/crear',apiController.apiPost)
router.put('/editar',apiController.apiPut)
router.delete('/borrar',apiController.apiDelete)

  module.exports = router