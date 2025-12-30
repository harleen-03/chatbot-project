 import robotImage from '../assets/robot.png';
 import userImage from '../assets/user.png';    
 export function ChatMessage({message, sender})
        {
            // if(sender==="user")
            // {
            //     return(
            //         <div>
            //             {message}
            //             <img src="user.png" width="50"></img>
            //         </div>
            //     );
            // }
                return(
                    <div className={sender === 'user' ? 'user-message' : 'robot-message'}>
                        {sender === 'robot' && <img src={robotImage} width="50"></img>}
                        <div className="message-text">
                        {message}
                        </div>
                        {sender === 'user' && <img src={userImage} width="50"></img>}
                    </div>
                );
        }