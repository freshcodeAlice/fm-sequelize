const {Router} = require('express');
const UserController = require('../controllers/User.controller');

const router = Router();

router.post('/user', UserController.createUser);
router.get('/users', UserController.findAll);
router.get('/user/:id', UserController.findOnePK);
router.delete('/user/:id', UserController.deleteByPK);
router.put('/user/:id', UserController.updateUser);

module.exports = router;