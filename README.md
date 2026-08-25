# Online Examination and Assessment Portal

A full-stack web application for conducting secure online examinations, automatically evaluating student submissions, managing educational tutorials, and supporting communication between students and administrators.

The project follows a three-tier architecture with a React.js frontend, Node.js/Express.js backend, and MongoDB database. Authentication and role-based authorization are implemented using JWT, while passwords are protected using bcrypt.

## Description

The **Online Examination and Assessment Portal** is designed to replace or reduce manual examination activities by providing a centralized digital platform for students and administrators.

Students can register, log in, view available examinations, take timed assessments, submit answers, access video tutorials, update their profiles, and send inquiries. Administrators can manage students, create examinations, publish tutorial resources, and control protected administrative functions.

After a student submits an examination, the backend evaluates the answers automatically, stores the result in MongoDB, and sends a result notification through email.

---

## Key Features

### Student Module
- Student registration and login
- JWT-based protected access
- Student profile update
- View available examinations
- View examination duration and description
- Take multiple-choice examinations
- Live examination countdown timer
- Automatic submission when the timer reaches zero
- Automatic evaluation and score calculation
- Access video tutorials
- Send helpdesk/support inquiries
- Receive examination result notification by email

### Administrator Module
- Secure administrator authentication
- View registered students
- Remove student accounts
- Create and publish examinations
- Add questions, options, correct answers, and marks
- Upload/publish tutorial resources
- Manage academic resources through protected APIs

### Security Features
- Password hashing with bcrypt
- JWT authentication
- Role-based authorization for student/admin operations
- Protected frontend routes
- Protected backend API endpoints
- Correct answers are hidden from students when an examination is retrieved
- Environment variables for database, JWT, and email configuration
- CORS support

---

## Objectives

1. Develop a user-friendly and responsive online examination platform.
2. Automate examination submission and evaluation.
3. Provide secure authentication and role-based authorization.
4. Reduce manual work involved in examination management.
5. Store examination, user, and submission data centrally.
6. Provide timed assessments with automatic submission.
7. Improve result processing and communication through automated email notifications.
8. Provide learning support through tutorial resources.
9. Enable students to communicate with administrators through an inquiry system.
10. Build a scalable foundation for future analytics and assessment features.

---

## Technology Stack

| Layer | Technologies |
|---|---|
| Frontend | React.js, JavaScript (ES6+), HTML5, CSS3 |
| UI/Build | Vite |
| Routing | React Router |
| API Communication | Axios |
| Backend | Node.js, Express.js |
| API Architecture | RESTful API |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JSON Web Token (JWT) |
| Password Security | bcryptjs |
| Email Service | Nodemailer, Gmail SMTP |
| Middleware | CORS, Express JSON middleware |
| Development | VS Code, Git, GitHub |
| API Testing | Postman |

---

## System Architecture

The application uses a **three-tier architecture**:

```text
+-----------------------------+
|        Frontend Layer       |
|     React.js + Vite         |
| React Router + Axios        |
+-------------+---------------+
              |
              | HTTP / REST API
              v
+-----------------------------+
|         Backend Layer       |
| Node.js + Express.js        |
| Controllers + Routes        |
| JWT + bcrypt + Middleware   |
+-------------+---------------+
              |
              | Mongoose
              v
+-----------------------------+
|        Database Layer       |
|          MongoDB            |
| Users | Exams | Submissions |
| Tutorials                  |
+-----------------------------+

Additional Service:
Backend ---> Nodemailer/Gmail SMTP ---> Student / Recipient Email
```

---

## Project Structure

```text
online-examination-portal/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── examController.js
│   ├── inquiryController.js
│   └── tutorialController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Exam.js
│   ├── Submission.js
│   └── Tutorial.js
│
├── routes/
│   └── apiRoutes.js
│
├── utils/
│   └── emailService.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── seed-admin.js
├── server.js
├── package.json
└── .env
```

---

## Core Modules

### 1. Authentication Module

The authentication module manages registration and login.

**Registration flow:**

```text
User enters registration details
          ↓
Backend checks existing email
          ↓
Password is hashed using bcrypt
          ↓
User record is stored in MongoDB
          ↓
Registration successful
```

**Login flow:**

```text
User enters email + password
          ↓
Backend finds user
          ↓
bcrypt verifies password
          ↓
JWT token is generated
          ↓
Frontend stores authentication data
          ↓
User accesses role-specific dashboard
```

---

### 2. Role-Based Access Control

The system supports two roles:

- `student`
- `admin`

JWT stores the authenticated user's identity and role. The backend middleware verifies the token and checks whether the user's role is permitted to access the requested endpoint.

Example:

```text
Student
  └── Student Dashboard
      ├── View Exams
      ├── Take Exam
      ├── Tutorials
      └── Inquiry

Admin
  └── Admin Dashboard
      ├── Manage Students
      ├── Create Exams
      └── Publish Tutorials
```

