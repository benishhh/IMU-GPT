// app/(main)/chat/[id]/page.tsx

import { useRouter } from 'next/router';
import React from 'react';

const chatHistory = [
  { id: 1, title: 'Rozmowa 1', summary: 'Dyskusja o projektach AI', date: '2024-07-01' },
  { id: 2, title: 'Rozmowa 2', summary: 'Pytania o Next.js', date: '2024-07-05' },
  { id: 3, title: 'Rozmowa 3', summary: 'Porada dotycząca TypeScript', date: '2024-07-10' },
  { id: 4, title: 'Rozmowa 4', summary: 'Optymalizacja wydajności w React', date: '2024-07-15' },
  { id: 5, title: 'Rozmowa 5', summary: 'Wprowadzenie do Docker i konteneryzacji', date: '2024-07-20' },
  { id: 6, title: 'Rozmowa 6', summary: 'Bezpieczeństwo aplikacji webowych', date: '2024-07-25' },
  { id: 7, title: 'Rozmowa 7', summary: 'Zaawansowane funkcje CSS', date: '2024-07-30' },
  { id: 8, title: 'Rozmowa 8', summary: 'Jak używać GraphQL w dużych projektach', date: '2024-08-04' },
  { id: 9, title: 'Rozmowa 9', summary: 'Zarządzanie stanem w aplikacjach Vue', date: '2024-08-09' },
  { id: 10, title: 'Rozmowa 10', summary: 'Machine Learning dla początkujących', date: '2024-08-14' },
];

const ChatDetail = ({ params }: { params: { id: string } }) => {
  const chat = chatHistory.find(chat => chat.id === parseInt(params.id, 10));

  if (!chat) {
    return <p>Chat not found</p>;
  }

  return (
    <div>
      <h1 className="text-2xl">{chat.title}</h1>
      <p>{chat.summary}</p>
    </div>
  );
};

export default ChatDetail;
