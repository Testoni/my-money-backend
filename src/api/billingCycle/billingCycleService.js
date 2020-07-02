const BillingCycle = require('./billingCycle')
const errorHandler = require('../commom/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true}) // always return new object updated
BillingCycle.after('post', errorHandler).after('put', errorHandler)


BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            res.status(500).json({error: [error]})
        } else {
            res.json({value})
        }
    })
})

// http://localhost:3003/api/billingCycles/summary
BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{ 
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debits.value"}} 
    }, { 
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, { 
        $project: {_id: 0, credit: 1, debt: 1}
    }]).exec((error, result) => {
        if (error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})

module.exports = BillingCycle