const {Router, request} = require('express');
const UserController = require('../controllers/User.controller');
const pagination = require('../middlewares/pagination.mw');
const {getUserInstance, validateUser} = require('../middlewares/user.mw');

const userRouter = Router();

userRouter.post('/', validateUser, UserController.createUser);
userRouter.get('/', pagination, UserController.findAll);
userRouter.get('/:userId',getUserInstance,  UserController.findOnePK);
userRouter.get('/groups/:userId', UserController.getUserWithGroups);
userRouter.delete('/:userId', UserController.deleteByPK);
userRouter.put('/:userId', getUserInstance, UserController.updateUser);

module.exports = userRouter;