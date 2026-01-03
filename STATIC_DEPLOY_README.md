# Static Deployment Guide - Vaishali Enterprise

This branch (`static-deploy`) contains a **fully static version** of the Vaishali Enterprise website, ready for deployment to static hosting platforms.

## Changes Made

✅ **Removed:**
- Contact form with backend submission
- Expert request form
- All API calls to backend server
- MongoDB dependencies
- Express server requirements

✅ **Updated:**
- Expert popup now shows direct contact options (Phone, WhatsApp, Email)
- Contact page displays contact information and map only
- No backend required - 100% static files

## Deploy to Static Hosting

### Option 1: Vercel (Recommended)

1. Push this branch to GitHub:
   ```bash
   git push origin static-deploy
   ```

2. Go to [Vercel](https://vercel.com)
3. Click "New Project" → Import your repository
4. Configure:
   - **Framework Preset:** Create React App
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
5. Click "Deploy"

### Option 2: Netlify

1. Push branch to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository and `static-deploy` branch
5. Configure:
   - **Base directory:** `client`
   - **Build command:** `npm run build`
   - **Publish directory:** `client/build`
6. Click "Deploy"

### Option 3: GitHub Pages

1. Build the project:
   ```bash
   cd client
   npm run build
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add to `client/package.json`:
   ```json
   "homepage": "https://yourusername.github.io/Vaishali-Enterprise",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Option 4: Cloudflare Pages

1. Push branch to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Connect repository
4. Configure:
   - **Build command:** `cd client && npm run build`
   - **Build output directory:** `client/build`
5. Deploy

## Local Testing

To test the static build locally:

```bash
cd client
npm run build
npx serve -s build
```

Visit `http://localhost:3000` to view.

## Contact Information

The site now displays:
- **Phone:** +91 95747 76776
- **WhatsApp:** Direct link to chat
- **Email:** vaishali.laminates@gmail.com
- **Location:** Embedded Google Maps

## Features Retained

✅ All pages (Home, About, Products, Contact)
✅ Responsive design & dark mode
✅ Product showcase with images
✅ Company information
✅ Google Maps integration
✅ Social media links
✅ Mobile-friendly navigation

## Switching Back to Full Version

To switch back to the version with forms and backend:

```bash
git checkout main
```

---

**Ready to deploy! 🚀** Choose any static hosting platform above and follow the steps.
