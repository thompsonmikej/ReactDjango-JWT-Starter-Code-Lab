# ReactDjango-JWT-Starter-Code-Lab

**Developed at devCodeCamp**

A robust full-stack starter codebase for building React + Django applications featuring JWT authentication, user registration, login, and protected backend endpoints. Includes a demo YouTube search clone and detailed examples for implementing role-based access.

---

## Description

This project provides a foundation for full-stack web apps with a React front end and Django REST backend. It features:

- A demo clone resembling YouTube search: users can search and retrieve video content through the client.
- Token-based authentication and authorization using JSON Web Tokens (JWT): secure endpoints that require a valid token.
- A fully functional register/login system built in React.
- Example Django backend (`cars` app) showing best practices for creating, securing, and accessing REST API endpoints with JWT.
- Guidance for setting up and enforcing user roles, both backend (Django) and frontend (React), for scalable access control.

---

## Features

- User registration and login with JWT authentication
- Secure, protected API endpoints requiring valid JWT tokens
- Search functionality simulating a YouTube-like experience
- React Router and conditional rendering based on authentication/roles
- Example Django app for studying protected resource implementation
- Code comments and resources guiding customization for user roles and permissions

---

## Technologies Used

- Django & Django REST Framework
- ReactJS
- Axios (HTTP requests)
- JWT Authentication (`djangorestframework-simplejwt`)
- CSS Flexbox for responsive layout

---

## Installation

1. **Clone the Repository**
    ```
    git clone https://github.com/thompsonmikej/ReactDjango-JWT-Starter-Code-Lab.git
    cd ReactDjango-JWT-Starter-Code-Lab
    ```

2. **Backend Setup (Django)**
    - Create a Python virtual environment and activate it.
    - Install Python requirements:
      ```
      pip install -r backend/requirements.txt
      ```
    - Create and configure the database.
    - Apply database migrations:
      ```
      python backend/manage.py migrate
      ```
    - Optionally, run the backend dev server:
      ```
      python backend/manage.py runserver
      ```

3. **Frontend Setup (React)**
    - Navigate to the frontend directory:
      ```
      cd frontend
      ```
    - Install npm dependencies:
      ```
      npm install
      ```
    - Start the React development server:
      ```
      npm start
      ```
    - The app will open at `http://localhost:3000`.

4. **Configuration**
    - Update API URLs and environment variables as needed in both frontend and backend.
    - Review the `cars` app and authentication-related files for best practices in setting up and protecting endpoints.

---

## Usage

- Register new users and log in via the React frontend.
- Use the search interface to interact with the demo video retrieval/cloning logic.
- Study the backend `cars` app to understand protected API endpoint patterns with JWT token validation.
- Implement and extend user roles for advanced access control, referencing the inline comments and suggested external guides.

---

## Challenges & Lessons Learned

- Integrated JWT authentication from backend to frontend for a seamless, stateful session experience.
- Designed secure register/login flows with robust validation.
- Explored practical implementation of protected, role-based API endpoints.
- Bridged real-world frontend needs (conditional rendering, protected routes) with backend authorization logic.

---

## Future Improvements

- Expand demo to include more real-world features (user profiles, commenting, favorites/playlists).
- Add more complex roles and permissions models (admin, editor, viewer).
- Implement robust unit and integration tests for both backend and frontend authentication flows.
- Provide detailed API documentation and usage examples.

---

## Author

Feel free to reach out or connect:

**Michael Thompson**  
https://www.linkedin.com/in/thompsonmikej  
