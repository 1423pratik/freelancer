# 🚀 Deploy Diksha Art E-commerce Website

## Quick Deployment Guide

### Option 1: Vercel (Recommended)

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your repository**: `1423pratik/freelancer`
5. **Configure settings**:
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
6. **Click "Deploy"**
7. **Your website will be live in 2-3 minutes!**

### Option 2: Netlify

1. **Go to [netlify.com](https://netlify.com)**
2. **Sign up/Login** with GitHub
3. **Click "New site from Git"**
4. **Choose GitHub** and select `1423pratik/freelancer`
5. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. **Click "Deploy site"**

### Option 3: GitHub Pages (Static Export)

1. **Install gh-pages**: `npm install --save-dev gh-pages`
2. **Add to package.json**:
   ```json
   "scripts": {
     "export": "next build && next export",
     "deploy": "gh-pages -d out"
   }
   ```
3. **Run**: `npm run deploy`

## 🌐 Custom Domain Setup

After deployment, you can add a custom domain:
- **Vercel**: Go to Project Settings → Domains
- **Netlify**: Go to Site Settings → Domain Management

## 📱 Your Live Website Features

✅ **Responsive Design** - Works on all devices
✅ **Fast Loading** - Optimized images and code
✅ **SEO Ready** - Meta tags and structured data
✅ **E-commerce Ready** - Shopping cart and wishlist
✅ **Art Gallery** - Beautiful image displays
✅ **Contact Forms** - Customer inquiries
✅ **Custom Animations** - Engaging user experience

## 🔧 Environment Variables (if needed)

If you add payment processing or APIs later:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables

## 📊 Analytics & Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics**: Add tracking code to layout.tsx
- **Hotjar**: User behavior tracking

## 🚀 Performance Tips

- Images are already optimized with `unoptimized: true`
- Tailwind CSS is purged for production
- Next.js automatically optimizes bundles
- Global CDN ensures fast loading worldwide

---

**Your Diksha Art website will be live and shareable in minutes!** 🎨✨
