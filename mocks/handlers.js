import { rest } from 'msw';

import appResponse from './app-response';
import calResponse from './calendar-response';

export const handlers = [
  rest.get('/api/rooms/:id/booking', (req, res, ctx) => {
    return res(ctx.json(appResponse));
  }),
  rest.get('/api/rooms/:id/booking/calendar', (req, res, ctx) => {
    return res(ctx.json(calResponse));
  })
];
