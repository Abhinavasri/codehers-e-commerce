# E-Commerce with Live Deals — Frontend

## Run locally
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`

This frontend is built with React + Vite and MUI. The services/api.js calls `VITE_API_BASE_URL` if set; otherwise it falls back to `http://localhost:5000/api`. While backend is not ready the app uses `src/data/mockProducts.js` as fallback.
