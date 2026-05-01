# Secure_Login_System
This project is a secure login and user activity monitoring system developed for DS Technologies. It allows users to register and log in safely, tracks login activity, and helps administrators detect suspicious behavior, manage user access, and improve system security through a simple analytics dashboard.


**Overview**

This project is a simple and secure user authentication system developed for a software startup called DS Technologies. It not only allows users to register and log in but also provides an admin dashboard to monitor user activity and improve system security.

**Features**
Secure user registration and login
Password encryption using hashing
Account lock after multiple failed login attempts
User activity tracking (login count)
Admin dashboard to monitor users
Filter users based on activity (high usage, locked accounts, etc.)
Use Case

**This system is useful for organizations such as:**
Companies – to monitor employee system usage
Colleges – to track student portal activity
Applications – to analyze user engagement
It helps administrators detect suspicious login behavior and manage user access effectively.

**Technologies Used**
Node.js
Express.js
MongoDB
JavaScript (Frontend & Backend)
HTML & CSS

**How to Run the Project**
**Install dependencies:**
npm install
Start MongoDB (make sure it is running)
Run the server:
node server.js

**Project Flow**
User registers → Logs in →
System tracks login →
Admin views analytics dashboard →
Admin filters users and monitors activity

**Future Improvements**
Email alerts for suspicious activity
Role-based access control (admin/user)
Deployment on cloud (AWS)
Advanced analytics (daily trends, graphs)

**Conclusion**
This project combines authentication, security, and analytics into a single system. It helps in preventing unauthorized access while also providing useful insights about user behavior, making it a practical solution for real-world applications.
