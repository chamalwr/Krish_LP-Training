const {ApolloServer, gql} = require('apollo-server')
const employees = require('./data/employees.json')

const typeDefs = gql`
type Query {
    employees: [Employee]
}
type Employee {
    id: ID!
    firstName: String
    lastName: String
    designation: String
    department: String @deprecated (reason: "Department is not aplicable now this will change")
}`;

const resolvers = {
    Query: {
        employees: () => {
            return employees;
        }
    }
}

const graphQlServer = new  ApolloServer({typeDefs, resolvers});
graphQlServer.listen({port: 13606}).then(({url}) => {
    console.log('GraphQL Server Started on :' + url)
})