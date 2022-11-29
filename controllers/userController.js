const { User, Application } = require('../models');
const { unsubscribe } = require('../routes/api/thoughtRoutes');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user by ID 
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('friends')
      .populate('thoughts')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  //update a user
  updateUser(req, res) {
    //findOneAndUpdate
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      {  runValidators: true, new: true }
    )
  },
  // Delete a user and associated thoughts

  //reference activity 23 for $addToSet, check out how its being used in the createPost
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  //remove friend from friend list
  removeFriend() {
    User.findONeAndUpdate({_id: req.params.userId },
      {$pull: {friends: req.params.friendId}},
      {runValidators: true, new: true})
    .then((user) =>
    !user
    ? res.status(404).json({ message: 'No user found matching that ID'})
    : res.status(200).json(user)
    )
    .catch((err) => res.status(500).json(err));

  },
addFriend(req, res) {
User.findOneAndUpdate(
  {_id: req.params.userId },
  {$addToSet: {friends: req.body }},
  { runValidators: true, new: true }

)
.then((user) =>
    !user
    ? res.status(404).json({ message: 'No user found matching that ID'})
    : res.status(200).json(user)
    )
    .catch((err) => res.status(500).json(err));

  }
}
