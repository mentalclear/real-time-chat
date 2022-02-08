import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import socketIoClient from 'socket.io-client';
import { useUser } from '../auth';

export const ConversationPage = () => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [messageInputValue, setMessageInputValue] = useState('');
    const { id: conversationId } = useParams();
    const { user } = useUser();

    useEffect(() => {
        const establishSocketConnection = async () => {
            const socket = socketIoClient('http://127.0.0.1:8080', {
                query: { 
                    conversationId,  
                    token: await user.getIdToken(),
                }
            });

            setSocket(socket);  
            socket.on('heresYourConversation', conversation => {
                console.log('Initial messages loaded...');
                console.log(conversation);
                setMessages(conversation.messages);
            })         
        }

        if (user) {
            establishSocketConnection();
        }
        

        return () => socket.disconnect();
    }, []);



    const postMessage = async (text) => {
        // TODO
    }

    return (
        <div className="centered-container">
            {messages.map(message => (
                <div key={message._id} className="list-item">
                    <h3>{message.postedBy.name}</h3>
                    <p>{message.text}</p>
                </div>
            ))}
            <div className="input-form">
                <input
                    type="text"
                    placeholder="Enter a new message here"
                    value={messageInputValue}
                    onChange={e => setMessageInputValue(e.target.value)} />
                <button onClick={postMessage}>Send</button>
            </div>
        </div>
    );
}