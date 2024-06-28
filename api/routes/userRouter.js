const handler = require('../handlers/userHandler');
const express = require('express');
const router = express.Router();

router.get('/', handler.getAll);
router.get('/:userId', handler.getById);
router.post('/new', handler.create);
router.post('/check-password', handler.comparePassword);

module.exports = router;
