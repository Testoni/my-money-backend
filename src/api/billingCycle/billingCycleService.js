const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])

// always return new object updated
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            res.status(500).json({error: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = BillingCycle