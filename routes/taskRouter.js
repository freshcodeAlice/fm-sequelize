const {Router} = require('express');
const {validateTask} = require('../middlewares/task.mw');
const {getUserInstance} = require('../middlewares/user.mw');
const pagination = require('../middlewares/pagination.mw');
const TaskController = require('../controllers/Task.controller');

const taskRouter = Router();

taskRouter.post('/:userId', validateTask, getUserInstance, TaskController.createTask);
taskRouter.get('/:userId', pagination, getUserInstance, TaskController.getAllUserTasks);
taskRouter.get('/count/:userId', getUserInstance, TaskController.getCountOfTasks);


module.exports = taskRouter;