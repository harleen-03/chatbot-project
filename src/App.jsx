import { useState } from 'react'
import { ChatMessages } from './components/ChatMessages.jsx'
import { Chatbot } from 'supersimpledev'
import { ChatInput } from './components/ChatInput.jsx'
import { ChatMessage } from './components/ChatMessage.jsx'
import './App.css'

function App() { 
              const [chatMessages, setChatMessages]=useState([
                { message: "hello chatbot", sender: "user" },
                { message: "Hello! How can I help you?", sender: "robot" },
                { message: "can you get me todays date?", sender: "user" },
                { message: "Today is September 27", sender: "robot" }
            ]);
            // const chatMessages=array[0];
            // const setChatMessages=array[1];
        
        return (
          <div className="chatbot-container">
           
            <ChatMessages chatMessages={chatMessages} />
             <ChatInput 
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}/>
          </div>
        );
      }

export default App
