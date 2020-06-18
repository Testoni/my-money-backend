const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true }
})

const debitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: [true, 'Informe o valor do débito'] },
    status: { type: String, required: false, uppercase: true, enum: ['PAID', 'PENDING', 'SCHEDULED'] }
})

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min: 1, max: 12, required: true},
    year: { type: Number, min: 1970, max: 2100, required: true},
    credits: [creditSchema],
    debits: [debitSchema] 
})

module.exports = restful.model('BillingCycle', billingCycleSchema)

/*

ex test post (x-www-form-urlcoded) :

name: Jan/20
month: 1
year: 2020
credits[0][name]: Company
credits[0][value]: 6500
credits[1][name]: Professor
credits[1][value]: 1500
debits[0][name]: Telephone
debits[0][value]: 89.20
debits[0][status]: PAID


*/