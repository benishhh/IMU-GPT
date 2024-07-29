"use client"

import React, { useState } from 'react';
import Chat from '@/components/chat/Chat';



const ChatDetail = ({ params }: { params: { id: string } }) => {

  return (
    <>
      <div className="flex h-full">
        <div className="flex-1 h-full overflow-hidden">
          <Chat chatId={params.id} />
        </div>
      </div>
    </>
  );
};

export default ChatDetail;
