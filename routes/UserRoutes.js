const express = require('express');
const router = express.Router();
const { register, login,logoutUser, loadUser} = require('../controllers/users.js');
const { bookmarkStory, getAllBookmarks } = require('../controllers/bookmarks.js');
const {verifyJwt} = require('../middlewares/authMiddleware.js');

// auth routes 
router.post('/register', register);
router.post('/login', login);
router.post('/logout',logoutUser)
router.get('/load/:username',verifyJwt,loadUser)

// bookmark routes
router.post('/bookmark/:id', verifyJwt , bookmarkStory);
router.get('/bookmarks/:userId', verifyJwt , getAllBookmarks);

module.exports = router;


