const { ApolloServer, PubSub } = require('apollo-server');
const mongoose = require('mongoose')

const { MONGO } = require('./config.js')
const typeDefs = require('./graphql/typedefs')
const resolvers = require('./graphql/resolvers')

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req, res}) => ({req, res, pubsub})
});

mongoose.set('useFindAndModify', false);
mongoose.connect(MONGO, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        return server.listen({port: 5000})
    })
    .then(res => {
        console.log(`server listening at ${res.url}`)
    })

    