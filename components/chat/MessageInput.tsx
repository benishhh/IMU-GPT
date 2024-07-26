import { ArrowUp } from 'lucide-react';
import React, { useState } from 'react';

interface MessageInputProps {
  onSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="flex-1 p-2 border border-gray-300 rounded-lg"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSend();
          }
        }}
      />
      <button
        className="ml-2 p-2 bg-slate-700 text-white rounded-full flex items-center justify-center h-10 w-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
        onClick={handleSend}
      >
        <ArrowUp className="h-5 w-5"/>
      </button>
    </div>
  );
};

export default MessageInput;
