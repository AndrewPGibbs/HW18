const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  //deleteUser is here but I need to write a route for it.
  deleteUser,
} = require('../../controllers/userController');


// /api/users
router.route('/')
.get(getUsers)
.post(createUser);


// /api/users/:userId
router.route('/:userId')
.get(getSingleUser);

module.exports = router;
// in the controller folder there should be all the functions that will be imported into this file  (same as lines 3 through 5) 
// functions needed are 
// updateUser
// deleteUser,
// addFriend,
// removeFriend