const {Router} = require('express');
const TaskController = require('../controllers/Task.controller');
const UserController = require('../controllers/User.controller');

const router = Router();

router.post('/user', UserController.createUser);
router.get('/users', UserController.findAll);
router.get('/user/:id', UserController.findOnePK);
router.delete('/user/:id', UserController.deleteByPK);
router.put('/user/:id', UserController.updateUser);

router.post('/task/:userId', TaskController.createTask);
router.get('/task/:userId', TaskController.getAllUserTasks);
router.get('/task-count/:userId', TaskController.getCountOfTasks);

module.exports = router;