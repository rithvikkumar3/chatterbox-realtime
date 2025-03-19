💬 Chatterbox - Real-time Chat Application<br>
Chatterbox is a feature-rich real-time chat application with:<br>

✅ Secure authentication using JWT<br>
🔍 User search functionality<br>
🟢 Online/offline status indicators<br>
⚡ Real-time messaging with Socket.io<br>

Built with:<br>

🛠️ Frontend: React.js, Tailwind CSS, DaisyUI <br>
🚀 Backend: Node.js, Express.js, Socket.io<br>
💾 Database: MongoDB Atlas (NoSQL)<br>

🚀 Tech Stack:<br>

Technology<br>     
React.js	<br>
Tailwind CSS<br>
DaisyUI	Pre-styled<br>
Node.js <br>
Express.js<br>
MongoDB Atlas	NoSQL<br> 
JWT <br>
Socket.io<br> 

🔥 Features:<br>

🔒 JWT Authentication: Secure login and registration system.<br>
🔍 User Search: Find and chat with registered users.<br>
🟢 Online Status Indicators: See who is online/offline.<br>
⚡ Real-time Messaging: Instant message delivery using Socket.io.<br>
💾 MongoDB Atlas: Store user data and chat history securely.<br>
🎨 Responsive UI: Stylish frontend using Tailwind CSS and DaisyUI.<br>

Installation Instructions<br>
Clone the Repository<br>
git clone <YOUR_GITHUB_REPO_URL><br>
cd chatterbox-realtime<br>

Install Dependencies<br>

For server:<br>
cd server<br>
npm install<br>
For client:<br>
cd ../client<br>
npm install<br>
Set Up Environment Variables<br>
Create a .env file in the server folder with the following:<br>


MONGO_URI=<your_mongodb_atlas_uri><br>
JWT_SECRET=<your_jwt_secret><br>
PORT=5000<br>

Run the Project<br>

Start the server:<br>
cd server<br>
npm run dev<br>
Start the client:<br>
cd client<br>
npm run dev<br>
Access the App<br>
Open http://localhost:5173 in your browser.<br>

Build for Production (Optional)<br>
For the client:<br>
cd client<br>
npm run build<br>




