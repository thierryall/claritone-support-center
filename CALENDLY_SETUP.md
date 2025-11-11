# Calendly Integration Setup

## How to Configure Your Calendly Link

The website is configured to open a Calendly popup when users click the "Book" buttons. To make it work with your Calendly account:

### Step 1: Get Your Calendly Link
1. Go to your Calendly account at https://calendly.com
2. Navigate to your event type (e.g., "Onboarding Call" or "Free Consultation")
3. Copy the scheduling link (it will look like: `https://calendly.com/your-username/event-name`)

### Step 2: Update the Code
Replace the placeholder URL in these two files:

**File 1: `/app/frontend/src/components/OnboardingPopup.jsx`**
```javascript
// Line ~25-28, change this:
window.Calendly.initPopupWidget({
  url: 'https://calendly.com/your-calendly-username/onboarding-call'
});

// To your actual Calendly link:
window.Calendly.initPopupWidget({
  url: 'https://calendly.com/YOUR-ACTUAL-CALENDLY-LINK'
});
```

**File 2: `/app/frontend/src/components/StickyBanner.jsx`**
```javascript
// Line ~16-19, change this:
window.Calendly.initPopupWidget({
  url: 'https://calendly.com/your-calendly-username/onboarding-call'
});

// To your actual Calendly link:
window.Calendly.initPopupWidget({
  url: 'https://calendly.com/YOUR-ACTUAL-CALENDLY-LINK'
});
```

### Step 3: Test
After updating the URLs, test both buttons:
- The "Book" button in the yellow banner at the top
- The "Book Your Free Call Now" button in the popup

Both should now open your actual Calendly scheduling widget!

## Example
If your Calendly link is `https://calendly.com/claritone/onboarding-session`, you would use:
```javascript
window.Calendly.initPopupWidget({
  url: 'https://calendly.com/claritone/onboarding-session'
});
```
