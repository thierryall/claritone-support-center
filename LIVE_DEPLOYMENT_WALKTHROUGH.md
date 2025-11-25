# 🚀 LIVE cPanel Deployment - Interactive Guide

## Current Step: DOWNLOAD ZIP FILE

### What You Need:
- ✅ cPanel login credentials
- ✅ ZIP file downloaded (claritone-support-center.zip - 344KB)
- ✅ Domain: claritone.net
- ✅ Subdomain: support.claritone.net
- ✅ 15 minutes of time

---

## 📋 Quick Steps Overview

```
Step 1: Download ZIP ⬅️ YOU ARE HERE
Step 2: Login to cPanel
Step 3: Create Subdomain (if needed)
Step 4: Upload ZIP File
Step 5: Extract ZIP File
Step 6: Move Files to Root
Step 7: Clean Up
Step 8: Test Site
Step 9: Enable SSL
Step 10: Final Test
```

---

## DETAILED STEPS

### STEP 1: Download ZIP File ✅
**Location:** `/app/frontend/claritone-support-center.zip`
**Size:** 344 KB
**Action:** Download to your computer

---

### STEP 2: Login to cPanel

**Find your cPanel URL:**
Common formats:
- `https://claritone.net:2083`
- `https://claritone.net/cpanel`
- `https://yourhostingprovider.com/cpanel`
- Check email from hosting provider for exact URL

**Login:**
1. Open cPanel URL in browser
2. Enter username
3. Enter password
4. Click "Login"

**✅ CHECKPOINT:** You should see cPanel dashboard with icons

---

### STEP 3: Create Subdomain (Skip if already exists)

**In cPanel, find:** "Subdomains" (under "Domains" section)

**Create subdomain:**
1. Click "Subdomains"
2. In "Subdomain" field, type: `support`
3. Domain should auto-fill: `claritone.net`
4. Document Root will auto-populate (e.g., `public_html/support`)
5. Click "Create"

**✅ CHECKPOINT:** You'll see "Success: Subdomain support.claritone.net has been created"

**Note the Document Root path!** (usually `public_html/support`)

---

### STEP 4: Upload ZIP File

**In cPanel, find:** "File Manager" (under "Files" section)

**Navigate to subdomain folder:**
1. Click "File Manager"
2. Navigate to the document root you noted (e.g., `public_html/support/`)
3. Click "Upload" button (top right corner)
4. Click "Select File" button
5. Choose `claritone-support-center.zip` from your Downloads
6. Wait for upload to complete (should be quick - only 344 KB)
7. Close upload window

**✅ CHECKPOINT:** You should see `claritone-support-center.zip` in the file list

---

### STEP 5: Extract ZIP File

**In File Manager:**
1. Find `claritone-support-center.zip` in the file list
2. **Right-click** on the ZIP file
3. Select "Extract"
4. Extract to: (current directory - should be already selected)
5. Click "Extract File(s)" button
6. Wait for extraction (takes 5-10 seconds)
7. Click "Close" when done

**✅ CHECKPOINT:** You should now see a new folder called `build`

---

### STEP 6: Move Files to Root

**Important:** Files need to be in the root of your subdomain, not in a `build` folder

**In File Manager:**
1. Double-click the `build` folder to open it
2. You should see:
   - `index.html`
   - `.htaccess`
   - `static` folder
   - `asset-manifest.json`
3. **Select ALL files** (click first file, then Ctrl+A or Cmd+A)
4. Click "Move" button at the top
5. In "Move to" field, enter: `../` (this means "up one level")
   - Or navigate to your subdomain root (e.g., `/home/username/public_html/support`)
6. Click "Move Files"
7. Confirm the move

**✅ CHECKPOINT:** Files should now be in `/public_html/support/` (not in build folder)

---

### STEP 7: Clean Up

**Delete unnecessary files:**

1. Navigate back to subdomain root (e.g., `public_html/support/`)
2. You should now see all files at the root level
3. Delete the empty `build` folder:
   - Right-click on `build` folder
   - Select "Delete"
   - Confirm
4. Delete the ZIP file:
   - Right-click on `claritone-support-center.zip`
   - Select "Delete"
   - Confirm

**✅ CHECKPOINT:** Your folder structure should look like:
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

### STEP 8: Test Your Site

**Open your browser and visit:**
`http://support.claritone.net`

