'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DarkModeContext } from '@/context/DarkMode';
import cn from '@/utils/cn';
import {
  CaseSensitive,
  ChevronDown,
  Moon,
  Printer,
  Share2,
  Sun,
} from 'lucide-react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Roboto, Open_Sans, Merriweather } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400'] });

export default function ActionMenu({
  url,
  onFontChange,
}: {
  url: string;
  onFontChange: (_font: string) => void;
}) {
  const darkMode = useContext(DarkModeContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={cn('print:hidden select-none')}>
          Actions <ChevronDown className="ml-2 w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={cn('select-none')}>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {darkMode?.darkMode ? (
          <DropdownMenuItem
            className={cn('cursor-pointer')}
            onClick={() => {
              darkMode?.toggleDarkMode();
            }}
          >
            <Sun className="mr-2 w-4 h-4" /> Turn off dark mode
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem
            className={cn('cursor-pointer')}
            onClick={() => {
              darkMode?.toggleDarkMode();
            }}
          >
            <Moon className="mr-2 w-4 h-4" /> Turn on dark mode
          </DropdownMenuItem>
        )}

        <DropdownMenuItem
          className={cn('cursor-pointer')}
          onClick={() => {
            window.print();
          }}
        >
          <Printer className="mr-2 w-4 h-4" /> Print
        </DropdownMenuItem>

        <DropdownMenuItem
          className={cn('cursor-pointer')}
          onClick={() => {
            toast.promise(navigator.clipboard.writeText(url), {
              loading: 'Copying link...',
              success: 'Copied link!',
              error: 'Error copying link!',
            });
          }}
        >
          <Share2 className="mr-2 w-4 h-4" /> Copy link
        </DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <CaseSensitive className="mr-2 h-4 w-4" />
            Change font
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                className={cn('cursor-pointer')}
                onClick={() => onFontChange('default')}
              >
                <span>Default</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className={cn('cursor-pointer')}
                onClick={() => onFontChange('roboto')}
              >
                <span className={`${roboto.className}`}>Roboto</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className={cn('cursor-pointer')}
                onClick={() => onFontChange('open-sans')}
              >
                <span className={`${openSans.className}`}>Open Sans</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className={cn('cursor-pointer')}
                onClick={() => onFontChange('merriweather')}
              >
                <span className={`${merriweather.className}`}>
                  Merriweather
                </span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
