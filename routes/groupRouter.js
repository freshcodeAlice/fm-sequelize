const {Router} = require('express');
const multer = require('multer');
const path = require('path');
const {getUserInstance} = require('../middlewares/user.mw');
const GroupController = require('../controllers/Group.controller');
const pagination = require('../middlewares/pagination.mw');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../public/images'))
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}.${file.originalname}`)
    }
  });

const upload = multer({storage});

const groupRouter = Router();

groupRouter.post('/', GroupController.createGroup);
groupRouter.put('/:userId/:groupId', getUserInstance, GroupController.addUserToGroup);
groupRouter.get('/', pagination, GroupController.getAllGroups);
groupRouter.get('/:groupId', GroupController.getGroupWithMembers);
groupRouter.get('/user/:userId', getUserInstance, GroupController.getUserGroups);
groupRouter.delete('/:userId/:groupId', getUserInstance, GroupController.deleteUserFromGroup);
groupRouter.post('/:groupId', upload.single('groupAvatar'), GroupController.createGroupImage);


module.exports = groupRouter;