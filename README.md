# 🔗 URL Shortener Backend API

A secure and scalable **URL Shortener Backend** built using **Node.js, Express, MongoDB, and JWT Authentication**.  
Users can register, login, create short URLs, track clicks, and manage their own links.

---

## 🚀 Features

- User Authentication (Register / Login)
- JWT-based Protected Routes
- Create Short URLs
- Redirect to Original URL
- Track Click Count
- Optional URL Expiration
- User-specific URL History
- MongoDB with Mongoose ODM
- Clean MVC Architecture
- CORS enabled for frontend integration

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Token)
- **Security:** bcryptjs (password hashing)
- **Utilities:** shortid
- **Environment:** dotenv

---

## 📂 Project Structure

src/
├── config/
│ └── db.js
├── controllers/
│ ├── authcontroler.js
│ └── conrol.js
├── middleware/
│ └── authmiddleware.js
├── models/
│ ├── User.js
│ └── Url.js
├── routes/
│ └── urlroutes.js
├── server.js
└── app.js

## 🔐 Authentication Flow

- Users register with email & password
- Passwords are hashed using **bcrypt**
- JWT token is issued on login
- Protected routes require `Authorization: Bearer <token>`

---

## 📌 API Endpoints

### 🔹 Auth Routes
| Method | Endpoint        | Description          |
|------|----------------|----------------------|
| POST | `/api/register` | Register new user |
| POST | `/api/login`    | Login & get JWT |




### 🔹 URL Routes (Protected)
| Method | Endpoint         | Description |
|------|-----------------|-------------|
| POST | `/api/shorten`   | Create short URL |
| GET  | `/api/my-urls`   | Get user URLs |
| GET  | `/:code`         | Redirect to original URL |

---

 # env file
PORT=
MONGO_URL=
JWT_SECRET=
BASE_URL=


▶️ Run Locally
git clone https://github.com/Akashbabu07/Url-Shortner.git
cd url-shortener-backend
npm install
npm run dev



Server runs on:

http://localhost:5000

# for documentation we used swagger

📘 API Documentation (Swagger)

This project uses Swagger (OpenAPI 3.0) for interactive API documentation.

Swagger UI allows you to:

View all available API endpoints

See request/response schemas

Test APIs directly from the browser

Test protected routes using JWT token


# How to Access Swagger UI

After starting the backend server, open:

http://localhost:5000/api-doc
 
 you will get documentaion of this API 


 # Testing Protected Routes in Swagger

Login using /api/login

Copy the returned JWT token

Click Authorize 🔒 button in Swagger UI

Enter token in this format:

Bearer YOUR_JWT_TOKEN


Now you can test protected endpoints like:

/api/shorten

/api/my-urls

