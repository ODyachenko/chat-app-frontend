import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReduxProvider from '@/redux/Provider';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: 'Next.js chat app',
  description: 'Chat app created by next.js and socket.io',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
