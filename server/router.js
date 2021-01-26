const router = require('express').Router();
const controller = require('./controller');

router.get('/:propertyId/bookings', controller.getCal);
router.get('/:propertyId', controller.getProp);

module.exports = router;
