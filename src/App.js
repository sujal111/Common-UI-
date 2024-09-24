import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatBox from './components/ChatBox';
import Header from './components/Header'; // Import the new Header component
import './App.css';

import { PrimeReactProvider } from 'primereact/api';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    setMessages([...messages, { sender: 'User', text: message }]);
  };

  return (
    <PrimeReactProvider>
      <div className="app-container">
        <Header /> {/* Use the Header component here */}
        <div className="main-content">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="chat-container">
            <ChatBox messages={messages} onSend={handleSend} />
          </div>
        </div>
      </div>
    </PrimeReactProvider>
  );
};

export default App;
