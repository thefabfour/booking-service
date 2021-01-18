const faker = require('faker');

const db = require('./index');
const Booking = require('../model/booking');
const Property = require('../model/property');

const primary = [];
const secondary = [];

for (let i = 0; i < 100; i += 1) {
  const propertyId = 30506101 + i;
  primary.push({ propertyId });
  secondary.push({
    propertyId,
    guest: {
      adults: faker.random.number({ min: 0, max: 6 }),
      children: faker.random.number({ min: 0, max: 6 }),
      infants: faker.random.number({ min: 0, max: 2 }),
    },
    date: {
      start: faker.date.between('01-30-2021', '02-10-2021'),
      end: faker.date.between('02-12-2021', '02-16-2021'),
    },
  });
  secondary.push({
    propertyId,
    guest: {
      adults: faker.random.number({ min: 0, max: 6 }),
      children: faker.random.number({ min: 0, max: 6 }),
      infants: faker.random.number({ min: 0, max: 2 }),
    },
    date: {
      start: faker.date.between('02-20-2021', '03-05-2021'),
      end: faker.date.between('03-08-2021', '03-12-2021'),
    },
  });
}

const insertProperties = () => Property.create(primary);

const insertBookings = () => Booking.create(secondary);

Promise.all([insertProperties(), insertBookings()])
  .then(() => {
    db.close();
  });
