const router = require('express').Router();
const controller = require('./controller');

router.get('/:propertyId/booking/calendar', controller.getCal);
router.get('/:propertyId/booking', controller.getProp);

module.exports = router;
