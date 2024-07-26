"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';

interface Chat {
  id: number;
  title: string;
  summary: string;
  date: string;
}

const chatHistory: Chat[] = [
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

const Sidebar: React.FC<{ isOpen: boolean, toggleSidebar: () => void }> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed md:relative inset-y-0 left-0 top-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 flex flex-col h-screen md:h-full w-64 bg-gray-100 dark:bg-gray-800 z-50 md:z-40`}>
      <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
        <h2 className="text-lg font-bold">Chats</h2>
        <div className="flex space-x-2">
          <Button onClick={toggleSidebar} className="md:hidden text-sm py-1 px-2 rounded-2xl">Close</Button>
          <Button className="text-sm py-1 px-2 md:text-base md:py-2 md:px-4 rounded-2xl">New Chat</Button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ScrollArea className="h-full">
          <ul>
            {chatHistory.map((chat) => (
              <li key={chat.id} className="p-0 border-c dark:border-gray-700">
                <Link href={`/chat/${chat.id}`} passHref>
                <Card className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">{chat.title}</CardTitle>
                    <CardDescription className="text-xs text-gray-500">{chat.summary}</CardDescription>
                    {/* <CardDescription className="text-xs text-gray-400">{chat.date}</CardDescription> */}
                  </CardHeader>
                </Card>
                </Link>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Sidebar;
