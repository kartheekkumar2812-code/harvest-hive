# Harvest Hive — Expanded Scaffold

This project is a Vite + React + TypeScript scaffold with:
- Routing (react-router-dom)
- Lightweight UI component stubs under `src/components/ui/`
- Mock API service layer under `src/api/`
- Pages: Home, Marketplace, Login, Dashboard
- TailwindCSS for responsive UI
- Framer Motion included for animations

## Run locally

1. Install:
   ```
   npm install
   ```

2. Start dev server:
   ```
   npm run dev
   ```

3. Open http://localhost:5173


## Linting, Testing & Deployment

Run lint:
```
npm run lint
```

Format code:
```
npm run format
```

Run tests:
```
npm run test
```

Deploy to Vercel:
- Connect the repo to Vercel and use the default build command `npm run build`.

Deploy to Netlify:
- Drag & drop the `dist` folder or connect the repo and set build command `npm run build` and publish directory `dist`.


### Replacing UI stubs with shadcn/ui
shadcn is a set of components generated for Tailwind. To replace stubs:
1. Install required libs (Radix + shadcn setup) as per shadcn docs.
2. Replace files under `src/components/ui/*` with the official components and adapt imports.
