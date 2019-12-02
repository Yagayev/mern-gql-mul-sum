const { model, Schema } = require('mongoose');

const valuesSchema = new Schema({
    firstval: Number,
    secondval: Number,
    sum: Number,
    mul: Number,
})

module.exports = model('Values', valuesSchema);