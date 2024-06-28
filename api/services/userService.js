const repository = require('../../database/repository/users');

exports.create = async (username, password) => {
    // hash password, then:
    const out = await repository.create({
        username: username, 
        password: password
    });
    return out;
};

exports.getAll = async () => {
    return await repository.getAll();
};

exports.getById = async (id) => {
    return await repository.getById(id);
};
