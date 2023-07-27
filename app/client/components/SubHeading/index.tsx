import type { ISubHeading } from './index.d';

export const SubHeading = ({ children, ...props }: ISubHeading) => {
  return (
    <p
      className="text-xl font-normal text-transparent bg-clip-text bg-gradient-to-b from-landingPage-linierFooterTop to-landingPage-linierFooterBottom dark:from-landingPage-linierFooterTop dark:to-landingPage-linierFooterBottom max-w-[800px]"
      {...props}
    >
      {children}
    </p>
  );
};
