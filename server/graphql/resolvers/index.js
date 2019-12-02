const getValuesResolvers = require('./getValues');
const postValuesResolvers = require('./postValues');
const valuesUpdated = require('./valuesUpdated')

module.exports = {
    Query: {
        ...getValuesResolvers.Query
    },
    Mutation: {
        ...postValuesResolvers.Mutation
    },
    Subscription: {
        ...valuesUpdated.Subscription
    },
}