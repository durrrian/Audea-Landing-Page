import { Metadata } from 'next';

const meta: Metadata = {
  metadataBase: new URL('https://audea.id'),

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
    url: '/',
    siteName: 'Audea',
    images: [
      {
        url: '/meta.jpg',
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
    images: ['/meta.jpg'],
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

export default meta;
