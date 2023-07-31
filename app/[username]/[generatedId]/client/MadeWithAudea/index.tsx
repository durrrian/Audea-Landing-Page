import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import cn from '@/utils/cn';

export default function MadeWithAudea({ username }: { username: string }) {
  return (
    <Card
      className={cn(
        'w-fit mx-auto p-4 flex flex-col items-center justify-center gap-4 select-none print:hidden'
      )}
    >
      <p className="max-w-[250px] text-center">
        This note is created from @{username}&apos;s audio using Artificial
        Intelligence.
      </p>
      <a
        href="https://app.audea.id"
        className="w-fit h-fit block"
        target="_blank"
      >
        <Button
          tabIndex={-1}
          className={cn('flex items-center justify-center gap-2')}
        >
          <div className="w-fit h-fit rounded-sm overflow-hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H24V24H0V0Z" fill="#2C5EA8" />
              <path
                d="M10.0568 13.6746H13.9839L12.062 7.68027H12.0207L10.0568 13.6746ZM9.82947 6.17104C10.1814 5.22043 10.9874 4.45581 12.0413 4.45581C13.1366 4.45581 13.9019 5.1791 14.2525 6.17104L18.3043 17.415C18.4276 17.7456 18.4696 18.0356 18.4696 18.1803C18.4696 18.9862 17.8076 19.5442 17.0437 19.5442C16.1751 19.5442 15.7411 19.0896 15.5344 18.4696L14.9145 16.5264H9.16818L8.54822 18.4489C8.34157 19.0896 7.90693 19.5442 7.05965 19.5442C6.23303 19.5442 5.53041 18.9242 5.53041 18.0976C5.53041 17.767 5.63374 17.519 5.67507 17.415L9.82947 6.17104Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="block">Create your own</span>
        </Button>
      </a>
    </Card>
  );
}
