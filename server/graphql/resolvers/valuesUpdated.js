
module.exports = {
    Subscription:{
        valuesUpdated: {
            subscribe: (_, __, {pubsub}) => pubsub.asyncIterator("VALUESUPDATE")
        },
    }
}