import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stream Deck Video Test 2',
  description: 'A premium product launch page for the Elgato Stream Deck+, featuring scroll-driven cinematic product reveal that showcases the macro pad\'s LCD keys, haptic feedback, and seamless workflow integration for creators.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0a0a0a', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
