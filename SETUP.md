# Nat Habit Storefront – Setup & Installation Instructions

This guide provides comprehensive, step-by-step instructions for running, building, and deploying the **Nat Habit Storefront** application.

---

## 1. System Requirements & Prerequisites

Ensure your local development machine meets the following prerequisites:
- **Node.js**: `v18.17.0` or higher (Recommended: `v20.x LTS`)
- **Package Manager**: `npm` (v9+) or `yarn` / `pnpm`
- **Git**: For repository cloning and version control

You can verify your Node version by running:
```bash
node -v
```

---

## 2. Local Installation

### Step 1: Clone the Repository
```bash
git clone <YOUR_GITHUB_REPO_URL>
cd nat-habit-assignement
```

### Step 2: Install Dependencies
Because this project utilizes modern React 19 alongside Ant Design and UI components, run the installation with `--legacy-peer-deps` to ensure clean dependency resolution:
```bash
npm install --legacy-peer-deps
```

---

## 3. Running the Local Development Server

Start the interactive Next.js development server:
```bash
npm run dev
```

Once started, open your browser and navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

Hot Module Replacement (HMR) is active—any edits to components or styles will instantly reflect in the browser.

---

## 4. Production Build & Verification

To verify that TypeScript types compile cleanly and test the optimized production build locally:

### Step 1: Run TypeScript Check
```bash
npx tsc --noEmit
```

### Step 2: Build the Production Bundle
```bash
npm run build
```

### Step 3: Start the Production Server Locally
```bash
npm run start
```
Your production-optimized build will run at **[http://localhost:3000](http://localhost:3000)**.

---

## 5. Deployment Guide (Vercel / Netlify)

### Deploying to Vercel (Recommended)
1. Push your project to a GitHub repository.
2. Import the repository in [Vercel](https://vercel.com/).
3. Set the following **Build & Development Settings**:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `npm run build`
   - **Install Command**: `npm install --legacy-peer-deps`
4. Click **Deploy**. Your live production URL will be ready in under a minute.
