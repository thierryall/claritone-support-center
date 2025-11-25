# 🧪 Testing Your Claritone Support Center

## 🔍 Testing Checklist

Use this guide to test your website before AND after deployment to ensure everything works perfectly.

---

## **Part 1: Pre-Deployment Testing (Current Environment)**

Test everything BEFORE uploading to cPanel to catch issues early.

### Access Your Test Site:
**Current Test URL:** Check your Emergent frontend URL (usually shown in the dashboard)

---

### ✅ **1. Visual & Layout Testing**

**What to check:**
- [ ] Golden banner appears at top
- [ ] Logo displays correctly (not broken)
- [ ] "Book" button visible in banner
- [ ] Hero section with title "Video Support"
- [ ] Search bar visible
- [ ] All 10 video cards display in grid (3 per row on desktop)
- [ ] Video thumbnails load correctly (not gray/broken)
- [ ] Footer appears at bottom

**How to test:**
1. Open site in browser
2. Scroll through entire page
3. Take screenshots if needed
4. Check on different screen sizes (resize browser)

---

### ✅ **2. Onboarding Popup Testing**

**What to check:**
- [ ] Popup appears 1 second after page load
- [ ] Popup shows correct text: "Just got your ClariTone?"
- [ ] Phone icon displays (teal gradient circle)
- [ ] 3 checkmark benefits show
- [ ] "Book Your Free Call Now" button visible
- [ ] "Maybe later" link visible
- [ ] X button (top right) visible

**How to test:**
1. Reload page (Ctrl+R or Cmd+R)
2. Wait 1 second for popup
3. Click "Book Your Free Call Now" → Should open Calendly
4. Close Calendly, reload page
5. Click "Maybe later" → Popup should close
6. Reload page, click X button → Popup should close

---

### ✅ **3. Calendly Integration Testing**

**What to check:**
- [ ] Clicking banner "Book" button opens Calendly
- [ ] Clicking popup "Book Your Free Call Now" opens Calendly
- [ ] Calendly shows correct calendar: Thierry Allain / 30min
- [ ] Can select date/time slots
- [ ] Can close Calendly modal

**How to test:**
1. Click banner "Book" button
2. Verify Calendly opens with URL: `https://calendly.com/thierry-allain/30min`
3. Check if time slots appear
4. Close Calendly
5. Reload page, wait for popup
6. Click "Book Your Free Call Now"
7. Verify Calendly opens again

**Common issues:**
- Popup blocker blocking Calendly? Allow popups for this site
- Calendly not loading? Check internet connection

---

### ✅ **4. Video Grid Testing**

**What to check:**
- [ ] All 10 videos show with thumbnails
- [ ] Video titles display correctly
- [ ] Video descriptions visible
- [ ] "Click to watch" text appears
- [ ] Hover effect works (card lifts up)
- [ ] Play button appears on hover

**Expected videos:**
1. Unboxing & What's Inside
2. Cut Whistling
3. How to Put Hearing Aids On
4. Turning On and Off
5. Adjusting Volume
6. Adjusting Modes
7. Troubleshooting: Battery Life
8. Cleaning Tips
9. Replacing Wax Guard
10. Charging & Battery Indicator

**How to test:**
1. Scroll through page
2. Count videos (should be 10)
3. Hover over each video card
4. Verify thumbnails are NOT gray/broken
5. Check titles match expected list

---

### ✅ **5. Video Player Testing**

**What to check:**
- [ ] Clicking video opens modal player
- [ ] YouTube video loads and plays
- [ ] Video is the CORRECT video (matches title)
- [ ] Video controls work (play, pause, volume)
- [ ] X button closes modal
- [ ] Clicking outside modal closes it

**How to test for EACH video:**
1. Click on "Unboxing & What's Inside"
2. Verify video loads (not "Video unavailable")
3. Play video for 5 seconds to verify it works
4. Check if video content matches title
5. Click X to close
6. Repeat for at least 3 other videos

**Common issues:**
- Video shows "Video unavailable"? Video ID might be wrong
- Video loads but wrong content? Video ID incorrect
- Video won't play? YouTube might be blocked in your location

---

### ✅ **6. Search Functionality Testing**

