const {Router} = require('express');
const taskRouter = require('./taskRouter');
const userRouter = require('./userRouter');
const groupRouter = require('./groupRouter');

const router = Router();
router.use('/users', userRouter);
router.use('/task', taskRouter);
router.use('/groups', groupRouter);


module.exports = router;

/*
TODO:
+1. M-t-m association
+2. Refactor router
+3. Adding middleware to found instance
+4. Validating data to create users, task
+5. pagination


*/