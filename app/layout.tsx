import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ApolloNextClient } from './apollo';
import { ViewportProvider } from '@/context/Viewport';
import { DarkModeProvider } from '@/context/DarkMode';

const TTInterfaces = localFont({
  src: [
    {
      path: '../public/TTInterfaces/TTInterfaces-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/TTInterfaces/TTInterfaces-ThinItalic.woff2',
      weight: '100',
      style: 'italic',
    },

    {
      path: '../public/TTInterfaces/TTInterfaces-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/TTInterfaces/TTInterfaces-ExtraLightItalic.woff2',
      weight: '200',
      style: 'italic',
    },

    {
      path: '../public/TTInterfaces/TTInterfaces-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/TTInterfaces/TTInterfaces-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },

    {
      path: '../public/TTInterfaces/TTInterfaces-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/TTInterfaces/TTInterfaces-Italic.woff2',
      weight: '400',
      style: 'italic',
    },

    {
      path: '../public/TTInterfaces/TTInterfaces-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/TTInterfaces/TTInterfaces-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },

    {
      path: '../public/TTInterfaces/TTInterfaces-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/TTInterfaces/TTInterfaces-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },

    {
      path: '../public/TTInterfaces/TTInterfaces-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/TTInterfaces/TTInterfaces-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },

    {
      path: '../public/TTInterfaces/TTInterfaces-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/TTInterfaces/TTInterfaces-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },

    {
      path: '../public/TTInterfaces/TTInterfaces-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/TTInterfaces/TTInterfaces-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Audea',

  description: 'Transform your messy thoughts into structured notes.',

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
  authors: [{ name: 'Mangggo', url: 'https://mangggo.id' }],
  creator: 'Mangggo',
  publisher: 'Mangggo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: 'Audea',
    description: 'Transform your messy thoughts into structured notes.',
    url: 'https://audea.id',
    siteName: 'Audea',
    images: [
      {
        url: 'https://audea.id/meta.jpg',
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
    images: ['https://audea.id/meta.jpg'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/180x180.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/180x180.png',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloNextClient>
      <ViewportProvider>
        <DarkModeProvider>
          <html lang="en">
            <body className={TTInterfaces.className}>{children}</body>
          </html>
        </DarkModeProvider>
      </ViewportProvider>
    </ApolloNextClient>
  );
}
