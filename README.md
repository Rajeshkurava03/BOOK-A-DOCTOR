# 🏥 BOOK-A-DOCTOR

A Full Stack **MERN (MongoDB, Express.js, React.js, Node.js)** web application that allows users to book doctor appointments online. The application includes separate dashboards for **Users**, **Doctors**, and **Admins** with secure JWT authentication and appointment management.

> Developed as part of the **Skill Wallet MERN Stack Internship Project**.

---

# 📌 Features

## 👤 User Module

- User Registration
- User Login with JWT Authentication
- User Dashboard
- Apply as Doctor
- View Approved Doctors
- Book Doctor Appointments
- View Appointment History

---

## 👨‍⚕️ Doctor Module

- Doctor Dashboard
- View Appointment Requests
- Approve Appointments
- Reject Appointments

---

## 👨‍💼 Admin Module

- Admin Dashboard
- View Doctor Applications
- Approve Doctor Applications
- Manage Doctors

---

## 🔐 Authentication

- JWT Authentication
- Password Hashing using bcrypt.js
- Protected Routes
- Secure Login System

---

# 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- Bootstrap
- Ant Design

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- JSON Web Token (JWT)
- bcrypt.js

---

# 📂 Project Structure

```
BOOK-A-DOCTOR
│
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── routes
│   ├── schemas
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Rajeshkurava03/BOOK-A-DOCTOR.git
```

## Go to Project Folder

```bash
cd BOOK-A-DOCTOR
```

---

## Install Frontend Dependencies

```bash
cd client
npm install
```

---

## Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# ▶️ Run Backend

```bash
cd server
npm start
```

Backend runs on:

```
http://localhost:8000
```

---

# ▶️ Run Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=8000

MONGO_DB=YOUR_MONGODB_CONNECTION_STRING

JWT_KEY=YOUR_SECRET_KEY
```

---

# 🚀 Project Workflow

### User

- Register
- Login
- Apply as Doctor
- View Doctors
- Book Appointment
- View Appointment Status

### Admin

- Login
- View Doctor Applications
- Approve Doctor

### Doctor

- Login
- View Appointment Requests
- Approve / Reject Appointments

---

# 📸 Screenshots

You can add screenshots here after uploading them.

- 🏠 Home Page
- 🔐 Login Page
- 📝 Registration Page
- 👤 User Dashboard
- 👨‍⚕️ Doctor Dashboard
- 👨‍💼 Admin Dashboard
- 📅 Book Appointment
- 📋 Appointment History

---

# 📚 What I Learned

During this project, I gained hands-on experience with:

- MERN Stack Development
- REST API Development
- MongoDB Database Integration
- JWT Authentication
- Password Encryption
- CRUD Operations
- React Routing
- Axios API Calls
- Express Middleware
- Git & GitHub Version Control

---

# 🔮 Future Enhancements

- Notification System
- Medical Document Upload
- Doctor Profile Management
- User Profile Management
- Search Doctors
- Responsive Design
- Email Notifications
- Online Payment Integration

---

# 👨‍💻 Author

**Rajesh Kurava**

GitHub: https://github.com/Rajeshkurava03

---

# 📜 License

This project was developed for educational purposes as part of the **Skill Wallet MERN Stack Internship Program**.

---

⭐ **If you found this project useful, please consider giving it a Star on GitHub!**