---

## Examination Workflow

```text
Admin Login
    ↓
Create Examination
    ↓
Add Questions + Options + Correct Answers + Marks
    ↓
Exam Stored in MongoDB
    ↓
Student Login
    ↓
View Available Exams
    ↓
Open Examination
    ↓
Backend sends questions without exposing answer keys
    ↓
Countdown Timer Starts
    ↓
Student Selects Answers
    ↓
Student Submits
    OR
Timer Reaches Zero
    ↓
Automatic Submission
    ↓
Backend Compares Answers
    ↓
Score + Total Marks Calculated
    ↓
Submission Stored in MongoDB
    ↓
Result Email Sent
```

---

## Examination Evaluation Mechanism

Each question contains:

- Question text
- Multiple options
- Correct option index
- Marks

When a student submits an examination, the backend:

1. Retrieves the original examination from MongoDB.
2. Reads the submitted answers.
3. Compares each selected option with the stored correct option.
4. Adds the question's marks when the answer is correct.
5. Calculates the total marks.
6. Stores the student's submission.
7. Sends the result through the configured email service.

### Example

```text
Question 1 → Correct → +1
Question 2 → Incorrect → +0
Question 3 → Correct → +1
Question 4 → Incorrect → +0

Score = 2
Total Marks = 4
Percentage = 50%
```

The evaluation is performed on the **backend**, so students do not receive the correct answers from the student-facing examination API.

---

## Timed Examination Mechanism

The examination duration is stored in minutes.

When the student opens an examination:

```text
Exam Duration
     ↓
Converted to Seconds
     ↓
Countdown Timer Starts
     ↓
Student Answers Questions
     ↓
Time = 0
     ↓
Automatic Submission
```

Students can also submit manually before the timer expires.

---

## Tutorial / Learning Resource Workflow

Administrators can publish tutorial resources containing a title, description, and video URL.

```text
Admin
  ↓
Create Tutorial
  ↓
Tutorial stored in MongoDB
  ↓
Student requests tutorials
  ↓
Backend returns available resources
  ↓
Student opens video resource
```

---

## Inquiry / Communication Mechanism

Authenticated students can send inquiries to a specified recipient email.

```text
Student
  ↓
Enter recipient + subject + message
  ↓
Authenticated API request
  ↓
Backend validates request
  ↓
Nodemailer / Gmail SMTP
  ↓
Inquiry delivered to recipient
```

---

## REST API Endpoints

Base backend URL during local development:

```text
http://localhost:5000
```

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| POST | `/api/auth/register` | Public | Register user |
| POST | `/api/auth/login` | Public | Authenticate user |
| PUT | `/api/auth/update-password` | Current implementation | Update password |
| GET | `/api/students` | Admin | Get students |
| DELETE | `/api/students/:id` | Admin | Delete student |
| PUT | `/api/students/update-profile` | Student | Update profile |
| POST | `/api/exams` | Admin | Create examination |
| GET | `/api/exams` | Authenticated | Get examination list |
| GET | `/api/exams/:id` | Authenticated | Get examination details |
| POST | `/api/exams/submit/:id` | Student | Submit examination |
| POST | `/api/tutorials` | Admin | Publish tutorial |
| GET | `/api/tutorials` | Authenticated | Get tutorials |
| POST | `/api/inquiry` | Authenticated | Send inquiry |

---

## Database Design

### User

Stores student and administrator account information.

```text
User
├── name
├── email
├── password
├── role
├── createdAt
└── updatedAt
```

### Exam

Stores examination details and questions.

```text
Exam
├── title
├── description
├── duration
├── questions[]
│   ├── questionText
│   ├── options[]
│   ├── correctOption
│   └── marks
├── createdBy
├── createdAt
└── updatedAt
```

### Submission

Stores a student's submitted answers and evaluation.

```text
Submission
├── examId
├── studentId
├── answers[]
│   ├── questionId
│   └── selectedOption
├── score
├── totalMarks
├── createdAt
└── updatedAt
```

### Tutorial

Stores educational video/tutorial resources.

```text
Tutorial
├── title
├── description
├── videoUrl
├── uploadedBy
├── createdAt
└── updatedAt
```

---

## How to Run the Project

### Prerequisites

Install the following:

- Node.js
- npm
- MongoDB or MongoDB Atlas
- Git
- A Gmail account/app password if email notifications are required

### 1. Extract and open the project

```bash
cd online-examination-portal
```

### 2. Install backend dependencies

```bash
npm install
```

### 3. Install frontend dependencies

```bash
cd frontend
npm install
cd ..
```

### 4. Configure environment variables

Create or update the backend `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_jwt_secret
SYSTEM_EMAIL=your_email@gmail.com
SYSTEM_EMAIL_PASSWORD=your_gmail_app_password
```

