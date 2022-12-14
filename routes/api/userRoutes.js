const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  removeFriend,
  addFriend
} = require('../../controllers/userController');


// /api/users
router.route('/')
.get(getUsers)
.post(createUser);


// /api/users/:userId
router
.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// adding a friend
router.route('/:userId/friends')
.post(addFriend);

//route for deleting friends
router.route('/:userId/friends/:friendId')
.delete(removeFriend);

module.exports = router;
