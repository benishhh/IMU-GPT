import React from 'react';

interface MessageProps {
  message: {
    id: number;
    text: string;
    sender: 'user' | 'bot';
  };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
      <div
        className={`inline-block p-2 rounded-2xl ${message.sender === 'user' ? 'bg-slate-700 text-white' : 'bg-gray-200 text-black'
          }`}
        style={{ wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}
      >
        {message.text}
      </div>
    </div>
  );
};

export default Message;
