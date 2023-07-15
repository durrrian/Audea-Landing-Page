'use client';

import moment from 'moment';
import { IGetContent } from '../getContent';
import ActionMenu from './ActionMenu';
import Toast from '@/components/Toast';
import { Roboto, Open_Sans, Merriweather } from 'next/font/google';
import { useState } from 'react';
import MadeWithAudea from './MadeWithAudea';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400'] });

export default function Client({ content }: { content: IGetContent }) {
  const [font, setFont] = useState('');

  const parseContent: any[] = JSON.parse(content.gptObject);

  const createdAt = moment(content.createdAt).format('DD MMMM YYYY HH:mm');

  const renderFont = (font: string) => {
    if (font === 'roboto') {
      return roboto.className;
    } else if (font === 'open-sans') {
      return openSans.className;
    } else if (font === 'merriweather') {
      return merriweather.className;
    } else {
      return '';
    }
  };

  return (
    <main className="max-w-[1000px] mx-auto pb-20 mt-10 md:px-0 px-4 space-y-8">
      <h1 className="text-3xl font-bold">{content.title}</h1>

      <section className="w-full h-fit flex items-center justify-between flex-wrap">
        <p className="text-lg font-base">Shared @ {createdAt}</p>

        <ActionMenu
          url={`https://audea.id/@${content.username}/${content.generatedId}`}
          onFontChange={(font) => {
            setFont(font);
          }}
        />
      </section>

      <section className={`text-justify space-y-4 ${renderFont(font)}`}>
        {parseContent.map((v, i) => {
          if (v.type === 'heading_1') {
            return <h2 key={i}>{v.content}</h2>;
          } else if (v.type === 'heading_2') {
            return <h3 key={i}>{v.content}</h3>;
          } else if (v.type === 'paragraph') {
            return <p key={i}>{v.content}</p>;
          } else if (v.type === 'bulleted_list_item') {
            return <li key={i}>{v.content}</li>;
          } else {
            return <></>;
          }
        })}
      </section>

      <p className="hidden print:block print:text-blue-500">
        Create your own note from your audio using Audea now, at
        https://app.audea.id.
      </p>

      <MadeWithAudea username={content.username} />

      <Toast />
    </main>
  );
}
