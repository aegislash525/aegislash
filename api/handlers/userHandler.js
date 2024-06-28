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
        res.status(out.status).json({
            status: out.status,
            message: out.message,
            data: {
                id: out.data.id,
                username: out.data.username,
                created_at: out.data.created_at,
                updated_at: out.data.updated_at
            }
        });
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

exports.comparePassword = async (req, res) => {
    const out = await service.checkPassword(
        req.body.id, req.body.password
    );
    console.log(`OUT: ${out}`);
    res.status(out.status).json(out);
};
