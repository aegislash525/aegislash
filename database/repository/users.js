const db = require('../knex');

exports.create = async (user) => {
    try {
      const [id] = await db('users').insert(user).returning('id');
      return {id, status: 201, message: 'success'};
    } catch (error) {
      console.error(`Error creating user: ${error.message}`);
      return {id, status: 500 , message: error.message}
    }
};

exports.getAll = async () => {
  try {
    const users = await db('users').select('*');
    return {status: 200, message: 'success', data: users};
  } catch (error) {
    console.error(`Error fetching users: ${error.message}`);
    return {status: 500, message: error.message, data: []};
  }
};

exports.getById = async (id) => {
  try {
    const user = await db('users').where({id: id}).first();
    return {status: 200, message: 'success', data: user};
  } catch (error) {
    console.error(`Error fetching user(id=${id}): ${error.message}`);
    return {status: 500, message: error.message, data: {}};
  }
};
