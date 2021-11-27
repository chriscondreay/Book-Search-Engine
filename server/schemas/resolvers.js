const { Book, User } = require('../models')

const resolvers = {
  Query: {
    book: async () => {
      return Book.find({})
    },
    user: async (parent, {_id}) => {
      const params = _id ? { _id } : {};
      return User.find(params)
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    createSave: async (parent, { _id, bookNum }) => {
      const save = await User.findOneAndUpdate(
        { _id },
        { $inc: { [`book${bookNum}_saves`]: 1 } },
        { new: true }
      );
      return save;
    },
  },
};

module.exports = resolvers;