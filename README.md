<p align="center"><img src="./public/logo.png" width="200" alt="Falcosend Logo"></p>

# falcosend-sdk

## Your forms, powered by a few lines of code.
Stop building backends for contact or survey forms. Falcosend handles your form submissions in milliseconds.

## 🚀 Quick Start

### 1. Link webisite to Falcosend
Visit [Falcosend](https://falcosend.ellypad.com) and create a service to get a submission key.

### 2. Install SDK
```sh
pnpm add falcosend-sdk
# or
npm install falcosend-sdk
```

### 3. Send form submissions to Falcosend API
```
import { FalcoSend } from 'falcosend-sdk';

const sdk = new FalcoSend({submissionKey: 'your_key'});

const onSubmit = async (formData) => {
  const response = await sdk.submit({
    form: 'contact_us',
    data: formData
  });

  if (response.success) {
    console.log('Submission delivered!');
  }
};
```

## ✨ Features
⚡️ Sub-millisecond Latency: Built on edge-optimized infrastructure.
🛡️ Spam Protection: Native honeypot and bot detection support.
🟦 TypeScript Native: Full autocompletion and type safety for your payloads.

## 🛠 API Reference
```new FalcoSend({url?: string, submissionKey: string})```
`url` is set to `https://api.falcosend.ellypad.com/v1/submissions/create/`.
This can be changed to point to a different API version.

Visit [Falcosend Docs](https://falcosend.ellypad.com/docs) to learn more.