# Server for the Next.js Course

Provides an API for a tennis goods store.

## Initialization

1. Install dependencies: `npm i`
2. Initialize Prisma: `npx prisma migrate dev --name init`
3. Seed the database: `npx prisma migrate reset`. Confirm database cleanup when prompted.

## API

Data schema: `prisma/schema.prisma`

Seed data: `prisma/seed.ts`

Run `npm run dev` to start the server at `http://localhost:4000`

### POST /api/auth/login

For login, pass `login` and `password` in the request body.

### POST /api/auth/signup

For signup, pass `login` and `password` in the request body.

### DELETE /api/auth/signup

Logout.

### GET /api/auth/user

Information about the current user.

### GET /api/meta/product/[productId]

Product metadata.

### GET /api/product/[productId]

Product information.

### POST, DELETE /api/product/[productId]/favorite

Add/remove a product from favorites.

### GET /api/products

Product list.

Parameters:

* `page` and `limit` for pagination
* `brand` — filter by brand name

### GET /api/top-10

Top 10 products.

### GET /api/brands

Product brands.
