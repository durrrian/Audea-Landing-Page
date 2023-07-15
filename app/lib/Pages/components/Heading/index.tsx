import type { IHeading } from './index.d';

export const Heading = ({ as, children, ...props }: IHeading) => {
  const classStr =
    'font-medium md:text-4xl text-3xl text-transparent bg-clip-text bg-gradient-to-b from-landingPage-linierTitleTop to-landingPage-linierTitleBottom dark:from-landingPage-linierTitleTop dark:to-landingPage-linierTitleBottom max-w-[550px] mx-auto';

  if (as === 'h1') {
    return (
      <h1 className={classStr} {...props}>
        {children}
      </h1>
    );
  } else if (as === 'h2') {
    return (
      <h2 className={classStr} {...props}>
        {children}
      </h2>
    );
  } else if (as === 'h3') {
    return (
      <h3 className={classStr} {...props}>
        {children}
      </h3>
    );
  } else if (as === 'h4') {
    return (
      <h4 className={classStr} {...props}>
        {children}
      </h4>
    );
  } else if (as === 'h5') {
    return (
      <h5 className={classStr} {...props}>
        {children}
      </h5>
    );
  } else {
    return (
      <h6 className={classStr} {...props}>
        {children}
      </h6>
    );
  }
};
