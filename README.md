# EstateUI

EstateUI is a full-stack real estate web application built with React, Vite, Node.js, Express, and Prisma.

## Tech Stack

### Frontend
- React 18
- Vite
- React Router DOM
- Axios
- Leaflet and React Leaflet
- React Quill
- Sass
- DOMPurify

### Backend
- Node.js
- Express.js
- Prisma ORM
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- Cookie Parser
- CORS

## Project Structure

```text
EstateUI/
├── api/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── app.js
│   ├── package.json
│   └── .env
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── .env
├── .gitignore
└── README.md
```

> This example assumes the frontend folder is named `client`. Update the paths if your actual folder name differs.

## Prerequisites

- Node.js (a recent LTS version)
- npm
- A database supported by your Prisma schema

## Installation and Setup

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd EstateUI
```

### 2. Set Up the Backend

```bash
cd api
npm install
```

Create an `api/.env` file and add the environment variables required by your application. For example:

```env
DATABASE_URL="your_database_connection_url"
JWT_SECRET="your_secret_key"
```

Replace these example values with your actual configuration. Never commit real secrets to GitHub.

### 3. Configure Prisma

Generate Prisma Client if needed:

```bash
npx prisma generate
```

If your project uses Prisma migrations, apply them according to your development setup:

```bash
npx prisma migrate dev
```

### 4. Start the Backend

Run this command from the `api` directory:

```bash
node --env-file=.env --watch app.js
```

The backend will listen on the port configured in your application. Keep this terminal open while developing.

### 5. Set Up the Frontend

Open a second terminal and navigate to the frontend directory. If it is named `client`:

```bash
cd client
npm install
```

If your frontend folder has a different name, use that folder instead.

If the frontend needs an API URL, create a `.env` file in the frontend directory. Vite environment variables exposed to frontend code must start with `VITE_`. For example:

```env
VITE_API_URL=http://localhost:YOUR_BACKEND_PORT
```

Replace `YOUR_BACKEND_PORT` with the port configured by your backend, and make sure the frontend code uses this variable.

### 6. Start the Frontend

Run this command inside the frontend directory:

```bash
npm run dev
```

Vite usually serves the app at:

```text
http://localhost:5173
```

Use the URL printed in your terminal if it differs.

## Available Scripts

### Frontend

Run these commands inside the frontend directory.

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run lint` | Check code for lint errors |
| `npm run preview` | Preview the production build locally |

### Backend

Run these commands inside `api/`.

| Command | Description |
|---|---|
| `npm install` | Install backend dependencies |
| `npx prisma generate` | Generate Prisma Client |
| `node --env-file=.env --watch app.js` | Start the backend in watch mode |

## Git and Environment Variables

Keep these files tracked by Git:
- `package.json`
- `package-lock.json`, if used
- `prisma/schema.prisma`
- Prisma migration files, if used
- Application source code

Do not commit `.env` files containing database credentials, API keys, or authentication secrets.

## Troubleshooting

### Backend fails to start
- Check your Node.js version with `node -v`.
- Verify that `api/.env` exists and contains the required variables.
- Check the database connection and confirm the port is available.

### Frontend cannot connect to the backend
- Confirm the backend is running.
- Check the API URL used by the frontend.
- Verify that the backend CORS configuration allows the frontend origin.

### Prisma errors
- Verify the database connection string.
- Run `npx prisma generate`.
- Check the Prisma schema and migration status.

## License

No open-source license has been specified yet. Add a license if you want to define how others may use, modify, and distribute this project.
