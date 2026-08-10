const { Router } = require('express');
const healthRouter = require('./health.router');

const router = Router();

router.use('/health', healthRouter);

module.exports = router;