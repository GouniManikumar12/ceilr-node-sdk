# CeilR Node.js SDK

🚀 **CeilR SDK** is a Node.js library for feature access management, usage tracking, and entitlement fetching.

## 📦 Installation

Install the package in your project:

```sh
npm install ceilr-node-sdk
```

## 🛠️ Setup

Initialize the SDK:

```javascript
const CeilR = require("ceilr-node-sdk");

const ceilr = new CeilR("your-api-key", "customer-id");
```

## 🚀 Features

### ✅ **Check Feature Access**
```javascript
const hasAccess = await ceilr.checkFeature("premium_feature");
console.log("Feature Access:", hasAccess);
```

### 📊 **Track Usage**
```javascript
await ceilr.trackUsage("api_calls", 1);
```

### 🔑 **Get User Entitlements**
```javascript
const entitlements = await ceilr.getUserEntitlements();
console.log("User Entitlements:", entitlements);
```

## 📡 Offline Support
- Requests are **queued when offline** and retried when the device is back online.

## 🛠 Configuration

You can set custom API endpoints if needed:

```javascript
ceilr.endpoint = "https://custom-api-url.com";
```

## 🔄 Updating the SDK
To update to the latest version:

```sh
npm update ceilr-node-sdk
```

## 🤝 Contributing
1. Fork the repo
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Add new feature"`)
4. Push to GitHub (`git push origin feature-name`)
5. Open a Pull Request 🚀

## 📜 License
This project is licensed under the **MIT License**.

## 📞 Support
For any issues or questions, reach out via:
- **GitHub Issues**: [https://github.com/GouniManikumar12/ceilr-node-sdk/issues](https://github.com/GouniManikumar12/ceilr-node-sdk/issues)
- **Email**: support@ceilr.com