**What to check:**
- [ ] Search bar accepts text input
- [ ] Typing filters videos in real-time
- [ ] Clearing search shows all videos again
- [ ] "Showing X videos" count updates
- [ ] No results message appears when no matches

**How to test:**
1. Click in search bar
2. Type "cleaning" → Should show "Cleaning Tips" video
3. Clear search → All 10 videos should appear
4. Type "battery" → Should show "Troubleshooting: Battery Life" and "Charging" videos
5. Type "xyz123" → Should show "No videos found matching your search"
6. Clear search → All videos return

---

### ✅ **7. Mobile Responsive Testing**

**What to check:**
- [ ] Site works on mobile screen size
- [ ] Banner text is readable
- [ ] Videos show 1 per row on mobile
- [ ] Popup fits on screen
- [ ] Buttons are tappable
- [ ] Search bar accessible

**How to test:**
1. **On Desktop:** Press F12 to open DevTools
2. Click device toolbar icon (phone icon) or press Ctrl+Shift+M
3. Select "iPhone 12 Pro" or "Samsung Galaxy S20"
4. Test all features on mobile view
5. **On Actual Phone:** Open site on your phone, test everything

---

### ✅ **8. Browser Console Check (Advanced)**

**What to check:**
- [ ] No red errors in console
- [ ] No 404 errors (missing files)
- [ ] No CORS errors
- [ ] Calendly script loads successfully

**How to test:**
1. Press F12 (Windows/Linux) or Cmd+Option+I (Mac)
2. Click "Console" tab
3. Reload page (Ctrl+R)
4. Look for RED errors
5. Ignore warnings (yellow) - they're not critical

**What's OK:**
- WebSocket connection errors (normal in dev)
- React DevTools messages
- Minor warnings

**What's NOT OK:**
- "Cannot read property..." errors
- "404 Not Found" for images/videos
- "Failed to load resource" for critical files

---

## **Part 2: Post-Deployment Testing (On support.claritone.net)**

After uploading to cPanel, test EVERYTHING again on the live site.

### 🌐 **Access Your Live Site:**
URL: `https://support.claritone.net` (or `http://` if SSL not yet configured)

---

### ✅ **1. Basic Connectivity Test**

