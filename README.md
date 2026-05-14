# 🔍 FoundIt+ — Smart Lost & Found Platform for Colleges

FoundIt+ is a full-stack MERN application designed to simplify lost and found management inside college campuses.

The platform replaces unorganized WhatsApp groups and manual notices with a structured digital system where students can post lost/found items, search listings, upload images, and track claim status efficiently.

---

# 🌐 Live Demo

https://jiitfoundit.netlify.app/

---

# ✨ Key Features

## 🔐 Authentication & Security

* JWT-based user authentication
* Secure password hashing using bcrypt
* Protected routes using middleware
* Persistent login sessions
* Environment variable based secret management

## 📦 Lost & Found Management

* Post lost items with details and images
* Post found items for identification
* Add item descriptions, categories, and locations
* Track item claim status
* Mark items as resolved after successful claims

## 🖼 Image Upload Support

* Upload item images using Multer
* Store and manage uploaded files efficiently
* Visual identification for faster matching

## 🔎 Search & Filtering

* Filter items by category
* Search based on item title or keywords
* Filter by lost/found status
* Location-based organization of posts

## 🎨 Modern User Experience

* Responsive design for desktop and mobile
* Clean and minimal user interface
* Smooth navigation using React Router
* Fast frontend performance using Vite

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Multer

## Deployment

* Frontend: Netlify
* Backend: Render
* Database: MongoDB Atlas

---

# 🏗 Highlights

* Designed RESTful APIs using Express.js
* Built modular MVC backend architecture
* Implemented JWT authentication and protected routes
* Structured scalable MongoDB schemas using Mongoose
* Managed file uploads using Multer middleware
* Developed item filtering and search functionality
* Implemented status tracking for lost and found workflows
* Configured cloud deployment using Render and MongoDB Atlas
* Managed middleware for authentication, CORS, and request handling
* Organized backend using controllers, models, middleware, and routes

---

# 📂 Project Structure

```bash
FoundItPlus/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── utils/
│   │   └── assets/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── utils/
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the `backend/` directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

# 🔌 API Endpoints

## Authentication

| Method | Endpoint             | Description                |
| ------ | -------------------- | -------------------------- |
| POST   | `/api/auth/register` | Register a new user        |
| POST   | `/api/auth/login`    | Login existing user        |
| GET    | `/api/auth/profile`  | Get logged in user profile |

## Lost & Found Items

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/items`     | Fetch all items         |
| POST   | `/api/items`     | Create new item post    |
| GET    | `/api/items/:id` | Get single item details |
| PUT    | `/api/items/:id` | Update item details     |
| DELETE | `/api/items/:id` | Delete item post        |

## Search & Status

| Method | Endpoint                | Description         |
| ------ | ----------------------- | ------------------- |
| GET    | `/api/items/search`     | Search items        |
| GET    | `/api/items/filter`     | Filter items        |
| PATCH  | `/api/items/:id/status` | Update claim status |



# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/foundit-plus.git
cd foundit-plus
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:8000
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```


# 📌 Future Improvements

* AI-based image matching
* Real-time notifications
* Chat system between users
* Admin moderation dashboard
* Advanced search and sorting
* Email notifications for matching items

---

# 👩‍💻 Built By

Shubhra Varshney
Akshat Saxena


