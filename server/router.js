const router = require('express').Router();
const controller = require('./controller');

router.get('/:propertyId', controller.get);

module.exports = router;
