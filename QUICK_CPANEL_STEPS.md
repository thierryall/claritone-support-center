# ⚡ Quick cPanel Deployment - 10 Minutes

## 📥 Download First
**File:** `/app/frontend/claritone-support-center.zip` (344KB)

---

## 🚀 Quick Steps

### 1️⃣ Create Subdomain in cPanel
```
Domains → Subdomains
Subdomain: support
Domain: claritone.net
→ Create
```

### 2️⃣ Upload ZIP
```
File Manager → public_html/support/
→ Upload → Select claritone-support-center.zip
```

### 3️⃣ Extract
```
Right-click ZIP → Extract → Extract Files
```

### 4️⃣ Move Files Up
```
Open 'build' folder
→ Select All (Ctrl+A)
→ Move → ../ (parent)
```

### 5️⃣ Clean Up
```
Delete: build folder
Delete: claritone-support-center.zip
```

### 6️⃣ Enable SSL
```
Security → SSL/TLS Status
→ Check support.claritone.net
→ Run AutoSSL
```

---

## ✅ Final Structure Should Be:
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

## 🌐 Test
Visit: **https://support.claritone.net**

---

## 🆘 Problems?
See full guide: `CPANEL_DEPLOYMENT_GUIDE.md`
