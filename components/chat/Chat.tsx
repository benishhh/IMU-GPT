"use client"
import React, { useState, useEffect, useRef } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

interface ChatProps {
  chatId: string;
}

const Chat: React.FC<ChatProps> = ({ chatId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wczytaj dane czatu na podstawie chatId (tutaj na razie symulujemy dane)
    setMessages([
      { id: 1, text: `This is chat ${chatId}. How can I help you today?`, sender: 'bot' },
    ]);
  }, [chatId]);

  const predefinedResponses = [
    'I can help with that!',
    'Can you provide more details?',
    'That sounds interesting!',
    'Let me look into that for you.',
    'Can you clarify your question?'
  ];

  const addMessage = (message: string) => {
    setMessages(prevMessages => [
      ...prevMessages,
      { id: prevMessages.length + 1, text: message, sender: 'user' },
    ]);
    // Simulate bot response with a random predefined response
    setTimeout(() => {
      const randomResponse = predefinedResponses[Math.floor(Math.random() * predefinedResponses.length)];
      setMessages(prevMessages => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: randomResponse, sender: 'bot' },
      ]);
    }, 1000);
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        <MessageList messages={messages} />
        <div ref={messagesEndRef} />
      </div>
      <div className="flex-shrink-0 p-4 border-t border-gray-300">
        <MessageInput onSend={addMessage} />
      </div>
    </div>
  );
};

export default Chat;
