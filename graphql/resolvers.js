const mongoose = require("mongoose");

const Question = require("../models/Question");

module.exports = {
  Query: {
    async question(_, { ID }) {
      return await Question.findById(ID);
    },
    async getQuestions(_, { amount }) {
      return await Question.find()
        .sort({ createdAt: -1 })
        .limit(amount || 100);
    },
  },
  Mutation: {
    async createQuestion(_, { questionInput: { name, description } }) {
      const createQuestion = new Question({
        name: name,
        description: description,
        createdAt: new Date().toISOString(),
      });

      const res = await createQuestion.save();

      return {
        id: res.id,
        ...res._doc,
      };
    },
    async deleteQuestion(_, { ID }) {
      const response = await Question.deleteOne({
        _id: new mongoose.Types.ObjectId(ID),
      });
      return response?.deletedCount;
    },
    async editQuestion(_, { ID, questionInput: { name, description } }) {
      const response = await Question.updateOne(
        { _id: ID },
        { name: name, description: description }
      );
      return response?.modifiedCount;
    },
  },
};
