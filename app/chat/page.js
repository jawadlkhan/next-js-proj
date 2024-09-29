"use client";

import { useState } from 'react';

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Welcome to the chat!', email: 'admin@example.com' },
  ]);
  const [user] = useState({
    email: 'user@example.com', // This would be dynamically set in a real app
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Add the new message to the existing messages
      setMessages([...messages, { text: message, email: user.email }]);
      setMessage(''); // Clear the input field after sending the message
    }
  };

  const handleSignOut = () => {
    // Dummy sign out action
    alert('You have been signed out!');
    // Redirect to the login page or handle navigation here
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <h1 className="text-xl font-bold">Chat Room</h1>
        <button onClick={handleSignOut} className="bg-red-500 px-4 py-2 rounded">
          Sign Out
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded ${
              msg.email === user.email ? 'bg-blue-200 text-right' : 'bg-gray-300 text-left'
            }`}
          >
            <strong>{msg.email}: </strong> {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="flex p-4 bg-white border-t border-gray-300">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
          Send
        </button>
      </form>
    </div>
  );
}
