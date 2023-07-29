import './globals.css';
import type { Metadata } from 'next';
import { ApolloNextClient } from './apollo';
import { ViewportProvider } from '@/context/Viewport';
import { DarkModeProvider } from '@/context/DarkMode';
import meta from './meta';
import TTInterfaces from '@/fonts/TTInterfaces';

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloNextClient>
      <ViewportProvider>
        <DarkModeProvider>
          <html lang="en" suppressHydrationWarning={true}>
            <body className={TTInterfaces.className}>{children}</body>
          </html>
        </DarkModeProvider>
      </ViewportProvider>
    </ApolloNextClient>
  );
}
