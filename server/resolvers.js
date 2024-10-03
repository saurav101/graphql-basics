const Task = require("./model/task");

// Create function called getTasks, and getTask in query
// hint Model.find(), Model.findById()
const resolvers = {
  Query: {},
  // create mutation function called createTask, updateTask and deleteTask
  // updateTask and deleteTask should be done by student
  // hint: new Model(params),  model.save(), Model.findByIdAndUpdate(id, updatedfields, {new: true})
  // new:true make sures that udpated data is returned
  // Model.findByIdAndDelete()
  Mutation: {},
};

module.exports = resolvers;
