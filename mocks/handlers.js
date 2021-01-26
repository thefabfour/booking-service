import { rest } from 'msw';

import appResponse from './app-response';
import calResponse from './calendar-response';

export const handlers = [
  rest.get('http://localhost:3001/api/rooms/:id/', (req, res, ctx) => {
    return res(ctx.json(appResponse));
  }),
  rest.get('http://localhost:3001/api/rooms/:id/bookings', (req, res, ctx) => {
    return res(ctx.json(calResponse));
  })
];
