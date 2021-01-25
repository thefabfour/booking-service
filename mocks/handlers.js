import { rest } from 'msw';

import appResponse from './app-response';
import calResponse from './calendar-response';

export const handlers = [
  rest.get('http://localhost:3000/api/30506103', (req, res, ctx) => {
    return res(ctx.json(appResponse));
  }),
  rest.get('http://localhost:3000/api/bookings/30506103', (req, res, ctx) => {
    return res(ctx.json(calResponse));
  })
];
