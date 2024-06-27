const user = require('../../database/models/user');

exports.getAll = (req, res) => {
    const usr = new user(req.params.userId, 'aegislash', [], [], [], 'toor');
    res.status(200).json({
        status: 200,
        message: "success",
        data: [
            usr
        ]
    });
};

exports.getByID = (req, res) => {
    res.status(200).json({
        status: 200,
        message: "success",
        data: {
            id: req.params.userId,
            username: "aegislash",
            education: [],
            skills: [],
            projects: []
        }
    });
};

exports.create = (req, res) => {
    // const username = req.body.username;
    // const password = req.body.password;
    res.status(200).json({
        status: 200,
        message: "success",
        data: {
            id: 1,
            username: req.body.username,
            education: [],
            skills: [],
            projects: []
        }
    });
};

// module.exports = index;
