const {Group} = require("../models/");

module.exports.createGroup = async(req, res, next) => {
    try {
        const {body} = req;
        console.log(body);
        const created = await Group.create(body);
        console.log(created);
        return res.status(201).send('Group created');
    }catch (error) {
        next(error)
    }
}

module.exports.addUserToGroup = async(req, res, next) => {
    try{
        const {userInstance, params: {groupId}} = req;
        const groupInstance = await Group.findByPk(groupId);
        const result = await groupInstance.addUser(userInstance);
        console.log(result);
       return res.status(200).send('User successfully added to group');
    } catch(error) {
        next(error);
    }
}