import { ReactNode } from 'react';
import classNames from 'classnames';

type Level = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  children: ReactNode;
  level: Level;
}

export function Heading(props: HeadingProps) {
  const { level: HeadingElement, children } = props;

  return (
    <HeadingElement
      className={classNames(
        HeadingElement === 'h1' && 'text-4xl font-bold',
        HeadingElement === 'h2' && 'text-3xl font-semibold',
        HeadingElement === 'h3' && 'text-2xl font-semibold',
        HeadingElement === 'h4' && 'text-xl font-bold',
        HeadingElement === 'h5' && 'text-lg font-bold',
        HeadingElement === 'h5' && 'text-base font-bold'
      )}
    >
      {children}
    </HeadingElement>
  );
}
