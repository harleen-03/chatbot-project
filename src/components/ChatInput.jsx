import { useState } from "react";
import { Chatbot } from "supersimpledev";

export
function ChatInput({chatMessages, setChatMessages}){

            const [inputValue, setInputValue] = useState('');

            function sendInputMessage(event){
                setInputValue(event.target.value);
            }

            function sendMessage(){

                const newChatMessages= [ ...chatMessages,
                { message: inputValue, sender: "user" }];
                setChatMessages(newChatMessages);

               const response=Chatbot.getResponse(inputValue);
               setChatMessages([
                ...newChatMessages,
                { message: response, sender: "robot" }
               ]);
               setInputValue('');
            }

            return (
                <div className="chat-input-container">
                    <input placeholder="Send a message to chatbot" size="30" onChange={sendInputMessage}
                    value={inputValue}
                    class = "send-input"></input>
                    <button
                    onClick={sendMessage}
                    class = "send-button"
                    >Send</button>
                   
                </div>
            );
        }