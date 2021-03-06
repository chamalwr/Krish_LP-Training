const { RESTDataSource } = require('apollo-datasource-rest');
const { ApolloServer, gql } = require('apollo-server');
const EmployeeService = require('./datasources/emp_datasource');
const ProjectService = require('./datasources/project_datasource');

const typeDefs = gql`
  type Query {
    employees(
      id: ID
      firstName: String
      lastName: String
      designation: String
      department: String
      nearestCity: String
    ): [Employee]
    findEmployeeById(id: ID): Employee
    projects: [Project]
    findProjectById(id: ID): Project
  }
  type Employee {
    id: ID!
    firstName: String
    lastName: String
    designation: String
    department: String
      @deprecated(
        reason: "Since company moving to SBU structure we are removing global designastion property"
      )
    nearestCity: String
    projects: [Project]
  }
  type Project {
    id: ID!
    projectName: String
    startDate: String
    client: String
    employees: [Int]
  }
`;

const dataSources = () => ({
  employeeService: new EmployeeService(),
  projectService: new ProjectService(),
});

const resolvers = {
  Query: {
    employees: (parent, args, { dataSources }, info) => {
      return dataSources.employeeService.getEmployees(args);
    },
    findEmployeeById: (parent, { id }, { dataSources }, info) => {
      return dataSources.employeeService.getEmployeeById(id)[0];
    },
    projects: (parent, args, { dataSources }, info) => {
      return dataSources.projectService.getAllProjects();
    },
    findProjectById: (parent, { id }, { dataSources }, info) => {
      return dataSources.projectService.getProjectById(id);
    },
  }
};

const gqlServer = new ApolloServer({ typeDefs, resolvers, dataSources });

gqlServer
  .listen({ port: 13606 })
  .then(({ url }) => console.log(`graphQL Server Started on ${url}`));
