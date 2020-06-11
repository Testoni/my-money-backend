const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])

// always return new object updated
BillingCycle.updateOptions({new: true, runValidators: true})

module.exports = BillingCycle