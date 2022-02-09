import { rest } from 'msw'
import { setupServer } from 'msw/node'

const handlers = [
  rest.get('http://localhost/api/products', (_, res, ctx) => {
    return res(
      ctx.json([
        {
          _id: "6202bcc6cee6f53cf35dcc44",
          title: 'Amazon Kindle E-reader',
          quantity: 20,
          price: 79.99,
        },
        {
          _id: "6202bccdcee6f53cf35dcc48",
          title: 'Apple 10.5-Inch iPad Pro',
          quantity: 4,
          price: 649.99,
        },
      ])
    )
  }),
  rest.get('http://localhost/api/cart', (_, res, ctx) => {
    return res(
      ctx.json([])
    )
  }),
]

export const server = setupServer(...handlers)