**What to check:**
- [ ] Site loads (not 404 or 500 error)
- [ ] SSL works (https:// shows padlock)
- [ ] No "Not Secure" warning in browser
- [ ] Page loads within 3 seconds

**How to test:**
1. Open browser
2. Type: `support.claritone.net`
3. Press Enter
4. Verify site loads
5. Check URL bar for padlock icon (SSL)

**Common issues:**
- "This site can't be reached"? DNS not propagated yet (wait 1-24 hours)
- "Not Secure" warning? SSL not configured yet (see deployment guide)
- 404 error? Files not uploaded correctly
- 500 error? Check .htaccess file

---

### ✅ **2. File Upload Verification**

**What to check:**
- [ ] index.html loaded correctly
- [ ] CSS files loading (site has styling)
- [ ] JavaScript files loading (site is interactive)
- [ ] Images loading (logo, thumbnails)

**How to test:**
1. Open site
2. Press F12 → Network tab
3. Reload page
4. Look for green status codes (200 OK)
5. Check for red status codes (404 errors)

**What you should see:**
- `index.html` - 200 OK
- `main.[hash].js` - 200 OK
- `main.[hash].css` - 200 OK
- All video thumbnails - 200 OK

---

### ✅ **3. Repeat ALL Tests from Part 1**

After deploying, you MUST re-test everything:

1. ✅ Visual & Layout
2. ✅ Onboarding Popup
3. ✅ Calendly Integration
4. ✅ Video Grid
5. ✅ Video Player
6. ✅ Search Functionality
7. ✅ Mobile Responsive
8. ✅ Browser Console

**Why?** Different hosting environments can cause issues:
- Paths might be wrong
- Permissions might be incorrect
- HTTPS might break external resources

---

### ✅ **4. Cross-Browser Testing**

Test on multiple browsers to ensure compatibility:

**Desktop:**
- [ ] Google Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (Mac only)
- [ ] Microsoft Edge (latest)

**Mobile:**
- [ ] Safari (iPhone)
- [ ] Chrome (Android)

**How to test:**
1. Open site in each browser
2. Test key features:
   - Calendly opens
   - Videos play
   - Search works
   - Popup appears

---

### ✅ **5. Performance Testing**

**What to check:**
- [ ] Page loads in under 3 seconds
- [ ] Images load quickly
- [ ] No lag when clicking
- [ ] Smooth scrolling

**How to test:**
1. Open site in Incognito/Private mode (clears cache)
2. Reload page
3. Time how long it takes to load
4. Click around, check for lag

**Tools to use:**
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- Enter your URL: `support.claritone.net`

---

### ✅ **6. SEO & Meta Tags Check**

**What to check:**
- [ ] Page title shows in browser tab
- [ ] Site description correct
- [ ] Social sharing preview looks good

**How to test:**
1. View Page Source (Ctrl+U)
2. Look for `<title>` tag
3. Check `<meta name="description">`
4. Test social sharing:
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/post-inspector/

---

## **Part 3: User Acceptance Testing (UAT)**

Have real users test the site!

### 👥 **Who to ask:**
- Colleagues
- Family members
- A few customers (if comfortable)

### 📝 **What to ask them to do:**
1. "Visit support.claritone.net"
2. "Find the video on 'Charging & Battery Indicator'"
3. "Try to book a call"
4. "Search for 'cleaning'"
5. "Tell me if anything looks broken or confusing"

### 🗣️ **Questions to ask:**
- Does the site look professional?
- Can you easily find videos?
- Is the search helpful?
- Does Calendly work for you?
- Anything confusing or broken?

---

## **Part 4: Ongoing Monitoring**

After launch, continue monitoring:

### 📊 **Weekly Checks:**
- [ ] Site still accessible
- [ ] SSL certificate valid (check every 3 months)
- [ ] All videos still playing
- [ ] Calendly still working
- [ ] No broken links

### 🔧 **Monthly Maintenance:**
- [ ] Check Google Analytics (if added)
- [ ] Review any user feedback
- [ ] Update video thumbnails if changed
- [ ] Add new videos if created

---

## 🆘 **Troubleshooting Common Issues**

### Issue: "Videos not loading"
**Solutions:**
1. Check if YouTube is accessible
2. Verify video IDs are correct
3. Test on different network (mobile data vs WiFi)

### Issue: "Calendly not opening"
**Solutions:**
1. Check browser popup blocker
2. Verify Calendly URL is correct
3. Try different browser

### Issue: "Site looks broken (no styling)"
**Solutions:**
1. Verify CSS files uploaded
2. Check browser console for 404 errors
3. Clear browser cache (Ctrl+Shift+R)

### Issue: "Search not working"
**Solutions:**
1. Check browser console for JavaScript errors
2. Verify JS files uploaded correctly
3. Try different browser

### Issue: "Mobile version looks bad"
**Solutions:**
1. Test in actual mobile browser (not desktop responsive mode)
2. Check if CSS files loaded
3. Verify viewport meta tag in HTML

---

## ✅ **Final Deployment Checklist**

Before considering deployment "complete":

- [ ] All 10 videos display with correct thumbnails
- [ ] All videos play when clicked
- [ ] Calendly opens from both buttons
- [ ] Search filters videos correctly
- [ ] Popup appears and works
- [ ] Site works on mobile
- [ ] SSL configured (https works)
- [ ] No console errors
- [ ] Tested on 2+ browsers
- [ ] Tested on 2+ devices (desktop + mobile)
- [ ] At least 1 other person tested successfully

---

## 📞 **Get Help**

If you find issues during testing:

1. **Check browser console** (F12) for error messages
2. **Take screenshots** of any problems
3. **Note which browser/device** has the issue
4. **Try different browser** to isolate problem
5. **Clear cache** and try again (Ctrl+Shift+R)

---

## 🎉 **Success Criteria**

Your site is ready for customers when:

✅ All 10 features tested and working  
✅ No critical console errors  
✅ Works on mobile and desktop  
✅ SSL configured  
✅ At least 2 people tested successfully  
✅ You feel confident sharing the link  

**Congratulations! Your Claritone Support Center is live!** 🚀
