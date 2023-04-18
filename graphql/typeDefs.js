const { gql } = require("apollo-server");

module.exports = gql`
  type Question {
    name: String
    description: String
    createdAt: String
    _id: String
  }

  input QuestionInput {
    name: String
    description: String
  }

  type Query {
    question(ID: ID!): Question!
    getQuestions(amount: Int): [Question]
  }

  type Mutation {
    createQuestion(questionInput: QuestionInput): Question!
    deleteQuestion(ID: ID!): Boolean
    editQuestion(ID: ID!, questionInput: QuestionInput): Boolean
  }
`;
