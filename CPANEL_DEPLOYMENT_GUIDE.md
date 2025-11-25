# 🚀 Deploy Claritone Support Center to cPanel (support.claritone.net)

## 📦 What You Have

**ZIP File:** `claritone-support-center.zip` (344KB)
- Location: `/app/frontend/claritone-support-center.zip`
- Contains: Complete website + .htaccess file for routing

---

## 🎯 Step-by-Step cPanel Deployment

### Step 1: Download the ZIP File

1. **In Emergent:** Use the file explorer to download `/app/frontend/claritone-support-center.zip`
2. **Save it** to your computer

---

### Step 2: Login to cPanel

1. Go to your hosting cPanel (usually: `https://claritone.net:2083` or `https://yourhostingprovider.com/cpanel`)
2. Login with your credentials

---

### Step 3: Create Subdomain (if not already created)

1. **In cPanel, find:** "Subdomains" (under Domains section)
2. **Create subdomain:**
   - Subdomain: `support`
   - Domain: `claritone.net`
   - Document Root: `public_html/support` (or similar)
3. **Click "Create"**

**Note:** cPanel will automatically create the folder. Remember the path (e.g., `/home/username/public_html/support`)

---

### Step 4: Upload Files via File Manager

1. **In cPanel, open:** "File Manager"
2. **Navigate to** your subdomain folder:
   - Usually: `public_html/support/`
   - Or the document root you specified in Step 3
3. **Click "Upload"** button (top right)
4. **Upload** `claritone-support-center.zip`
5. **Wait for upload** to complete (344KB - should be fast)

---

### Step 5: Extract ZIP File

1. **In File Manager,** find the uploaded `claritone-support-center.zip`
2. **Right-click** on it
3. **Select "Extract"**
4. **Choose** the current directory
5. **Click "Extract Files"**

This will create a `build` folder with all your files inside.

---

### Step 6: Move Files to Root

You need to move files from `build` folder to the subdomain root:

1. **Open the `build` folder** (double-click it)
2. **Select all files** (Ctrl+A or Cmd+A)
   - You should see: `index.html`, `.htaccess`, `static` folder, etc.
3. **Click "Move"** button
4. **Move to parent directory:** `..` (one level up)
5. **Move the files**

Now your structure should be:
```
public_html/support/
├── index.html
├── .htaccess
├── static/
│   ├── css/
│   └── js/
└── asset-manifest.json
```

---

### Step 7: Delete Unnecessary Files

1. **Delete** the empty `build` folder
2. **Delete** the `claritone-support-center.zip` file

---

### Step 8: Set Permissions (If Needed)

Most cPanel servers have correct permissions by default, but verify:

1. **Right-click on `.htaccess`** → Permissions
2. **Set to 644** (rw-r--r--)
3. **For folders** (static, css, js): Set to 755 (rwxr-xr-x)
4. **For files** (index.html, etc.): Set to 644

---

### Step 9: Test Your Website

1. **Open browser**
2. **Go to:** `http://support.claritone.net`
3. **Verify:**
   - ✅ Site loads
   - ✅ Golden banner appears
   - ✅ Onboarding popup shows
   - ✅ Videos display with thumbnails
   - ✅ Clicking videos opens player
   - ✅ Calendly works

---

## 🔒 Step 10: Enable SSL (HTTPS)

### Option A: Free SSL via cPanel (Let's Encrypt)

1. **In cPanel, find:** "SSL/TLS Status"
2. **Check** `support.claritone.net`
3. **Click "Run AutoSSL"** or "Install SSL"
4. **Wait 2-5 minutes** for certificate issuance
5. **Test:** `https://support.claritone.net`

### Option B: Force HTTPS (Add to .htaccess)

After SSL is installed, add this to the TOP of your `.htaccess` file:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## ✅ Final Checklist

After deployment, verify:

- [ ] Site accessible at `http://support.claritone.net`
- [ ] SSL working at `https://support.claritone.net`
- [ ] Golden banner visible with "Book" button
- [ ] Onboarding popup appears on load
- [ ] All 10 videos show with proper thumbnails
- [ ] Video player opens when clicking videos
- [ ] Calendly popup works (https://calendly.com/thierry-allain/30min)
- [ ] Search bar filters videos correctly
- [ ] Mobile responsive (test on phone)
- [ ] No console errors (F12 → Console)

---

## 🔧 Alternative Upload Method: FTP

If File Manager doesn't work, use FTP:

1. **Get FTP credentials** from cPanel (FTP Accounts)
2. **Use FTP client** (FileZilla, recommended)
3. **Connect to your server**
4. **Navigate to** `/public_html/support/`
5. **Upload** all files from the extracted `build` folder

---

## 🆘 Troubleshooting

### Problem: "Internal Server Error" (500)

**Solution:**
- Check `.htaccess` file is present
- Verify file permissions (644 for files, 755 for folders)
- Check cPanel error logs: Metrics → Errors

### Problem: "Page Not Found" when clicking videos

**Solution:**
- Ensure `.htaccess` is in the root of your subdomain
- Verify mod_rewrite is enabled (contact host if not)

### Problem: Videos not loading

**Solution:**
- Check browser console (F12) for errors
- Verify YouTube video IDs are correct
- Test if YouTube is accessible from your location

### Problem: Calendly not opening

**Solution:**
- Clear browser cache
- Verify Calendly URL: https://calendly.com/thierry-allain/30min
- Check if popups are blocked in browser

### Problem: SSL not working

**Solution:**
- Wait 5-10 minutes after installation
- Check SSL/TLS Status in cPanel
- Contact hosting support if issue persists

### Problem: Subdomain not resolving

**Solution:**
- DNS propagation takes 1-24 hours
- Check DNS settings in cPanel
- Verify subdomain was created correctly

---

## 📞 Need Help?

**Common cPanel Issues:**

1. **Can't find File Manager?** 
   - Look under "Files" section in cPanel

2. **Can't create subdomain?**
   - You may need admin access or contact your host

3. **SSL certificate failing?**
   - Ensure DNS is pointing to your server
   - Wait 24 hours for DNS propagation

4. **Performance issues?**
   - Enable compression (already in .htaccess)
   - Consider using Cloudflare (free CDN + SSL)

---

## 🎉 You're Done!

Your Claritone Support Center should now be live at:
**https://support.claritone.net**

Share the link with your customers and start helping them with their hearing aids! 🎧

---

## 📊 Optional: Add Google Analytics

To track visitors, add this to `index.html` (before `</head>`):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual Google Analytics ID.
