const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// This is what allows you to just use / in the routes.  You are defining here that 
// the route will be /users and in the index.js under routes you signify it as api
// so the full path is api/users then the continuation in the other routes file
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;