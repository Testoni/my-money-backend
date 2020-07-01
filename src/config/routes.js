const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

    /**
     * Protected routes by JWT Token
     */    
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(protectedApi, '/billingCycles')

    /**
     * Open routes
     */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)

    // OLD
    // define URL all routes
    // const router = express.Router()
    // server.use('/api', router)

    // Routes Payment Cycle
    // const BillingCycle = require('../api/billingCycle/billingCycleService')
    // BillingCycle.register(router, '/billingCycles')
}