# Employee Management System

## Overview
This Employee Management System is a web application developed as part of an internship screening assignment. It enables users to manage employee records efficiently, offering a user-friendly interface and robust backend functionalities.


![WhatsApp Image 2024-10-17 at 22 12 57_376c9d56](https://github.com/user-attachments/assets/9a11a99a-05c5-4aa5-846e-ec685fb73d3d)



## Purpose
The purpose of this project is to demonstrate my skills in full-stack development, including frontend and backend integration, as well as my ability to implement authentication and data management features.

## Features
- **User Authentication**: Secure login and registration functionalities.
- **Employee Management**: Create, read, update, and delete (CRUD) employee records.
- **Responsive Design**: Ensures usability across different devices.
- **Role-Based Access Control**: Differentiated access levels for administrators and regular users.

## Technologies Used
- **Frontend**: 
  - React
  - Axios for API calls
  - CSS/Bootstrap for styling
- **Backend**: 
  - Node.js
  - Express.js for routing
  - MongoDB for data storage
  - JSON Web Tokens (JWT) for secure authentication

## Setup Instructions

### Prerequisites
Ensure you have the following installed on your machine:
- Node.js (version 14 or above)
- MongoDB
- Docker (optional for containerization)

### Cloning the Repository
To get started, clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/EmployeeManagement.git
cd EmployeeManagement

EmployeeManagement/
│
├── client/                             # React frontend
│   ├── public/                         
│   ├── src/                            
│   │   ├── components/                 
│   │   │   ├── EmployeeForm.js         # React component for Employee Form
│   │   │   ├── EmployeeList.js         # React component for Employee List
│   │   │   └── Login.js                # React component for Login
│   │   ├── App.js                      # Main App component
│   │   └── index.js                    # Entry point for React
│   ├── Dockerfile                      # Dockerfile for frontend
│   └── package.json                    # Frontend dependencies
│
├── config/                             # Configuration files
│   └── db.js                           # MongoDB connection config
│
├── controllers/                        # Backend controllers
│   ├── authController.js               # Authentication (Login) controller
│   └── employeeController.js           # Employee CRUD controller
│
├── models/                             # Mongoose models
│   ├── Employee.js                     # Employee schema/model
│   └── User.js                         # User schema/model for login
│
├── routes/                             # API routes
│   ├── authRoutes.js                   # Authentication routes (login)
│   └── employeeRoutes.js               # Employee-related routes
│
├── middleware/                         # Express middleware
│   └── authMiddleware.js               # Middleware to protect routes with JWT
│
├── uploads/                            # Uploaded images will be stored here
│
├── .env                                # Environment variables (MongoDB URI, JWT secret)
├── .dockerignore                       # Ignore unnecessary files in Docker image
├── Dockerfile                          # Dockerfile for backend
├── docker-compose.yml                  # Docker Compose to manage backend, frontend, and MongoDB
├── package.json                        # Backend dependencies
├── server.js                           # Main server file for backend
└── README.md                           # Project documentation
