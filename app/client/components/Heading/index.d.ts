import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IHeading
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