> Do not commit `.env` or real credentials to GitHub. Use a Gmail App Password rather than exposing your normal Gmail password.

### 5. Start the backend

From the project root:

```bash
npm start
```

The backend will run on:

```text
http://localhost:5000
```

### 6. Start the frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Vite will normally provide a local URL similar to:

```text
http://localhost:5173
```

Open the displayed URL in your browser.

---

## Creating an Administrator Account

The project contains `seed-admin.js` for administrator seeding.

Before using it, review the script and replace any development credentials with secure credentials or, preferably, modify the script to read administrator credentials from environment variables.

Run:

```bash
node seed-admin.js
```

After the administrator account is created, use the admin credentials to access the administrator dashboard.

---

## Typical User Workflow

### Administrator

```text
Login
  ↓
Admin Dashboard
  ↓
View / Manage Students
  ↓
Create Examination
  ↓
Publish Tutorial
  ↓
Students access published content
```

### Student

```text
Register
  ↓
Login
  ↓
Student Dashboard
  ↓
View Available Exams
  ↓
Start Exam
  ↓
Answer Questions
  ↓
Submit / Auto-submit
  ↓
Automatic Evaluation
  ↓
Result Email
```

---

## Security Mechanism

The application uses multiple layers of protection:

### Password Security

Passwords are hashed using `bcryptjs` before being stored in MongoDB.

```text
Plain Password
      ↓
bcrypt Hashing
      ↓
Hashed Password
      ↓
MongoDB
```

### JWT Authentication

After successful login, the server generates a JWT containing the user's identity and role.

The frontend sends the token in the request header:

```text
Authorization: Bearer <JWT_TOKEN>
```

The backend middleware verifies the token before allowing protected operations.

### Role Authorization

Protected routes can restrict access based on role.

For example:

```text
Admin-only
    ↓
Create Exam
Delete Student
Publish Tutorial

Student-only
    ↓
Take Exam
Update Profile
Submit Exam
```

### Answer-Key Protection

When examination data is requested by a student, the backend removes the `correctOption` values before returning the questions. This prevents the frontend from receiving the answer key before submission.

---

## Frontend Routing

The React application uses React Router for navigation.

Important routes include:

```text
/                     → Home
/login                → Login
/register             → Registration
/admin-dashboard      → Admin Dashboard
/student-dashboard    → Student Dashboard
/take-exam/:examId    → Examination Interface
```

Protected routes use the `ProtectedRoute` component to restrict access based on authentication and role.

---

## API Communication

Axios is used by the React frontend to communicate with the Express backend.

Example flow:

```text
React Component
      ↓
Axios HTTP Request
      ↓
Express REST API
      ↓
Authentication Middleware
      ↓
Controller
      ↓
Mongoose
      ↓
MongoDB
      ↓
JSON Response
      ↓
Axios
      ↓
React UI
```

---

## Development Commands

### Backend

```bash
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Frontend production build

```bash
npm run build
```

### Frontend preview

```bash
npm run preview
```

### Frontend linting

```bash
npm run lint
```

---

## Future Enhancements

The current system provides the core examination workflow and can be extended with:

- Detailed student performance analytics
- Exam history and result dashboard
- Admin result monitoring
- Question bank management
- Randomized question generation
- Randomized answer options
- Multiple examination types
- Negative marking
- Certificate generation
- Advanced anti-cheating mechanisms
- Real-time notifications
- Search and filtering
- Pagination for large datasets
- Cloud deployment
- Automated testing and CI/CD
- More granular permission management
- Improved validation and error handling
- Centralized frontend API configuration using environment variables

---

## Limitations / Development Notes

- The current frontend uses backend URLs directly in several components; production deployment should move these URLs to environment-based configuration.
- Email functionality requires valid SMTP/Gmail configuration.
- The current examination model is primarily designed around multiple-choice questions.
- The application does not currently implement advanced proctoring or anti-cheating functionality.
- Production deployment should use HTTPS and secure secret management.
- The administrator seeding script should not contain permanent real credentials.

---

## Deployment Overview

The application can be deployed using a separate frontend/backend architecture.

```text
User Browser
     |
     v
Frontend Hosting
(React + Vite)
     |
     | HTTPS REST API
     v
Backend Hosting
(Node.js + Express)
     |
     +------> MongoDB Atlas
     |
     +------> Gmail SMTP
```

Suitable deployment platforms can include services such as Vercel for the frontend and a Node.js-compatible hosting provider for the backend, with MongoDB Atlas used as the cloud database.

---

## Project Benefits

- Reduces manual examination workload
- Provides centralized examination management
- Enables faster automatic evaluation
- Improves accessibility for students
- Provides secure role-based access
- Reduces manual result-processing errors
- Supports digital learning resources
- Provides automated email communication
- Creates a foundation for scalable online assessment

---

## License

This project is licensed under **MIT License**

---

## Author

**SRINJOY SIL**
