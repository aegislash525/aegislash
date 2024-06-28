const service = require('../services/userService');

exports.getAll = async (req, res) => {
    const out = await service.getAll();
    if (out.status === 200) {
        res.status(out.status).json(out);
    } else {
        res.status(out.status).json({
            status: out.status,
            message: out.message
        });
    }
};

exports.getById = async (req, res) => {
    const out = await service.getById(req.params.userId);
    if (out.status === 200) {
        res.status(out.status).json(out);
    } else {
        res.status(out.status).json({
            status: out.status,
            message: out.message
        });
    }
};

exports.create = async (req, res) => {
    const out = await service.create(
        req.body.username, 
        req.body.password
    );
    if (out.status === 201) {
        res.status(out.status).json(out);
    } else {
        res.status(out.status).json({
            status: out.status,
            message: out.message
        });
    }
};
