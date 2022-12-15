const {User} = require('../models');

module.exports.createUser = async (req, res, next) => {
    try{
        const {body} = req;
        const createdUser = await User.create(body);
        return res.status(201).send(createdUser);
    } catch (error) {
        next(error)
    }
}

module.exports.findAll = async (req, res, next) => {
    try {
        const results = await User.findAll();
        return res.status(200).send(results);
    } catch(error) {
        next(error);
    }
}

module.exports.findOnePK = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        const findUser = await User.findByPk(id);
        return res.status(200).send(findUser);
    } catch(error) {
        next(error)
    }
}

module.exports.deleteByPK = async(req, res, next) => {
    try {
        const {params: {id}} = req;
        console.log(id);
        const rowsCount = await User.destroy({
            where: {
                id
            }
        });
        if(rowsCount) {
          return res.status(200).send('Successfull delete');
        } else {
         return res.status(204).send(); 
        }

    } catch(error) {
        next(error);
    }
}


// module.exports.updateUser = async (req, res, next) => {
//     try {
//         const {params: {id}, body} = req;
//         const result = await User.update(body, {
//             where: {
//                 id
//             }
//         });
//         console.log(result);
//        return res.status(200).send();
//     } catch(error) {
//         next(error);
//     }
// }


module.exports.updateUser = async(req, res, next) => {
    try {
        const {params: {id}, body} = req;
        const foundedUser = await User.findByPk(id);
       const result = await foundedUser.update(body);
        res.status(200).send(result)
    } catch(error) {
        next(error);
    }
}