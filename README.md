# 🔐 CNS Project - Cryptographic Storage System

## 📌 Overview
This project is developed as part of **Computer Network Security (CNS)** coursework.  
It implements a **secure vault system** where users can:
- Register and manage accounts
- Store sensitive information securely
- Retrieve encrypted data
- Use a web-based interface (HTML + CSS frontend)
- Communicate with a **Node.js backend** for storage and retrieval

---

## 📂 Project Structure
CNS/
│── CNS/ # Frontend

│ ├── dashboard.html

│ ├── index.html

│ ├── register.html

│ ├── retrieve.html

│ ├── store.html

│ └── styles.css

│

│── cryptx-backend/ # Backend (Node.js)

│ ├── server.js

│ ├── package.json

│ ├── package-lock.json

│ └── models/

│ ├── User.js

│ └── Vault.js


---

## ⚙️ Requirements
- **Frontend**: Any modern browser  
- **Backend**:
  - Node.js (>= 14.x)
  - MongoDB (for user & vault data storage)

---

## 🚀 WORKING & Installation

```bash
### 1️⃣ Clone the Repository

git clone https://github.com/your-username/CNS-Project.git
cd CNS-Project/CNS/cryptx-backend


### 2️⃣ Install Dependencies

npm install

### 3️⃣ Configure MongoDB

Ensure MongoDB is running locally or use a cloud instance (MongoDB Atlas).

Update the MongoDB connection string inside server.js.

### 4️⃣ Run the Backend Server

node server.js

Server will start at http://localhost:5000 (or configured port).

### 5️⃣ Open the Frontend

Register/Login and test secure storage.


Open index.html in a browser.


✨ Features

🔑 User authentication & registration

🔒 Secure data storage & retrieval

🌐 Web-based UI with HTML & CSS

⚡ Fast and lightweight Node.js backend

🗄 MongoDB database integration


👨‍💻 Contributors

MEENUGU HANI SATWIK
