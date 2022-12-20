const {Router} = require('express');
const TaskController = require('../controllers/Task.controller');
const UserController = require('../controllers/User.controller');
const GroupController = require('../controllers/Group.controller');
const {validateTask} = require('../middlewares/task.mw');
const {getUserInstance, validateUser} = require('../middlewares/user.mw');

const router = Router();

router.post('/user', validateUser, UserController.createUser);
router.get('/users', UserController.findAll);
router.get('/user/:userId',getUserInstance,  UserController.findOnePK);
router.get('/users/groups/:userId', UserController.getUserWithGroups);
router.delete('/user/:userId', UserController.deleteByPK);
router.put('/user/:userId', getUserInstance, UserController.updateUser);

router.post('/task/:userId', validateTask, getUserInstance, TaskController.createTask);
router.get('/task/:userId', getUserInstance, TaskController.getAllUserTasks);
router.get('/task-count/:userId', getUserInstance, TaskController.getCountOfTasks);



router.post('/groups', GroupController.createGroup);
router.put('/groups/:userId/:groupId', getUserInstance, GroupController.addUserToGroup);
router.get('/groups/:userId', getUserInstance, GroupController.getUserGroups);

module.exports = router;

/*
TODO:
1. M-t-m association
2. Refactor router
+3. Adding middleware to found instance
+4. Validating data to create users, task
5. pagination


*/