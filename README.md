
# React Real-Time Chat Application 💬

A real-time one-to-one chat application built with **React**, **Socket.IO**, **Node.js**, and **MongoDB (Mongoose)**. This application supports live messaging, emoji support, and user-friendly UI to simulate a modern chat experience.

## 🚀 Features

- 🔒 User authentication (optional to implement)
- 🗨️ One-to-One Real-Time Messaging using Socket.IO
- 😊 Emoji support in chat
- 📦 Backend powered by Node.js and Express
- 🧠 MongoDB (with Mongoose) for storing messages and user data
- 🧰 Modular and scalable codebase

## 🛠️ Tech Stack

### Frontend
- React.js
- Socket.IO Client
- Emoji Picker (e.g. `emoji-mart` or `react-emoji-picker`)

### Backend
- Node.js
- Express.js
- Socket.IO
- MongoDB with Mongoose

## 📁 Project Structure

```
/client         --> React frontend
/server         --> Node.js backend
  /models       --> Mongoose schemas
  /routes       --> API routes
  /sockets      --> Socket.IO handlers
```

## ⚙️ Installation

### 1. Clone the repo

```bash
git clone https://github.com/ranjeetvit2012/react-chat-socket.git
cd react-chat-socket
```

### 2. Install dependencies

#### For Backend
```bash
cd server
npm install
```

#### For Frontend
```bash
cd ../client
npm install
```

### 3. Start the development server

#### Start Backend
```bash
cd server
npm run dev
```

#### Start Frontend
```bash
cd client
npm start
```

### 4. Environment Variables

Create a `.env` file in the `server/` directory and define:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

## 📸 Screenshots

![Chat Window](https://github.com/ranjeetvit2012/react-chat-socket/blob/master/chat.png?raw=true)

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
