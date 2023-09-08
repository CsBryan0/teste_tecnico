const express = require('express')
const routes = express.Router()
const pricingController = require('../controllers/pricingController.js')

routes.post('/upload', pricingController.uploadFile)
routes.post('/validade', pricingController.validatePricing)
routes.post('/update', pricingController.updatePrices)


module.exports = routes



