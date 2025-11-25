# 🚀 Deploying Claritone Support Center to support.claritone.net

## What You'll Deploy

Your Claritone Support Center includes:
- ✅ Golden booking banner with Calendly integration
- ✅ Onboarding popup
- ✅ 10 YouTube support videos in grid layout
- ✅ Search functionality
- ✅ Video player modals
- ✅ Responsive design

## 📦 Files Ready for Deployment

The production-ready files are located in: `/app/frontend/build/`

This folder contains:
- `index.html` - Main HTML file
- `static/` - CSS, JavaScript, and assets
- All necessary files for your website

## 🌐 Deployment Options

### Option 1: Deploy to Your Web Hosting (cPanel, FTP, etc.)

**If you have traditional web hosting:**

1. **Download the build folder** from `/app/frontend/build/`
2. **Upload via FTP/SFTP** to your web server
3. **Point subdomain** `support.claritone.net` to this directory
4. **Configure .htaccess** (if Apache) for proper routing:

```apache
# .htaccess file
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

### Option 2: Deploy to Netlify (Recommended - Free & Easy)

**Steps:**

1. **Download the build folder** from `/app/frontend/build/`
2. **Go to** [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. **Drag and drop** the `build` folder
4. **Get your URL** (e.g., `your-site-name.netlify.app`)
5. **Add custom domain:**
   - Go to Domain Settings
   - Add custom domain: `support.claritone.net`
   - Update your DNS records as instructed by Netlify

**DNS Configuration for Netlify:**
```
Type: CNAME
Name: support
Value: your-site-name.netlify.app
TTL: Automatic
```

---

### Option 3: Deploy to Vercel (Also Recommended)

**Steps:**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd /app/frontend/build
   vercel --prod
   ```

3. **Add custom domain** in Vercel dashboard:
   - Go to Project Settings → Domains
   - Add `support.claritone.net`
   - Update DNS as instructed

---

### Option 4: Deploy to AWS S3 + CloudFront

**For enterprise/scalable hosting:**

1. **Create S3 bucket** named `support.claritone.net`
2. **Enable static website hosting**
3. **Upload build folder** contents
4. **Create CloudFront distribution**
5. **Configure SSL certificate** (AWS Certificate Manager)
6. **Update DNS** to point to CloudFront

---

### Option 5: Deploy via GitHub Pages

**If you want GitHub to host it:**

1. **Create GitHub repository**
2. **Push build folder** to `gh-pages` branch
3. **Enable GitHub Pages** in repository settings
4. **Add custom domain** `support.claritone.net`
5. **Create CNAME file** with `support.claritone.net`

---

## 🔧 DNS Configuration Guide

**For any hosting option, you'll need to configure DNS:**

### At Your Domain Registrar (where you bought claritone.net):

**If using traditional hosting:**
```
Type: A Record
Name: support
Value: [Your hosting IP address]
TTL: 3600
```

**If using Netlify/Vercel:**
```
Type: CNAME
Name: support
Value: [provided by hosting service]
TTL: 3600
```

---

## ⚙️ Configuration Files Included

### Backend API (Optional - Not Required for Video Support)

Your site currently uses:
- ✅ YouTube embeds (no backend needed)
- ✅ Calendly integration (no backend needed)
- ✅ Static content

The backend at `/app/backend` is not required for the support page to function. However, if you want to use it later:

- **Backend URL:** Already configured in environment variables
- **MongoDB:** Only needed if you add dynamic features later

---

## 📝 Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads at `https://support.claritone.net`
- [ ] SSL certificate is active (https works)
- [ ] Golden banner appears with "Book" button
- [ ] Onboarding popup shows on page load
- [ ] All 10 videos display with thumbnails
- [ ] Clicking videos opens player modal
- [ ] Search functionality works
- [ ] Calendly popup opens when clicking "Book"
- [ ] Mobile responsive design works

---

## 🆘 Troubleshooting

**Videos not showing?**
- Check that YouTube URLs are accessible
- Verify video IDs in mockData.js are correct

**Calendly not opening?**
- Verify Calendly URL: `https://calendly.com/thierry-allain/30min`
- Check browser console for errors

**Routing issues (404 errors)?**
- Add .htaccess file (Apache)
- Configure rewrites on your hosting

**SSL not working?**
- Most modern hosts provide free SSL (Let's Encrypt)
- For custom setup, use Cloudflare (free SSL proxy)

---

## 📞 Need Help?

Common hosting providers with great React support:
- **Netlify** - Easiest, free tier available
- **Vercel** - Great for React, free tier
- **Cloudflare Pages** - Fast, free tier
- **AWS Amplify** - Enterprise option

---

## 🎉 You're Ready!

Choose your hosting option above and follow the steps. Your Claritone Support Center will be live at **support.claritone.net** in minutes!

**Recommended Path:** Start with Netlify drag-and-drop for the easiest deployment. You can always migrate to another service later.
