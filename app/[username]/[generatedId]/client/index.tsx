'use client';

import moment from 'moment';
import { IGetContent } from '../getContent';
import ActionMenu from './ActionMenu';
import Toast from '@/components/Toast';
import { Roboto, Open_Sans, Merriweather } from 'next/font/google';
import { useState } from 'react';
import MadeWithAudea from './MadeWithAudea';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import cn from '@/utils/cn';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400'] });

type Content = {
  heading: string | null;
  items: {
    type: 'paragraph' | 'bulleted_list_item';
    content: string;
  }[];
};

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

  const finalGroupedContent: Content[] = [];
  let currentGroup: Content | undefined;

  for (const item of parseContent) {
    if (item.type === 'title') {
      continue; // Skip the title item
    }

    if (item.type.startsWith('heading')) {
      currentGroup = { heading: item.content, items: [] };
      finalGroupedContent.push(currentGroup);
    } else {
      if (!currentGroup) {
        currentGroup = { heading: null, items: [] };
        finalGroupedContent.push(currentGroup);
      }
      currentGroup.items.push(item);
    }
  }

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

      <section className={`text-justify space-y-8 ${renderFont(font)}`}>
        {finalGroupedContent.map((v, i) => {
          const isHeading =
            v.heading === 'Summary' ||
            v.heading === 'Additional Info' ||
            v.heading === 'Ringkasan' ||
            v.heading === 'Info Tambahan';

          return (
            <section key={i} className="space-y-2 text-justify">
              {v.heading && (
                <h3
                  className={
                    isHeading ? 'text-2xl font-bold' : 'text-xl font-medium'
                  }
                >
                  {v.heading}
                </h3>
              )}
              {v.items.map((v, k) => {
                if (v.type === 'paragraph') {
                  return <p key={`${k}-heading-${i}`}>{v.content}</p>;
                } else if (v.type === 'bulleted_list_item') {
                  return <li key={`${k}-heading-${i}`}>{v.content}</li>;
                }
              })}
            </section>
          );
        })}
      </section>

      <p className="hidden print:block print:text-blue-500">
        Create your own note from your audio using Audea now, at
        https://app.audea.id.
      </p>

      <MadeWithAudea username={content.username} />

      <Button className={cn('print:hidden')} variant="outline" asChild>
        <a className="flex items-center justify-center" href="/">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Go back to Audea
        </a>
      </Button>

      <Toast />
    </main>
  );
}
