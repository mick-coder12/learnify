

# Learnify

Learnify is a full-stack Learning Management System (LMS) built as a portfolio project to demonstrate real-world web development skills. It supports course management, secure authentication, media handling, and subscription payments through a modern and scalable architecture.

🌐 **Live Demo:** https://learnify-coral.vercel.app/  
📦 **GitHub Repo:** https://github.com/mick-coder12/learnify  

---

## 🚀 Overview

Learnify allows users to explore and access educational content through a clean, responsive interface. Educators can manage course content, while learners can browse courses and subscribe securely.

This project showcases end-to-end development including frontend UI, backend APIs, authentication, third-party integrations, and deployment.

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- JavaScript
- CSS

### Backend
- Node.js
- Express.js

### Integrations
- Clerk (authentication & roles)
- Cloudinary (image/video storage)
- Stripe (payments & subscriptions)
- Svix (webhooks)

### Deployment
- Vercel (CI/CD & hosting)

---

## ✨ Features

- Role-based authentication (educator & student)
- Course creation and management
- Media uploads with Cloudinary
- Secure subscription payments using Stripe
- Webhook handling for payment events
- Fully responsive UI
- Live production deployment

---

## 📂 Project Structure (simplified)

```
learnify/
├── client/        # Frontend (React + Vite)
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.jsx
├── server/        # Backend (Express)
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── server.js
└── README.md
```

---

## ⚙️ Getting Started (Local Setup)

### Clone the repository
```bash
git clone https://github.com/mick-coder12/learnify.git
cd learnify
```

### Install dependencies
```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### Environment variables
Create `.env` files as required for:
- Clerk
- Cloudinary
- Stripe
- Database connection

---

## 👤 Author

**Chirag Gill**  
📧 Email: chiraggill1994@gmail.com  
💻 GitHub: https://github.com/mick-coder12  

---

## 🏁 License

This project is intended for educational and portfolio use.
