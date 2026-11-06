# CampusCode ReBuild '26 - Deployment Guide

This guide provides step-by-step instructions for deploying your CampusCode recreation to Vercel and other hosting platforms.

## Prerequisites

Before deploying, ensure you have:
- All code committed to your local repository
- A GitHub account (for Vercel deployment)
- Node.js and npm installed locally
- Project builds successfully (`npm run build`)

## Option 1: Vercel Deployment (Recommended)

Vercel is the recommended hosting platform for this project because:
- Optimized for Vite projects
- Automatic HTTPS
- Fast global CDN
- Free tier available
- Easy GitHub integration

### Step 1: Push to GitHub

1. **Initialize Git repository** (if not already done)
   ```bash
   cd campuscode-rebuild
   git init
   ```

2. **Add all files**
   ```bash
   git add .
   ```

3. **Create initial commit**
   ```bash
   git commit -m "Initial commit: CampusCode ReBuild '26 submission"
   ```

4. **Create GitHub repository**
   - Go to [github.com](https://github.com) and sign in
   - Click "+" → "New repository"
   - Name it: `campuscode-rebuild` (or your preferred name)
   - Make it Public (recommended for hackathon submissions)
   - Click "Create repository"

5. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/campuscode-rebuild.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy via Vercel Dashboard

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account
   - Complete the onboarding process

2. **Import your repository**
   - Click "Add New" → "Project"
   - Select your `campuscode-rebuild` repository from the list
   - Click "Import"

3. **Configure the project**
   - **Framework Preset:** Vite (auto-detected)
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

   The `vercel.json` file in your project has these settings pre-configured.

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 30-60 seconds)
   - You'll see a deployment URL like: `https://campuscode-rebuild-xyz.vercel.app`

5. **Configure domain (optional)**
   - Go to project Settings → Domains
   - Add a custom domain if you have one

### Step 3: Update Project Settings (Optional)

1. **Environment Variables**
   - Not needed for this project (frontend-only, no API keys)

2. **Branch Protection**
   - Go to Settings → Git
   - Configure branch protection if needed

### Step 4: Verify Deployment

1. **Visit your deployment URL**
   - Check that the homepage loads
   - Test navigation to `/login`, `/register`, `/dashboard`
   - Verify all interactions work

2. **Test responsive design**
   - Open DevTools and test at different screen sizes
   - Verify mobile layout works

## Option 2: Vercel CLI Deployment

If you prefer using the command line:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   cd campuscode-rebuild
   vercel
   ```

4. **Follow the prompts**
   - Link to existing project or create new
   - Confirm build settings
   - Wait for deployment

5. **Deploy to production**
   ```bash
   vercel --prod
   ```

## Option 3: Netlify Deployment

Netlify is another excellent option for static hosting:

### Via Netlify Dashboard

1. **Sign up at [netlify.com](https://netlify.com)**
2. **Push code to GitHub** (follow Step 1 from Vercel section)
3. **Create new site**
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

### Via Drag and Drop

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Upload to Netlify**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist/` folder
   - Your site will be live instantly

## Option 4: GitHub Pages

Free hosting directly from GitHub:

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Configure base path in vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/campuscode-rebuild/',
     plugins: [react()],
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Access at**
   ```
   https://YOUR_USERNAME.github.io/campuscode-rebuild
   ```

## Option 5: Static File Hosting

For simple static hosting (AWS S3, Firebase, etc.):

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `dist/` folder**
   - AWS S3: Upload and enable static website hosting
   - Firebase: Use `firebase deploy` after initialization
   - Cloudflare Pages: Connect GitHub or upload via dashboard

## Post-Deployment Checklist

After deploying, verify:

- [ ] Homepage loads at the deployment URL
- [ ] All navigation links work
- [ ] Login page accessible at `/login`
- [ ] Register page accessible at `/register`
- [ ] Dashboard accessible at `/dashboard`
- [ ] Forms validate correctly
- [ ] No console errors in browser
- [ ] Responsive design works on mobile
- [ ] HTTPS is enabled (automatic on Vercel/Netlify)
- [ ] Page load time is acceptable (< 3 seconds)

## Troubleshooting

### Build Fails on Vercel

**Issue:** Build fails during deployment

**Solution:**
- Check the build logs in Vercel dashboard
- Ensure `package.json` has correct scripts
- Verify all dependencies are in `package.json`
- Try locally: `npm run build` to reproduce

### 404 Errors After Deployment

**Issue:** Navigation links don't work on deployed site

**Solution:**
- Ensure you're using `HashRouter` instead of `BrowserRouter` if on static hosting
- Or configure server-side routing (not needed for Vercel/Netlify)

### Styles Not Loading

**Issue:** CSS files not loading after deployment

**Solution:**
- Check that `dist/` folder contains CSS files
- Verify build completed successfully
- Clear browser cache

### Environment Variables Missing

**Issue:** Site needs environment variables

**Solution:**
- Add them in Vercel dashboard (Settings → Environment Variables)
- For this project, no environment variables are needed

## Performance Optimization

The project is already optimized, but you can:

1. **Enable compression** (automatic on Vercel/Netlify)
2. **Add caching headers** (automatic on Vercel/Netlify)
3. **Optimize images** (if you add real images later)
4. **Enable CDN** (automatic on Vercel/Netlify)

## Custom Domain (Optional)

### For Vercel

1. Buy a domain from Namecheap, GoDaddy, etc.
2. Go to Vercel project → Settings → Domains
3. Add your domain
4. Update DNS records as instructed by Vercel

### For Netlify

1. Go to Domain settings
2. Add custom domain
3. Update DNS records

## Submission URL Format

For your Unstop submission, you'll need:

**GitHub Repository:**
```
https://github.com/YOUR_USERNAME/campuscode-rebuild
```

**Live Deployment (Vercel example):**
```
https://campuscode-rebuild-xyz.vercel.app
```

**Custom Domain (if configured):**
```
https://your-custom-domain.com
```

## Support

If you encounter issues:
- Check Vercel/Netlify documentation
- Review build logs in the hosting dashboard
- Ensure your local build works first
- Try deploying to a different platform

---

**Deployment Ready:** Your project is fully configured and ready for deployment to any static hosting platform.
