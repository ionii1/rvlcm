// src/app/layout.tsx

import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coming Soon',
  description: 'Under Construction',
  icons: {
    icon: '/images/fave.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}