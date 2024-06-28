const repository = require('../../database/repository/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.checkPassword = async (id, password) => {
    const hash = await repository.getById(id);
    try {
        const result = await bcrypt.compare(password, hash.data.password);
        return {status: 200, message: 'success', data: result};
    } catch(err) {
        console.error(err);
        return {status: 500, message: 'something went wrong'};
    }
};

exports.create = async (username, password) => {
    bcrypt.hash(password, saltRounds, async function(err, hash) {
        if (err) return console.error(err);
        const out = await repository.create({
            username: username, 
            password: hash
        });
        return out;
    });
};

exports.getAll = async () => {
    return await repository.getAll();
};

exports.getById = async (id) => {
    return await repository.getById(id);
};
