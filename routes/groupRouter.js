const {Router} = require('express');
const {getUserInstance} = require('../middlewares/user.mw');
const GroupController = require('../controllers/Group.controller');
const pagination = require('../middlewares/pagination.mw');

const groupRouter = Router();

groupRouter.post('/', GroupController.createGroup);
groupRouter.put('/:userId/:groupId', getUserInstance, GroupController.addUserToGroup);
groupRouter.get('/', pagination, GroupController.getAllGroups);
groupRouter.get('/:groupId', GroupController.getGroupWithMembers);
groupRouter.get('/user/:userId', getUserInstance, GroupController.getUserGroups);
groupRouter.delete('/:userId/:groupId', getUserInstance, GroupController.deleteUserFromGroup);


module.exports = groupRouter;