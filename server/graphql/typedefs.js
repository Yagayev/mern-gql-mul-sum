const gql = require('graphql-tag');

module.exports = gql`
    type Values{
        id: ID
        firstval: Float
        secondval: Float
        sum: Float
        mul: Float
    }
    input GetValuesInput {
        page: Int
        pagesize: Int
        sortby: String
        order: Int
        firstvalmin: Float
        secondvalmin: Float
        summin: Float
        mulmin: Float
        firstvalmax: Float
        secondvalmax: Float
        summax: Float
        mulmax: Float
    }
    input PostValuesInput {
        firstval: Float!
        secondval: Float!
    }
    input DeleteValuesInput {
        id: ID!
    }
    input EditValuesInput {
        id: ID!
        firstval: Float!
        secondval: Float!
    }
    type Query{
        getValues(getValuesInput: GetValuesInput): [Values]
    }
    type Mutation {
        postValues(valuesInput: PostValuesInput): Boolean
        deleteValues(valuesInput: DeleteValuesInput): Boolean
        editValues(valuesInput: EditValuesInput): Boolean
    }
    type Subscription {
        valuesUpdated: ID
    }
`


