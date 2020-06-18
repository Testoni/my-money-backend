const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

// translate msg error
mongoose.Error.messages.general.required = "Attribute '{PATH}' is required."
mongoose.Error.messages.Number.min = "'{VALUE}' is less than '{MIN}'."
mongoose.Error.messages.Number.max = "'{VALUE}' is greater than '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' is not valid for attribute '{PATH}'."