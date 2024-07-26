import React from 'react';
import Message from './Message';

interface MessageListProps {
  messages: {
    id: number;
    text: string;
    sender: 'user' | 'bot';
  }[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex flex-col space-y-4">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
