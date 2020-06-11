const express = require('express')

module.exports = function(server) {
    // define URL all routes
    const router = express.Router()
    server.use('/api', router)

    // Routes Payment Cycle
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}