const express = require("express");;
const { getBioProfile, followUser, unfollowUser, getSingleUser, getAllUsers, searchUsers, updateUserProfile } = require("../controllers/userController");
const router = express.Router();
const authMiddleware = require ("../middleware/auth")

// search all users

router.get("/search",searchUsers);

// single user by id

router.get('/', authMiddleware, getBioProfile);


// follower user 
 
router.post("/follow/:followersId", authMiddleware,followUser);

// unfollow user

router.post("/unfollow/:followersId", authMiddleware,unfollowUser); 

// single user

router.get("/userprofile/:userId", getSingleUser);

// all users

router.get("/all",getAllUsers);

// update user profile

router.patch('/update-profile', authMiddleware, updateUserProfile);



module.exports = router