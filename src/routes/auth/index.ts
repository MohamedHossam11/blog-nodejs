import express from 'express';
const { login, sign_up } = require('../../controllers/auth');
const router = express.Router();

router.post('/login', login);
router.post('/sign_up', sign_up);

module.exports = router;
