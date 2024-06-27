const handler = require('../handlers/userHandler');
const express = require('express');
const router = express.Router();

router.get('/', handler.getAll);
router.get('/:userId', handler.getByID);
router.post('/new', handler.create);

module.exports = router;
