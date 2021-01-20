const model = require('../model');
const moment = require('moment');

module.exports = {
  get: (req, res) => {
    const calendarMonths = [];
    const dateObject = moment();
    for (let i = 0; i < 24; i += 1) {
      const firstDayOfMonth = () => {
        const firstDay = moment(dateObject).startOf('month').format('d');
        return firstDay;
      };

      const blanks = [];
      for (let j = 0; j < firstDayOfMonth(); j += 1) {
        blanks.push('');
      }

      const days = [];
      for (let k = 1; k <= dateObject.daysInMonth(); k += 1) {
        days.push(k);
      }

      calendarMonths.push({
        month: dateObject.format('MMMM'),
        year: dateObject.year(),
        days: [...blanks, ...days.map((day) => ({ day, avail: true }))],
      });
      dateObject.add(1, 'M');
    }

    const { propertyId } = req.params;
    model.Booking.find({ propertyId })
      .then((data) => {
        data.forEach(({ date }) => {
          const dateStart = moment(date.start);
          const dateEnd = moment(date.end);

          const dayStart = dateStart.day();
          const monthStart = dateStart.format('MMMM');
          const monthEnd = dateEnd.format('MMMM');
          const yearStart = dateStart.year();
          const yearEnd = dateEnd.year();

          console.log('Day Booking Start: ', dayStart);

          const daysDiff = dateEnd.diff(dateStart, 'days');

          console.log('Difference of days: ', daysDiff);

          if (daysDiff + dayStart > dateStart.daysInMonth()) {
            // something
          } else {
            calendarMonths.forEach((calendar) => {
              const { days, month, year } = calendar;
              if (month === monthStart && year === yearStart) {
                const firstDay = +dateStart.startOf('month').format('d');
                console.log('Day of the Week: ', firstDay);
                const startIndex = firstDay + dayStart;
                for (let i = startIndex - 1; i < startIndex + daysDiff; i += 1) {
                  days[i].avail = false;
                }
              }
            });
          }
        });
        res.send({ calendarMonths });
      });
  },
};
