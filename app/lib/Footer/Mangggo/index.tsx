import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['600'] });

export default function Mangggo() {
  return (
    <a
      className={`${inter.className} md:grid md:justify-self-end w-fit h-fit`}
      href="https://mangggo.id"
      target="_blank"
    >
      <svg
        viewBox="0 0 100 20"
        style={{
          height: '21px',
          width: '260px',
          marginTop: '0.5px',
          fontWeight: 'bold',
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor="#FBFF12" />
            <stop offset="95%" stopColor="#9FD356" />
          </linearGradient>
          <pattern
            id="wave"
            x="0"
            y="3"
            width="120"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              id="wavePath"
              d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
              mask="url(#mask)"
              fill="url(#gradient)"
            >
              <animateTransform
                attributeName="transform"
                begin="0s"
                dur="1.5s"
                type="translate"
                from="0,0"
                to="40,0"
                repeatCount="indefinite"
              ></animateTransform>
            </path>
          </pattern>
        </defs>
        <text
          textAnchor="middle"
          fontSize="1em"
          x="27px"
          y="16px"
          fill="url(#wave)"
          fillOpacity="1.0"
        >
          Built with joy by mangggo
        </text>
        <text
          textAnchor="middle"
          fontSize="1em"
          x="27px"
          y="16px"
          fill="url(#gradient)"
          fillOpacity="0.2"
        >
          Built with joy by mangggo
        </text>
      </svg>
    </a>
  );
}