**What you should see:**
- ✅ Golden banner at top
- ✅ Claritone logo
- ✅ "Video Support" heading
- ✅ Wait 1 second for popup
- ✅ 10 video cards in grid

**If it works:** Continue to Step 9
**If it doesn't work:** See troubleshooting section below

---

### STEP 9: Enable SSL (HTTPS)

**In cPanel, find:** "SSL/TLS Status" (under "Security" section)

**Enable SSL:**
1. Click "SSL/TLS Status"
2. Find `support.claritone.net` in the list
3. Check the box next to it
4. Click "Run AutoSSL"
5. Wait 2-5 minutes for certificate installation
6. You'll see "Success" message

**Alternative method - Let's Encrypt:**
1. In cPanel, find "Let's Encrypt SSL"
2. Select `support.claritone.net`
3. Click "Issue"
4. Wait for confirmation

**✅ CHECKPOINT:** After 5 minutes, visit `https://support.claritone.net` (notice the 's' in https)

---

### STEP 10: Final Test

**Visit:** `https://support.claritone.net`

**Test checklist:**
- [ ] Page loads with HTTPS (padlock in address bar)
- [ ] Golden banner appears
- [ ] Onboarding popup shows after 1 second
- [ ] Click "Book Your Free Call Now" - Calendly opens
- [ ] Close popup, scroll down
- [ ] All 10 videos display with thumbnails
- [ ] Click on a video - modal opens and plays
- [ ] Search bar works (type "cleaning")
- [ ] Test on mobile (open on your phone)

**If all tests pass:** 🎉 DEPLOYMENT COMPLETE!

---

## 🆘 TROUBLESHOOTING

### Problem: "Page Not Found" (404)

**Solution:**
1. Check if files are in correct location (subdomain root, not in build folder)
2. Verify subdomain was created correctly
3. Check document root path
4. Wait 5-10 minutes for DNS propagation

---

### Problem: "Internal Server Error" (500)

**Solution:**
1. Check if `.htaccess` file is present
2. Right-click `.htaccess` → Permissions → Set to 644
3. Check cPanel error logs: Metrics → Errors
4. Contact hosting support if persists

---

### Problem: Site loads but looks broken (no colors/styling)

**Solution:**
1. Check if `static` folder was moved correctly
2. Press Ctrl+Shift+R (hard refresh) to clear cache
3. Check browser console (F12) for 404 errors
4. Verify all files extracted properly

---

### Problem: Videos not showing thumbnails

**Solution:**
1. This is normal - YouTube thumbnails can take a moment
2. Check internet connection
3. Try different browser
4. Verify video IDs are correct

---

### Problem: Calendly not opening

**Solution:**
1. Check browser popup blocker - allow popups for your site
2. Try different browser
3. Check browser console (F12) for errors
4. Verify Calendly URL is correct

---

### Problem: SSL not working after 5 minutes

**Solution:**
1. Wait up to 24 hours for DNS propagation
2. Check domain DNS settings point to hosting server
3. Try alternative SSL method (Let's Encrypt vs AutoSSL)
4. Contact hosting support for SSL assistance

---

### Problem: "This site can't be reached"

**Solution:**
1. DNS not propagated yet - wait 1-24 hours
2. Check subdomain created correctly in cPanel
3. Verify domain DNS points to hosting server
4. Try accessing via IP address temporarily

---

## 📞 Need More Help?

**Common Issues:**
- DNS propagation can take up to 24 hours
- Some hosts require manual SSL setup
- File permissions might need adjustment (644 for files, 755 for folders)

**What to Check:**
1. cPanel error logs
2. Browser console (F12)
3. File permissions
4. DNS settings

---

## ✅ SUCCESS CHECKLIST

After deployment, verify:
- [ ] Site loads at https://support.claritone.net
- [ ] SSL certificate active (padlock showing)
- [ ] Golden banner visible
- [ ] Popup appears
- [ ] All 10 videos display
- [ ] Videos play when clicked
- [ ] Calendly opens
- [ ] Search works
- [ ] Mobile responsive
- [ ] No console errors

**All checked?** 🎉 CONGRATULATIONS! Your site is live!

---

## 🎯 WHAT TO DO AFTER DEPLOYMENT

1. **Share the link** with your team
2. **Test thoroughly** on different devices
3. **Get feedback** from users
4. **Monitor performance**
5. **Update videos** as needed

---

**Your Claritone Support Center is now live and helping customers!** 🎊
