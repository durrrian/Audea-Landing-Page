/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        'blackPrimary': '#080A19',
        'lightBlue': '#ABC7FF',
        'linierBlue': '#94A3B8',
        'topCard': '#536976',
        'linierPurple': '#455EB5',
        'linierMidBlue': '#4A92C8',
        'linierEndBlue': '#1F7FC7',
        'linierGray': '#536976',
        'linierEndGray': '#292E49',
        'linierFooterTop': 'rgba(148, 163, 184, 1)',
        'linierFooterBottom': 'rgba(148, 163, 184, 0.7)',
        'linierTransparentGray': 'rgba(148, 163, 184, 0.4)',
        'linierTransparentBlue': 'rgba(1, 85, 147, 0.7)',
        'linierTitleTop': 'rgba(253, 251, 255, 1)',
        'linierTitleBottom': 'rgba(253, 251, 255, 0.7)',
        'linierLineSide': 'rgba(226, 232, 240, 0.005)',
        'linierLineMid': 'rgba(226, 232, 240, 0.1)',
        'linierBgPricingTop': 'rgba(36, 37, 56, 1)',
        'linierBgPricingVia': 'rgba(27, 28, 46, 0.66)',
        'linierBgPricingBottom': 'rgba(23, 23, 40, 0)',
        'borderPricing': '#E2E8F0',
        'borderPricingOn': '#6943D1',
        'whitePricing': '#F7F8F8',
        'linierStartBtn': '#2D00DE',
        'linierMidBtn': '#95008A',
        'linierEndBtn': '#EB0000',
      },
      height: {
        '500px': '500px',
        '550px': '550px'
      },
      width: {
        '300px': '300px'
      }
    },
    borderWidth: {
      '1px': '1px',
      '1012px': '1012px',
      '516px': '516px',
      '550px': '550px',
      '465px': '465px',
      '500px': '500px',
      '360px': '360px',
    },
  },
  plugins: [],
}

