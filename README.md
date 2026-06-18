MERN Task 3 - Authentication & Protected Routes

Objective

Implement user authentication and authorization using JWT in a MERN Stack application.

Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- JWT (jsonwebtoken)
- bcryptjs

Features

- User Registration
- User Login
- Password Hashing using bcryptjs
- JWT Token Generation
- Protected Routes
- Dashboard Access Control
- Logout Functionality

Project Structure

backend

- server.js
- package.json

frontend

- pages
  - Register.jsx
  - Login.jsx
  - Dashboard.jsx
- components
  - ProtectedRoute.jsx

Installation

Backend

cd backend
npm install
npm start

Frontend

cd frontend
npm install
npm run dev

Authentication Flow

1. User registers with name, email, and password.
2. Password is hashed before storing in MongoDB.
3. User logs in using email and password.
4. JWT token is generated and stored in localStorage.
5. Protected routes verify authentication.
6. Unauthorized users are redirected to the Login page.

Author

Joshitha