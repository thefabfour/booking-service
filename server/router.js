const router = require('express').Router();
const controller = require('./controller');

router.get('/bookings/:propertyId', controller.getCal);
router.get('/:propertyId', controller.getProp);

module.exports = router;
