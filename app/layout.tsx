import '$styles/index.css';
import '$styles/App.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Audea',

  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },

  themeColor: '#030711',

  generator: 'Audea',
  applicationName: 'Audea',
  referrer: 'origin-when-cross-origin',
  keywords: ['Audea', 'Audea Landing Page', 'Audea Landing Page'],
  authors: [{ name: 'Aldi Megantara A' }],
  creator: 'Aldi Megantara A',
  publisher: 'Aldi Megantara A',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: 'Audea',
    description: 'Transform your messy thoughts into structured notes.',
    url: 'https://app.audea.id',
    siteName: 'Audea',
    images: [
      {
        url: 'https://app.audea.id/meta.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Audea',
    description: 'Transform your messy thoughts into structured notes.',
    siteId: '1467726470533754880',
    creator: '@Audea_app',
    creatorId: '1467726470533754880',
    images: ['https://app.audea.id/meta.jpg'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/manifest/icons/180x180.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/manifest/icons/180x180.png',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body>{children}</body>
    </html>
  );
}
